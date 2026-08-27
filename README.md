# HGM Secure AI Web-App Skill Pack

This repository helps HGM teams use AI for the technical planning, building, security, and review of web applications with approved requirements.

It does not decide what app to build. Product discovery, ideation, business cases, user research, feature selection, and acceptance criteria happen before this skill pack is used.

The required baseline is:

- React and TypeScript
- Vite for the default single-page application
- TanStack Router with file-based routes
- Tailwind CSS and shadcn/ui
- Supabase for authentication, Postgres, the Data API, Storage, and Edge Functions
- Supabase MCP for project-scoped development inspection and approved non-production work
- Supabase's `supabase` and `supabase-postgres-best-practices` skills for current platform and database guidance
- Netlify for frontend previews and releases
- GitHub for source control, review, and validation

Optional Supabase services such as Cron, Queues, Realtime, and Vector are used only when an approved requirement needs them.

## Before first use

The technical owner confirms that the coding environment has Supabase's official `supabase` and `supabase-postgres-best-practices` skills available. Connect the official Supabase MCP only to the approved development project, using project scope, read-only mode for discovery, minimum feature groups, and manual tool approval.

If either required skill or the required MCP access is unavailable, database work stops with a clear setup handoff. It must not continue from remembered commands or an unverified schema.

## Choose an application profile

| Profile | Intended users | Identity baseline | Typical exposure |
| --- | --- | --- | --- |
| Internal | HGM employees | Microsoft Entra SSO through Supabase SAML SSO | Signed-in staff only |
| Public | Anonymous visitors | No identity for public reads | Deliberately public information only |
| Customer portal | Customers or partners | Approved Supabase Auth method | Each user or tenant sees only its own data |

An application may combine profiles, but its technical brief must define separate routes, data, permissions, and tests for each profile.

Read [Application profiles](docs/application-profiles.md) before selecting one.

## Follow the safe lifecycle

Use [`hgm-web-app`](skills/hgm-web-app/SKILL.md) as the single entry point. It identifies the current stage and applies the same approval and production boundaries throughout.

The specialist skills remain available for a specific stage:

1. Use [`scope-hgm-web-app`](skills/scope-hgm-web-app/SKILL.md) to translate approved requirements into an HGM Technical Brief.
2. Use [`build-hgm-web-app`](skills/build-hgm-web-app/SKILL.md) to implement only the approved technical brief in a non-production environment.
3. Use [`secure-hgm-supabase`](skills/secure-hgm-supabase/SKILL.md), the official Supabase MCP, and Supabase's Postgres best-practices skill for schema, Auth, RLS, Storage, Edge Function, or SQL work.
4. Test the exact Netlify preview with permitted and denied identities and data.
5. Use [`review-hgm-web-app`](skills/review-hgm-web-app/SKILL.md) for an independent, read-only recommendation.
6. A named human release authority decides whether to merge and release.

See [the Brandlens worked example](examples/brandlens/README.md) for a sanitised golden path that reaches local and staging acceptance, then stops before Netlify, independent review, production, merge, or schedule activation.

The skills do not approve production releases. They stop before production migrations, access changes, merges, and releases.

## Use approved safety boundaries

Approved requirements must include five plain-language **safety boundaries**:

1. What may the AI change?
2. What must stay working and protected?
3. What must the AI not add, access, or do?
4. When must it stop and ask a person?
5. What proof must it show?

The technical-planning skill translates those approved answers into controls and tests. It does not create or change them. The build skill treats them as hard boundaries, and the review skill reports a simple green, amber, or red result.

## Documentation

- [Technology standard](docs/technology-standard.md)
- [Application profiles](docs/application-profiles.md)
- [Security guardrails](docs/security-guardrails.md)
- [Supabase MCP and Postgres workflow](docs/supabase-mcp-and-postgres.md)
- [Delivery and operations](docs/delivery-and-operations.md)
- [Brandlens worked example](examples/brandlens/README.md)
- Plain-language skill documentation:
  - [`hgm-web-app`: workflow coordinator](docs/skills/hgm-web-app.md)
  - [`scope-hgm-web-app`: technical planner](docs/skills/scope-hgm-web-app.md)
  - [`build-hgm-web-app`: non-production builder](docs/skills/build-hgm-web-app.md)
  - [`secure-hgm-supabase`: data and access specialist](docs/skills/secure-hgm-supabase.md)
  - [`review-hgm-web-app`: independent reviewer](docs/skills/review-hgm-web-app.md)

Copy-ready working documents are in [`templates/`](templates/):

- HGM Technical Brief
- Review report
- Threat and permission checklist
- App-repository `AGENTS.md` guardrails
- Staging canary report

Use [the forward-test scenarios](tests/skill-scenarios.md) when changing a skill or shared guardrail. Final acceptance still requires one technical reviewer and one non-technical owner; an AI self-review is not a substitute.

## Standing rules

- Deliver the smallest useful MVP.
- Add only what is needed now (YAGNI).
- Use the simplest secure design (KISS).
- Start with approved requirements. The skills must not invent or expand them.
- Use the minimum services and dependencies required by the approved technical brief.
- Treat browser route guards as user experience, not authorization.
- Keep secrets, privileged logic, and third-party credentials out of React.
- Test what an allowed user can do and what every disallowed user cannot do.
- Keep preview and production credentials, data, schedules, and integrations separate.
- Record evidence. Navigation, a draft, or a green-looking screen is not proof of a working control.
- Stop when authorization or required information is missing. Do not invent permissions or silent fallbacks.

## Official references

Check these sources when implementing. Do not rely on package versions or copied examples in this repository as permanently current.

- [React documentation](https://react.dev/)
- [Vite documentation](https://vite.dev/guide/)
- [TanStack Router documentation](https://tanstack.com/router/latest/docs/framework/react/overview)
- [TanStack Router file-based routing](https://tanstack.com/router/latest/docs/routing/file-based-routing)
- [TanStack Router authenticated routes](https://tanstack.com/router/latest/docs/guide/authenticated-routes)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [shadcn/ui documentation](https://ui.shadcn.com/docs)
- [Supabase documentation](https://supabase.com/docs)
- [Supabase API security](https://supabase.com/docs/guides/api/securing-your-api)
- [Supabase MCP setup and security](https://supabase.com/docs/guides/ai-tools/mcp)
- [Supabase Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase changelog](https://supabase.com/changelog)
- [Netlify documentation](https://docs.netlify.com/)

The synced files under `sources/` are reference material and must not be changed.

## Workflow website

The plain-language workflow site lives in [`website/`](website/). It explains the lifecycle, safety boundaries, application profiles, master and specialist skills, Supabase controls, and human release decision without requiring a technical background. Its dedicated Brandlens case study is available at `/examples/brandlens` once GitHub Pages is published from the protected branch.

GitHub Actions publishes the site to GitHub Pages from [`website/dist`](website/README.md). After pushing the repository to GitHub, select **GitHub Actions** in **Settings → Pages**; future changes under `website/` publish automatically from `main`.
