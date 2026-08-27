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
  RefreshCcw,
  Search,
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

const technology = [
  [
    "The staff website",
    "React, TypeScript, Vite, TanStack Router, Tailwind and shadcn/ui",
    "These are HGM's standard building blocks for a clear, consistent and maintainable web app.",
    Code2,
  ],
  [
    "Sign-in, data and daily work",
    "Supabase",
    "One controlled service holds staff access, brand settings, scan results and the background work needed for daily monitoring.",
    Database,
  ],
  [
    "Finding and assessing mentions",
    "OpenAI",
    "AI searches for public sources and assesses the sentiment of relevant passages. Results remain an assessment, not an objective fact.",
    Bot,
  ],
  [
    "Safe development access",
    "Supabase MCP",
    "A development-only connection let the coding assistant inspect one named test environment and make only the changes that had been approved. It is not part of the staff app.",
    LockKeyhole,
  ],
  [
    "Source control and review",
    "GitHub",
    "Every change sits on a separate feature branch so it can be checked before anyone decides whether to merge it.",
    GitBranch,
  ],
  [
    "Future web hosting",
    "Netlify",
    "Netlify is the approved host for the web interface, but its preview and release steps have not happened in this example.",
    ExternalLink,
  ],
] as const

const buildSteps = [
  [
    "Start with an approved brief",
    "The team agreed what Brandlens should do, who could use it, what data it could keep and what was outside the first release.",
  ],
  [
    "Use the HGM web-app playbook",
    "The hgm-web-app skill kept the work in the right order: plan, build, secure, prove and then stop for human review.",
  ],
  [
    "Build away from the live service",
    "The build-hgm-web-app skill kept changes on a feature branch and connected the local app only to an approved test environment.",
  ],
  [
    "Protect staff access and data",
    "The secure-hgm-supabase skill and official Supabase guidance checked sign-in, manager and viewer access, private credentials and background work.",
  ],
  [
    "Run a real public-source example",
    "Halliday Wine Companion was used as the approved test brand. The team followed the scan until all background work finished and the totals could be checked.",
  ],
  [
    "Stop before release",
    "The review-hgm-web-app skill defines the next independent check. It has not been run, so the example does not claim the app is ready for production.",
  ],
] as const

const informationFlow = [
  ["1", "Discover", "Find likely public pages that mention the brand."],
  ["2", "Check", "Open permitted pages and keep only the relevant passage."],
  [
    "3",
    "Assess",
    "Classify the passage as positive, neutral or negative and explain why.",
  ],
  ["4", "Report", "Save the evidence and update the brand's daily summary."],
] as const

const evidence = [
  ["Public sources checked", "3"],
  ["Unique mentions", "20"],
  ["Positive", "8"],
  ["Neutral", "12"],
  ["Negative", "0"],
  ["30-day score", "+40"],
] as const

const pendingWork = [
  "Create and test the Netlify preview",
  "Complete an independent review",
  "Obtain a named human release decision",
  "Merge the feature branch",
  "Prepare the production environment",
  "Turn on the daily schedule",
] as const

