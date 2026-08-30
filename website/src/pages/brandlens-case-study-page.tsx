import { Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  CirclePause,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  LockKeyhole,
  SearchCheck,
  ShieldCheck,
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

const developmentSteps = [
  {
    number: "01",
    title: "People set the brief",
    description:
      "HGM approved the users, required features, data, limits and success measures before AI changed anything.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "AI planned the build",
    description:
      "The approved brief became a technical plan covering access, data, testing and clear stop points.",
    icon: Bot,
  },
  {
    number: "03",
    title: "AI built in staging",
    description:
      "Work stayed on a feature branch and one test backend. Supabase MCP provided narrow development access, not permission to release.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Evidence supported deployment",
    description:
      "Automated checks and a real browser proved the key journeys. Approved GitHub changes now deploy automatically through Netlify.",
    icon: SearchCheck,
  },
] as const

const includedFeatures = [
  "A shared brand portfolio",
  "Manager and viewer access",
  "Daily public-source scans",
  "Sentiment evidence and trends",
] as const

const excludedFeatures = [
  "Alerts and exports",
  "Competitor comparisons",
  "Social account connections",
  "Custom reporting tools",
] as const

const simpleChoices = [
  "One React web app",
  "One Supabase backend",
  "Two clear staff roles",
  "Server-side AI and secrets",
  "One GitHub-to-Netlify release path",
] as const

const technology = [
  ["Interface", "React, TypeScript, Vite, Tailwind and shadcn/ui", Code2],
  ["Data and access", "Supabase", Database],
  ["AI discovery and assessment", "OpenAI", Bot],
  ["Controlled development access", "Supabase MCP", LockKeyhole],
  ["Source and deployment", "GitHub and Netlify", GitBranch],
] as const

const evidence = [
  ["Public sources", "3"],
  ["Unique mentions", "20"],
  ["30-day score", "+40"],
  ["Duplicate results", "0"],
] as const

export function BrandlensCaseStudyPage() {
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
            <span className="hidden sm:inline">Internal app guidance</span>
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
        <section className="section-shell py-12 sm:py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.12em] text-primary uppercase">
              HGM case study
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Building Brandlens with AI
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              Brandlens tracks how brands are discussed online. HGM used AI to
              plan, build and test the app while people controlled the scope,
              access and release decisions.
            </p>
            <div
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Current status"
            >
              <Badge>Built and tested</Badge>
              <Badge variant="outline">Deployed on Netlify</Badge>
              <Badge variant="outline">Auto-deploys from GitHub</Badge>
            </div>
          </div>
        </section>

        <section className="border-y bg-card/70 py-12 sm:py-16">
          <div className="section-shell flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                The AI development process
              </h2>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                AI accelerated the technical work. It did not decide the product
                or approve its own release.
              </p>
            </div>
            <ol
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
              aria-label="AI development process"
            >
              {developmentSteps.map((step) => {
                const Icon = step.icon
                return (
                  <li key={step.number}>
                    <Card className="h-full" size="sm">
                      <CardHeader>
                        <div className="flex items-center justify-between gap-4">
                          <Icon
                            className="size-6 text-primary"
                            aria-hidden="true"
                          />
                          <span className="font-mono text-xs text-muted-foreground">
                            {step.number}
                          </span>
                        </div>
                        <CardTitle>{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{step.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                YAGNI and KISS in practice
              </h2>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                The app contains only what the approved first release needs,
                using the simplest secure design that meets those needs.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CheckCircle2
                    className="size-6 text-primary"
                    aria-hidden="true"
                  />
                  <CardTitle>YAGNI: build only what is needed now</CardTitle>
                  <CardDescription>
                    Every included feature supports a current requirement.
                    Useful ideas without an immediate need stayed out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-semibold">Included</h3>
                    <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                      {includedFeatures.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Left out</h3>
                    <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                      {excludedFeatures.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <ShieldCheck
                    className="size-6 text-primary"
                    aria-hidden="true"
                  />
                  <CardTitle>KISS: choose the simplest secure design</CardTitle>
                  <CardDescription>
                    The build reused HGM's standard tools and avoided custom
                    infrastructure or unnecessary layers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {simpleChoices.map((choice) => (
                      <li
                        key={choice}
                        className="rounded-lg bg-muted p-3 text-sm"
                      >
                        {choice}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-y bg-card/70 py-12 sm:py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                A small, standard stack
              </h2>
              <p className="mt-2 text-muted-foreground">
                Each tool has one clear role. Supabase MCP was controlled
                development access and is not part of the finished app.
              </p>
            </div>
            <dl className="grid gap-3">
              {technology.map(([purpose, tools, Icon]) => (
                <div
                  key={purpose}
                  className="grid gap-2 rounded-xl border bg-card p-4 sm:grid-cols-[1fr_1.35fr] sm:items-center"
                >
                  <dt className="flex items-center gap-2 font-semibold">
                    <Icon className="size-5" aria-hidden="true" />
                    {purpose}
                  </dt>
                  <dd className="text-sm text-muted-foreground">{tools}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">
                  What the test proved
                </h2>
                <p className="mt-2 max-w-3xl text-muted-foreground">
                  A public Halliday Wine Companion test reached a complete,
                  duplicate-free result. Sentiment remains an AI assessment, not
                  an objective fact or exhaustive media-monitoring record.
                </p>
              </div>
              <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {evidence.map(([label, value]) => (
                  <div key={label} className="rounded-xl border bg-card p-4">
                    <dt className="text-sm text-muted-foreground">{label}</dt>
                    <dd className="mt-2 text-3xl font-semibold tracking-tight">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <Card>
              <CardHeader>
                <CirclePause
                  className="size-6 text-primary"
                  aria-hidden="true"
                />
                <CardTitle>Human controls remain</CardTitle>
                <CardDescription>
                  Automatic deployment does not broaden access or activate
                  monitoring.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3 text-sm">
                  <li>Complete an independent review.</li>
                  <li>Approve the daily schedule before activation.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t bg-card/80">
        <div className="section-shell py-7 text-sm text-muted-foreground">
          <p>HGM internal guidance · Brandlens case study</p>
        </div>
      </footer>
    </div>
  )
}
