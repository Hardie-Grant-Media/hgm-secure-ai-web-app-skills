import { existsSync, readFileSync, readdirSync } from "node:fs"
import path from "node:path"

const repositoryRoot = path.resolve(import.meta.dirname, "..")
const skillRoot = path.join(repositoryRoot, "skills")
const markdownLinkPattern = /\[[^\]]*\]\(([^)]+)\)/g

const errors = []

function checkMarkdownLinks(filePath) {
  const content = readFileSync(filePath, "utf8")

  for (const match of content.matchAll(markdownLinkPattern)) {
    const target = match[1].split("#", 1)[0]
    if (!target || target.includes("://") || target.startsWith("mailto:")) {
      continue
    }

    if (!existsSync(path.resolve(path.dirname(filePath), target))) {
      errors.push(`${path.relative(repositoryRoot, filePath)}: missing ${target}`)
    }
  }
}

for (const entry of readdirSync(skillRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue

  const skillFile = path.join(skillRoot, entry.name, "SKILL.md")
  if (!existsSync(skillFile)) {
    errors.push(`skills/${entry.name}: missing SKILL.md`)
    continue
  }

  const content = readFileSync(skillFile, "utf8")
  const frontmatter = content.match(/^---\n([\s\S]*?)\n---/)
  const declaredName = frontmatter?.[1].match(/^name:\s*(.+)$/m)?.[1]
  const description = frontmatter?.[1].match(/^description:\s*(.+)$/m)?.[1]

  if (declaredName !== entry.name) {
    errors.push(`skills/${entry.name}: frontmatter name must match the folder`)
  }
  if (!description) {
    errors.push(`skills/${entry.name}: description is required`)
  }

  checkMarkdownLinks(skillFile)
}

for (const directory of ["docs", "templates", "tests"]) {
  for (const file of readdirSync(path.join(repositoryRoot, directory))) {
    if (file.endsWith(".md")) {
      checkMarkdownLinks(path.join(repositoryRoot, directory, file))
    }
  }
}

checkMarkdownLinks(path.join(repositoryRoot, "README.md"))

if (errors.length > 0) {
  console.error(errors.join("\n"))
  process.exit(1)
}

console.log("Content validation passed.")