export function BrandlensCaseStudyPage() {
  return (
    <div className="min-h-screen">
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
            <Button asChild size="sm" variant="ghost">
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
              HGM worked example
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              How Brandlens was built
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
              Brandlens helps HGM staff understand how a brand is discussed
              online over time. This page explains, in plain language, which
              tools were used, how the work was checked and why it stopped
              before release.
            </p>
            <div
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Current status"
            >
              <Badge>Test version checked successfully</Badge>
              <Badge variant="outline">Independent review still required</Badge>
              <Badge variant="outline">Not released</Badge>
            </div>
          </div>
        </section>

        <section className="border-y bg-card/70 py-12 sm:py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                What Brandlens does
              </h2>
              <p className="mt-3 text-muted-foreground">
                Managers add a brand, its website, other names it uses and its
                social profiles. Viewers can then read the results without
                changing the setup.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <Search className="size-6 text-primary" aria-hidden="true" />
                  <CardTitle>Daily public-source scan</CardTitle>
                  <CardDescription>
                    Brandlens looks for recent public mentions, checks the
                    accessible source and keeps the relevant evidence.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheck
                    className="size-6 text-primary"
                    aria-hidden="true"
                  />
                  <CardTitle>Evidence, not a verdict</CardTitle>
                  <CardDescription>
                    Staff see the source, the positive, neutral or negative
                    assessment and a short reason so they can review it.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                What was used, and why
              </h2>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                The tools below each had one clear job. This kept the build
                simpler and reduced the number of services HGM needs to manage.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {technology.map(([title, name, description, Icon]) => (
                <Card key={title} size="sm">
                  <CardHeader>
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                    <CardTitle>{title}</CardTitle>
                    <Badge className="w-fit" variant="outline">
                      {name}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y bg-card/70 py-12 sm:py-16">
          <div className="section-shell flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                How the build was managed
              </h2>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                HGM skills are reusable instructions for the coding assistant.
                They kept decisions, testing and approval points consistent.
              </p>
            </div>
            <ol
              className="grid gap-4 md:grid-cols-2"
              aria-label="Brandlens build steps"
            >
              {buildSteps.map(([title, text], index) => (
                <li key={title}>
                  <Card className="h-full" size="sm">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-4">
                        <CheckCircle2
                          className="size-5 text-primary"
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
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                What happens during a scan
              </h2>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                Social profile links help identify the right brand; they are not
                connected accounts or guaranteed monitoring sources.
              </p>
            </div>
            <ol
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              aria-label="Scan process"
            >
              {informationFlow.map(([number, title, text]) => (
                <li key={number}>
                  <Card className="h-full" size="sm">
                    <CardHeader>
                      <span className="font-mono text-xs text-muted-foreground">
                        Step {number}
                      </span>
                      <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{text}</CardDescription>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y bg-card/70 py-12 sm:py-16">
          <div className="section-shell flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                What the test proved
              </h2>
              <p className="mt-2 max-w-3xl text-muted-foreground">
                Halliday Wine Companion was used as the approved public test
                brand. No source passages, private links, account details or
                credentials are included here.
              </p>
            </div>
            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {evidence.map(([label, value]) => (
                <div key={label} className="rounded-xl border bg-card p-5">
                  <dt className="text-sm text-muted-foreground">{label}</dt>
                  <dd className="mt-2 text-3xl font-semibold tracking-tight">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="grid gap-4 md:grid-cols-2">
              <Card size="sm">
                <CardHeader>
                  <RefreshCcw
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                  <CardTitle>
                    Repeating the test did not duplicate results
                  </CardTitle>
                  <CardDescription>
                    The second run did not create extra copies of the same scan,
                    source or mention.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card size="sm">
                <CardHeader>
                  <CheckCircle2
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                  <CardTitle>The totals matched the evidence</CardTitle>
                  <CardDescription>
                    All background work finished, 20 unique mentions were
                    counted and no source failures remained hidden.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              The +40 score is the AI's assessment of this test evidence. It is
              not an objective fact or a promise that every online mention was
              found.
            </p>
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                What still needs to happen
              </h2>
              <p className="mt-2 text-muted-foreground">
                A successful test version is not the same as a released app.
                These steps need named people to review and approve them.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CirclePause
                  className="size-6 text-primary"
                  aria-hidden="true"
                />
                <CardTitle>Not completed in this example</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {pendingWork.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CirclePause
                        className="mt-0.5 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="border-t bg-card/70 py-10">
          <div className="section-shell">
            <Card size="sm">
              <CardHeader>
                <LockKeyhole
                  className="size-5 text-primary"
                  aria-hidden="true"
                />
                <CardTitle>What this example leaves out</CardTitle>
                <CardDescription>
                  The raw chat, credentials, email addresses, private project
                  details, source passages and private URLs are not published.
                  Only the reusable workflow and sanitised test totals are
                  shown.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t bg-card/80">
        <div className="section-shell py-7 text-sm text-muted-foreground">
          <p>HGM internal guidance · Brandlens worked example</p>
        </div>
      </footer>
    </div>
  )
}
