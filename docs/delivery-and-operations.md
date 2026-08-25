# HGM Delivery and Operations

## Lifecycle and ownership

```text
Approved product requirements
  -> approved HGM Technical Brief
  -> feature branch and non-production Supabase
  -> automated validation
  -> Netlify deploy preview
  -> business acceptance and independent review
  -> named human release decision
  -> protected production release
  -> monitoring, support, rollback, and retirement
```

| Role | Accountability |
| --- | --- |
| Business owner | Purpose, users, workflows, data use, acceptance, safety boundaries, and support ownership |
| Technical owner | Architecture, environments, security design, maintainability, recovery, and evidence |
| Independent reviewer | Read-only assessment of the change, preview, tests, and guardrails |
| Release authority | Human decision to merge and release after reviewing visible evidence |
| Platform administrator | Named access, MFA, secrets, Supabase, Netlify, and protected GitHub controls |

One person may hold more than one role where HGM permits it, but AI cannot be the business owner, independent approver, or release authority.

## Environments

| Environment | Purpose | Data and integrations | Release rule |
| --- | --- | --- | --- |
| Local | Development and fast tests | Synthetic data and local services | Developer controlled |
| Preview | Pull-request acceptance | Isolated Supabase branch or non-production project; test integrations | Created from the feature branch |
| Staging | Optional long-lived verification | Non-production credentials and prepared test data | Human-controlled access |
| Production | Real users and business operations | Production-only credentials, data, schedules, and integrations | Named human approval through the protected path |

The exact Supabase and Netlify target must be visible before migrations, function deployment, seed, restore, or release commands run.

## Validation and preview

GitHub checks should validate the change but must not create an undocumented second production release path. Proportionate checks include:

- formatting and linting
- strict TypeScript checking
- unit, integration, RLS, Storage, and Edge Function tests
- application build
- critical browser journeys and accessibility checks
- dependency, secret, and security scanning
- Supabase migration verification and advisors
- project-scoped Supabase MCP verification and applicable Postgres best-practice checks

The pull request must link the exact Netlify deploy preview and identify the non-production Supabase environment it uses. Acceptance must exercise the preview with allowed and denied identities, invalid input, empty states, dependency failures, and mobile or keyboard use where relevant.

## Human release gate

Before release, the named human checks:

- the approved requirements, technical brief, and safety boundaries still match the delivered change
- required reviewers approved the current commit
- automated checks passed on the current commit
- the preview and its Supabase environment were verified
- the recorded MCP project reference, access mode, and enabled features match the approved non-production target
- allowed and denied permission tests passed
- migrations are compatible and have recovery steps
- production variables and secrets exist without exposing their values
- monitoring, support, incident, rollback, and ownership details are recorded
- any required privacy, security, commercial, or platform approval is present

AI stops before merge, production migration, production function deployment, access change, schedule activation, or release. The release authority follows the approved HGM runbook and confirms the live result after release.

## Release verification

A successful pipeline is not the same as a working application. After release, verify:

- the intended production URL and deployed commit
- authentication and logout
- one critical allowed user journey
- one critical denied-access journey without unsafe probing
- production data and Storage access boundaries
- Edge Function and third-party integration behavior
- scheduled or queued work, when included
- logs, alerts, and error reporting
- rollback readiness

Record the outcome and any deferred issue. Do not call a draft, preview, queued deployment, or navigation to a dashboard a completed release.

## Monitoring and incident response

- Monitor availability, application errors, authentication failures, Edge Function failures, queue depth, scheduled-job results, and unusual rate-limit or denial patterns as applicable.
- Keep alerts actionable and owned. Avoid alerts with no response path.
- Redact secrets and personal data from logs and monitoring payloads.
- Record an incident contact, escalation route, service dependencies, and user communication owner.
- If a security boundary fails, contain access and side effects first, preserve evidence, and follow HGM incident procedures.

## Rollback and recovery

- Frontend releases need a known prior Netlify deployment or forward-fix path.
- Database changes need a tested recovery approach that does not assume destructive down migrations are safe.
- Edge Functions need a known prior version or forward-fix path.
- Feature flags may be used only for a present rollout or containment need and must not replace authorization.
- Restore and backup claims must be supported by current platform configuration and a proportionate recovery test.

## Support and retirement

Before go-live, record the owner, support route, service accounts, renewal or cost owner, access review frequency, data retention, and dependency maintenance approach.

When retiring an application:

1. Confirm the business owner and affected users.
2. Export or retain required records through an approved process.
3. Disable schedules, webhooks, integrations, and releases.
4. Revoke credentials and access.
5. Remove data according to the approved retention decision.
6. Archive source and operational evidence.
7. Verify the application and backend endpoints are no longer reachable.
