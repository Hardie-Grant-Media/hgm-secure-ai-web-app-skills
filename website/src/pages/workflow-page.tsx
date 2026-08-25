import { useState } from "react"
import {
  ArrowRight,
  BookOpenCheck,
  Building2,
  Check,
  Code2,
  Copy,
  Download,
  ExternalLink,
  Globe2,
  SearchCheck,
  ShieldCheck,
  UsersRound,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const repositoryUrl =
  import.meta.env.VITE_REPOSITORY_URL ||
  "https://github.com/Hardie-Grant-Media/hgm-secure-ai-web-app-skills"
const downloadBase = `${import.meta.env.BASE_URL}downloads`

const skillFlow = [
  ["Provide requirements", "Approved features, users, and data", BookOpenCheck],
  ["Plan the build", "Routes, access, and environments", ShieldCheck],
  ["Build + secure", "Simple preview with access tests", Code2],
  ["Review + handoff", "A human decides release", SearchCheck],
] as const

const boundaries = [
  ["Can change", "Only the approved app work"],
  ["Must protect", "Data, access, and existing work"],
  ["Must never", "Expose secrets, use production data, or weaken access"],
  ["Must stop", "The scope or authority is unclear"],
  ["Must prove", "Who can and cannot use each feature"],
] as const

const profiles = [
  ["HGM staff", "Staff sign-in with named access", Building2],
  ["Everyone", "Only approved information is public", Globe2],
  ["Customers", "Each customer sees only their own data", UsersRound],
] as const

const techStack = [
  ["React + TypeScript", "App"],
  ["Vite", "Build"],
  ["TanStack Router", "Routes"],
  ["Tailwind + shadcn/ui", "UI"],
  ["Supabase + MCP", "Backend"],
  ["Postgres best practices", "Database"],
  ["GitHub + Netlify", "Delivery"],
] as const

const principles = [
  "Smallest useful version",
  "Only what is needed",
  "Keep it simple",
] as const

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

export function WorkflowPage() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">(
    "idle"
  )
  const installPrompt = `Install the HGM master web-app skill from:
${repositoryUrl}/tree/main/skills/hgm-web-app

Use your built-in skill installer. Install only skills/hgm-web-app and confirm it is available on the next turn. Do not start app work.`

  async function copyInstallPrompt() {
    try {
      await navigator.clipboard.writeText(installPrompt)
      setCopyStatus("copied")
    } catch {
      setCopyStatus("failed")
    }
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="section-shell flex h-16 items-center justify-between gap-5">
          <a
            href="#top"
            className="flex items-center gap-3 font-semibold"
            aria-label="HGM workflow home"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground">
              HGM
            </span>
            <span className="hidden sm:inline">AI app documentation</span>
          </a>
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-5 text-sm font-medium md:flex"
          >
            <a href="#workflow">Workflow</a>
            <a href="#install">Install</a>
            <a href="#profiles">Access</a>
            <a href="#boundaries">AI rules</a>
            <a href="#technical">Technical</a>
          </nav>
          <Button asChild size="sm" variant="ghost">
            <a href={repositoryUrl} target="_blank" rel="noreferrer">
              Repository
              <ExternalLink data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </header>

      <main id="main-content">
        <section
          id="top"
          className="section-shell flex min-h-[60svh] items-center py-16"
        >
          <div className="flex flex-col items-start gap-6">
            <Badge variant="secondary">Technical delivery</Badge>
            <h1 className="max-w-3xl text-5xl leading-none font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">
              HGM secure AI web apps
            </h1>
            <p className="max-w-xl text-xl leading-8 text-muted-foreground">
              Bring approved requirements. The skill handles technical planning,
              secure building, and review.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#install">
                  Paste this into your coding agent
                  <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`${downloadBase}/hgm-web-app.zip`} download>
                  <Download data-icon="inline-start" />
                  Download skill
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="workflow" className="border-y bg-card/70 py-16 sm:py-20">
          <div className="section-shell flex flex-col gap-9">
            <SectionHeading label="Process" title="How the skill works" />

            <div className="flex flex-wrap gap-2">
              {principles.map((principle) => (
                <Badge key={principle} variant="outline">
                  {principle}
                </Badge>
              ))}
            </div>

            <ol
              className="grid gap-6 md:grid-cols-4"
              aria-label="HGM master skill workflow"
            >
              {skillFlow.map(([title, text, Icon], index) => (
                <li key={title} className="relative">
                  <Card className="h-full" size="sm">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-4">
                        <Icon
                          className="size-6 text-primary"
                          aria-hidden="true"
                        />
                        <span className="font-mono text-xs text-muted-foreground">
                          0{index + 1}
                        </span>
                      </div>
                      <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{text}</CardDescription>
                    </CardContent>
                  </Card>
                  {index < skillFlow.length - 1 && (
                    <ArrowRight
                      className="absolute top-1/2 -right-5 hidden size-5 -translate-y-1/2 text-muted-foreground md:block"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="install" className="section-shell py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionHeading
              label="Install"
              title="Paste this into your coding agent"
            />
            <Card>
              <CardHeader>
                <CardTitle>Install the master skill</CardTitle>
                <CardDescription>
                  This installs the technical workflow. It does not start an
                  app.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <pre className="overflow-x-auto rounded-lg bg-primary p-4 text-sm leading-6 whitespace-pre-wrap text-primary-foreground">
                  <code>{installPrompt}</code>
                </pre>
                <div className="flex items-center gap-3">
                  <Button type="button" onClick={copyInstallPrompt}>
                    {copyStatus === "copied" ? (
                      <Check data-icon="inline-start" />
                    ) : (
                      <Copy data-icon="inline-start" />
                    )}
                    {copyStatus === "copied" ? "Copied" : "Copy prompt"}
                  </Button>
                  <span
                    className="text-sm text-muted-foreground"
                    aria-live="polite"
                  >
                    {copyStatus === "copied" && "Ready to paste."}
                    {copyStatus === "failed" &&
                      "Select the prompt and copy it."}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="profiles"
          className="bg-primary py-16 text-primary-foreground sm:py-20"
        >
          <div className="section-shell flex flex-col gap-9">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold tracking-[0.14em] uppercase opacity-75">
                Approved access
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                How will users access it?
              </h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {profiles.map(([title, text, Icon]) => (
                <Card key={title}>
                  <CardHeader>
                    <Icon className="size-6 text-primary" aria-hidden="true" />
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{text}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="boundaries" className="section-shell py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionHeading
              label="AI rules"
              title="What AI can and cannot do"
            />
            <Card>
              <CardHeader>
                <CardTitle>Simple boundaries</CardTitle>
                <CardDescription>
                  The AI must stay within these limits.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {boundaries.map(([title, text]) => (
                  <div
                    key={title}
                    className="grid gap-1 rounded-lg bg-muted p-4 sm:grid-cols-[7rem_1fr] sm:items-center"
                  >
                    <strong>{title}</strong>
                    <span className="text-sm text-muted-foreground">
                      {text}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="technical" className="border-t bg-card/70 py-16 sm:py-20">
          <div className="section-shell flex flex-col gap-8">
            <SectionHeading
              label="Technical reference"
              title="Approved stack"
            />
            <Card>
              <CardHeader>
                <CardTitle>Tools used</CardTitle>
                <CardDescription>
                  For technical teams and maintainers.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {techStack.map(([name, purpose]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-3 rounded-lg bg-muted px-3 py-2"
                  >
                    <strong className="text-sm">{name}</strong>
                    <span className="text-xs text-muted-foreground">
                      {purpose}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t bg-card/80">
        <div className="section-shell py-7 text-sm text-muted-foreground">
          <p>HGM internal documentation</p>
        </div>
      </footer>
    </div>
  )
}
