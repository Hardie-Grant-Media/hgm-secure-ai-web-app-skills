import { Link } from "@tanstack/react-router"
import {
  ArrowLeft,
  Bot,
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
      "HGM approved the audience, essential features, data boundaries and success measures before any build work began.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "AI planned the build",
    description:
      "The HGM web-app skills helped AI turn the brief into a practical plan for access, data, testing and approval points.",
    icon: Bot,
  },
  {
    number: "03",
    title: "AI built in staging",
    description:
      "AI wrote and tested the app on a feature branch against one named test environment, with secrets kept out of the browser and source code.",
    icon: Code2,
  },
  {
    number: "04",
    title: "People reviewed the evidence",
    description:
      "Automated checks, database readback and a real browser proved the important journeys before approved changes deployed through Netlify.",
    icon: SearchCheck,
  },
] as const

const productCapabilities = [
  {
    title: "A shared brand portfolio",
    description:
      "Staff can add each brand's official identity, aliases, market, language and social profiles in one place.",
    icon: Database,
  },
  {
    title: "Daily public-web discovery",
    description:
      "The app looks for relevant public sources, keeps the cited passage and records gaps when a page cannot be checked.",
    icon: SearchCheck,
  },
  {
    title: "Evidence behind the trend",
    description:
      "Each mention includes an AI sentiment assessment and reason, while the dashboard shows volume, score and scan health over time.",
    icon: Bot,
  },
] as const

const deliveryControls = [
  {
    title: "HGM web-app skills",
    description:
      "Reusable instructions kept the work inside the approved brief and required evidence before each major handoff.",
    icon: ShieldCheck,
  },
  {
    title: "Supabase MCP",
    description:
      "A controlled development connection let AI inspect and change the named test backend. It was not part of the app or permission to release it.",
    icon: LockKeyhole,
  },
  {
    title: "Human decisions",
    description:
      "People approved the product, access model, deployment and whether automated daily monitoring could be activated.",
    icon: CirclePause,
  },
] as const

const technology = [
  [
    "Staff interface",
    "React, TypeScript, Vite, Tailwind and shadcn/ui",
    "A clear, accessible web interface for the portfolio, evidence and scan history.",
    Code2,
  ],
  [
    "Data and access",
    "Supabase",
    "Sign-in, roles, brand records, evidence, daily summaries and background work.",
    Database,
  ],
  [
    "Discovery and assessment",
    "OpenAI",
    "Public-web discovery with citations, followed by an evidence-based sentiment assessment.",
    Bot,
  ],
  [
    "Source and deployment",
    "GitHub and Netlify",
    "Reviewed source changes automatically build and deploy from the approved branch.",
    GitBranch,
  ],
] as const

const evidence = [
  ["Public sources", "3"],
  ["Unique mentions", "20"],
  ["Positive", "8"],
  ["Neutral", "12"],
  ["Negative", "0"],
  ["30-day score", "+40"],
  ["Duplicate results", "0"],
  ["Coverage failures", "0"],
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
              Brandlens tracks how brands are discussed online. This case study
              shows HGM teams how an approved idea became a working app with AI
              while people retained control of scope, access and release.
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
          <div className="section-shell grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 className="text-3xl font-semibold tracking-tight">
              Why this case study exists
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground">
              <p>
                It gives staff and executives a concrete example of AI-assisted
                development: where people made decisions, what AI did and how
                access was limited.
              </p>
              <p>
                It also records the evidence required before deployment so the
                same safe workflow can be understood and reused. It is not a
                sales page or a complete technical manual.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16">
          <div className="flex flex-col gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight">
                What Brandlens was built to do
              </h2>
              <p className="mt-2 text-muted-foreground">
                Brandlens gives HGM a daily, reviewable view of how selected
                brands appear across the public web. Social-profile links help
                identify a brand; they are not connected social integrations.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {productCapabilities.map((capability) => {
                const Icon = capability.icon
                return (
                  <Card key={capability.title} className="h-full">
                    <CardHeader>
                      <Icon
                        className="size-6 text-primary"
                        aria-hidden="true"
                      />
                      <CardTitle>{capability.title}</CardTitle>
                      <CardDescription>
                        {capability.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y bg-card/70 py-12 sm:py-16">
          <div className="section-shell">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">
                  How it was built
                </h2>
                <p className="mt-2 max-w-3xl text-muted-foreground">
                  AI accelerated the technical work. It did not decide the
                  product or approve its own release.
                </p>
              </div>
              <ol
                className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
                aria-label="How Brandlens was built"
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
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16">
          <div className="flex flex-col gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight">
                How guidance and access worked
              </h2>
              <p className="mt-2 text-muted-foreground">
                The guidance, development connection and approval decisions had
                separate jobs. None of them replaced the others.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {deliveryControls.map((control) => {
                const Icon = control.icon
                return (
                  <Card key={control.title} className="h-full">
                    <CardHeader>
                      <Icon
                        className="size-6 text-primary"
                        aria-hidden="true"
                      />
                      <CardTitle>{control.title}</CardTitle>
                      <CardDescription>{control.description}</CardDescription>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y bg-card/70 py-12 sm:py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                The technology and its purpose
              </h2>
              <p className="mt-2 text-muted-foreground">
                The app uses a small set of standard services, each with one
                clear responsibility.
              </p>
            </div>
            <dl className="grid gap-3">
              {technology.map(([purpose, tools, description, Icon]) => (
                <div
                  key={purpose}
                  className="grid gap-2 rounded-xl border bg-card p-4 sm:grid-cols-[0.85fr_1.4fr] sm:items-start"
                >
                  <dt className="flex items-center gap-2 font-semibold">
                    <Icon className="size-5" aria-hidden="true" />
                    {purpose}
                  </dt>
                  <dd className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{tools}</span>
                    <span className="mt-1 block">{description}</span>
                  </dd>
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
                  Netlify can publish approved code automatically, but it does
                  not broaden access or activate the daily schedule.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3 text-sm">
                  <li>Complete an independent review.</li>
                  <li>Approve the daily schedule before activation.</li>
                  <li>
                    Keep the public-web and AI-assessment limitations visible.
                  </li>
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
