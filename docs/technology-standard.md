# HGM Web-App Technology Standard

## Purpose

This standard gives HGM one understandable, reviewable baseline for AI-assisted web applications. It applies to internal apps, anonymous public apps, and authenticated customer portals.

Use the simplest correct implementation. Do not add a service, framework, abstraction, or configuration because it might be useful later.

## Product principles

- **MVP:** deliver the smallest end-to-end version that gives users a useful, testable outcome.
- **YAGNI:** add only what a current approved requirement needs.
- **KISS:** choose the simplest secure design that meets the technical brief.

Every feature, service, dependency, role, and abstraction must map to a current acceptance test. These principles never reduce security, accessibility, testing, or approval requirements.

## Required stack

| Responsibility | Standard | Rule |
| --- | --- | --- |
| Language | TypeScript | Use strict types. Do not introduce JavaScript source files into a TypeScript app without an approved reason. |
| Interface | React | Keep components and state local until a repeated need justifies a shared abstraction. |
| Build | Vite | Use a client-rendered SPA by default. |
| Routing | TanStack Router | Use file-based routes and typed router context. |
| Styling | Tailwind CSS | Use semantic design tokens and the existing project configuration. |
| Components | shadcn/ui | Add source components through the current shadcn CLI and compose existing components before creating equivalents. |
| Backend | Supabase | Use only the required capabilities from Auth, Postgres, Data API, Storage, Edge Functions, Cron, Queues, Realtime, or Vector. |
| Supabase access | Official Supabase MCP | Scope it to the approved development project, use read-only mode for discovery and review, and enable only required feature groups. |
| Database guidance | Supabase skills | Apply the official `supabase` skill for current platform guidance and `supabase-postgres-best-practices` for SQL, schema, RLS, indexing, connections, and performance work. |
| Frontend delivery | Netlify | Use Git-connected deploy previews and the approved production path. |
| Source and review | GitHub | Use branches, pull requests, required checks, and named human reviewers. |

Pin direct dependency versions and commit the lockfile. Confirm the supported Node, TypeScript, Supabase, TanStack, Tailwind, and shadcn versions before creating or upgrading an application.

## Frontend architecture

- Keep one React application unless the approved technical brief demonstrates a need for multiple deployable frontends.
- Use TanStack Router file-based routes. Commit generated route artifacts when the current TanStack tooling requires them.
- Pass authentication state and shared route dependencies through typed router context.
- Use `beforeLoad` for route navigation and redirect behavior only. RLS and Edge Functions remain the authorization boundary.
- Use route loaders and the Supabase client for ordinary route data.
- Add TanStack Query only when shared caching, mutation coordination, or targeted invalidation is a current requirement.
- Validate route parameters and search parameters before using them.
- Define pending, empty, error, not-found, and unauthorized states explicitly.
- Keep privileged operations out of browser loaders and components.

### Rendering exception

A Vite SPA is the default. If a public application needs server rendering, pre-rendering, or search-engine indexing that the SPA cannot meet, record the requirement and approval in the HGM Technical Brief before introducing TanStack Start or another static-rendering step. Do not switch rendering models as an implementation convenience.

## Tailwind and shadcn/ui

- Inspect `components.json` and the current shadcn project information before adding or changing components.
- Use the configured package manager and current shadcn CLI. Read the current component documentation before implementation.
- Use installed components and built-in variants first.
- Use semantic tokens for colour, typography, borders, and states. Do not scatter raw brand colour values through components.
- Preserve the configured aliases, primitive base, icon library, Tailwind version, and global CSS location.
- Treat shadcn components as application source code: review added files, imports, accessibility, and local changes.
- Forms need associated labels, instructions, validation messages, focus behavior, and programmatic invalid state.
- Dialogs, sheets, drawers, menus, and feedback must remain usable with a keyboard and assistive technology.
- Do not add a second component library unless an approved requirement cannot reasonably be met by the baseline.

## Supabase architecture

- Keep internal tables and privileged helpers in unexposed schemas.
- Expose a narrow `api` schema through the Data API when direct browser access is required.
- Use explicit grants and RLS for every exposed table or view. A grant makes an object reachable; RLS controls which rows are reachable.
- Prefer direct Data API access for ordinary user-scoped CRUD when RLS fully expresses the rule.
- Use Edge Functions for secrets, privileged changes, third-party APIs, webhooks, quotas, rate limits, and operations that cannot be expressed safely with RLS.
- Use private Storage buckets by default. Public buckets require an explicit public-content requirement.
- Use Cron, Queues, Realtime, and Vector only for an approved current need.
- Keep migration files in version control and verify them locally or in an isolated Supabase environment before review.
- Use Supabase MCP for current documentation, project inspection, advisors, and approved non-production work. Follow [the MCP and Postgres workflow](supabase-mcp-and-postgres.md).
- Apply Supabase's Postgres best-practices skill whenever work writes or reviews SQL, schema, indexes, RLS, connection behavior, locking, data access, or query performance.

## Data flow

```text
User
  -> Netlify-hosted React app
     -> public Supabase Data API object with explicit grants and RLS
     -> authenticated Supabase Data API object with ownership or membership RLS
     -> authenticated Edge Function for privileged work or third-party integrations
        -> private database objects, Storage, or external service
```

Do not create a second backend, database, identity provider, function host, queue, or storage service unless the approved technical brief documents why Supabase cannot meet the requirement.

## Quality baseline

Every application must have proportionate automated checks for:

- formatting and linting
- TypeScript type checking
- unit tests for business rules
- integration tests for data and permission boundaries
- build output
- critical browser journeys
- dependency and secret scanning
- Supabase database and security advisors when schema work is included

Tests must cover success, invalid input, dependency failure, and denied access. A route redirect or hidden button does not prove that data access is denied.
