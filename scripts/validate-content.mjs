import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const repositoryRoot = path.resolve(import.meta.dirname, "..");
const skillRoot = path.join(repositoryRoot, "skills");
const markdownLinkPattern = /\[[^\]]*\]\(([^)]+)\)/g;
const secretPatterns = [
  ["OpenAI project token", /\bsk-(?:proj|svcacct)-[A-Za-z0-9_-]{20,}\b/g],
  ["Supabase secret token", /\bsb_secret_[A-Za-z0-9_-]{20,}\b/g],
  ["GitHub access token", /\bgh[pousr]_[A-Za-z0-9]{36,}\b/g],
  [
    "JWT-like token",
    /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g,
  ],
];

const errors = [];

function findMarkdownFiles(directory) {
  const markdownFiles = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      markdownFiles.push(...findMarkdownFiles(entryPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      markdownFiles.push(entryPath);
    }
  }

  return markdownFiles;
}

function checkMarkdownFile(filePath) {
  const content = readFileSync(filePath, "utf8");
  const relativeFilePath = path.relative(repositoryRoot, filePath);

  for (const match of content.matchAll(markdownLinkPattern)) {
    const target = match[1].split("#", 1)[0];
    if (!target || target.includes("://") || target.startsWith("mailto:")) {
      continue;
    }

    if (!existsSync(path.resolve(path.dirname(filePath), target))) {
      errors.push(`${relativeFilePath}: missing ${target}`);
    }
  }

  for (const [label, pattern] of secretPatterns) {
    pattern.lastIndex = 0;
    if (pattern.test(content)) {
      errors.push(`${relativeFilePath}: contains a high-confidence ${label}`);
    }
  }
}

for (const entry of readdirSync(skillRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;

  const skillFile = path.join(skillRoot, entry.name, "SKILL.md");
  if (!existsSync(skillFile)) {
    errors.push(`skills/${entry.name}: missing SKILL.md`);
    continue;
  }

  const content = readFileSync(skillFile, "utf8");
  const frontmatter = content.match(/^---\n([\s\S]*?)\n---/);
  const declaredName = frontmatter?.[1].match(/^name:\s*(.+)$/m)?.[1];
  const description = frontmatter?.[1].match(/^description:\s*(.+)$/m)?.[1];

  if (declaredName !== entry.name) {
    errors.push(`skills/${entry.name}: frontmatter name must match the folder`);
  }
  if (!description) {
    errors.push(`skills/${entry.name}: description is required`);
  }
}

const markdownFiles = new Set([path.join(repositoryRoot, "README.md")]);
for (const directory of ["docs", "templates", "tests", "examples", "skills"]) {
  for (const filePath of findMarkdownFiles(
    path.join(repositoryRoot, directory),
  )) {
    markdownFiles.add(filePath);
  }
}

for (const filePath of markdownFiles) {
  checkMarkdownFile(filePath);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Content validation passed for ${markdownFiles.size} Markdown files.`,
);
