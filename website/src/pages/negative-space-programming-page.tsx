import { Link } from "@tanstack/react-router"
import { ArrowLeft, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react"

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

const principles = [
  ["Set limits", "State what must not happen."],
  ["Check early", "Reject invalid access or information before work starts."],
  ["Stop safely", "Do not guess when required information is missing."],
  ["Test both sides", "Prove what users can and cannot do."],
] as const

const steps = [
  {
    title: "Prepare Supabase",
    text: "Ask an approved Supabase admin to create a separate non-production backend.",
    details: [
      "Internal: Microsoft Entra SAML SSO and app membership.",
      "Public: approved public fields only; server-side, rate-limited writes.",
      "Customer: passwordless sign-in, ownership rules, and MFA for sensitive work.",
      "All apps: row-level security, private storage, server-side secrets, and test data.",
    ],
  },
  {
    title: "Install the skills",
    text: "Install the master hgm-web-app skill in Claude Code or Codex. It selects the specialist guidance when needed.",
  },
  {
    title: "Generate the PRD",
    text: "Define the purpose, users, essential journeys, data, success measures, and safety boundaries.",
  },
  {
    title: "Build with AI",
    text: "Give the PRD to Claude Code or Codex. It plans, builds on a feature branch, and tests allowed and denied behaviour.",
  },
  {
    title: "Review and deploy",
    text: "Use GitHub Pages for a small static app, or Netlify for traffic, previews, server functions, and managed settings. Verify the live app after deployment.",
  },
] as const

export function NegativeSpaceProgrammingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="section-shell flex min-h-16 items-center justify-between gap-4 py-2">
          <Link
            to="/"
            className="flex items-center gap-3 font-semibold"
            aria-label="HGM workflow home"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground">
              HGM
            </span>
            <span className="hidden sm:inline">AI app documentation</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="ghost">
              <Link to="/">
                <ArrowLeft data-icon="inline-start" />
                Workflow
              </Link>
            </Button>
            <Button
              asChild
              className="hidden sm:inline-flex"
              size="sm"
              variant="ghost"
            >
              <a href={repositoryUrl} target="_blank" rel="noreferrer">
                Repository
                <ExternalLink data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="section-shell flex min-h-[52svh] items-center py-16">
          <div className="flex max-w-4xl flex-col items-start gap-6">
            <Badge variant="secondary">Plain-language guide</Badge>
            <h1 className="text-5xl leading-none font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">
              Negative space programming
            </h1>
            <p className="max-w-2xl text-xl leading-8 text-muted-foreground">
              Define what software must refuse, not only what it should do.
            </p>
            <Button asChild size="lg">
              <a href="#build-your-app">
                Build an app
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </section>

        <section className="border-y bg-card/70 py-16 sm:py-20">
          <div className="section-shell flex flex-col gap-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
                The principle
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Clear limits make software safer
              </h2>
              <p className="mt-3 text-lg leading-8 text-muted-foreground">
                An expense app should accept a valid claim. It should refuse a
                duplicate, missing receipt, or manager without permission.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map(([title, text], index) => (
                <Card key={title} className="h-full" size="sm">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-4">
                      <ShieldCheck className="size-5" aria-hidden="true" />
                      <span className="font-mono text-xs text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{text}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="build-your-app" className="section-shell py-16 sm:py-20">
          <div className="flex max-w-3xl flex-col gap-3">
            <p className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
              For HGM staff
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              From idea to app in five steps
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              People set the requirements. AI plans and builds within those
              limits.
            </p>
          </div>

          <ol className="mt-8 flex flex-col gap-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-4">
                      <Badge variant={index === 0 ? "default" : "outline"}>
                        Step {index + 1}
                      </Badge>
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>{step.text}</CardDescription>
                  </CardHeader>
                  {"details" in step && (
                    <CardContent>
                      <ul className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                        {step.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="border-t bg-card/80">
        <div className="section-shell py-7 text-sm text-muted-foreground">
          <p>HGM internal guidance · Negative space programming</p>
        </div>
      </footer>
    </div>
  )
}
