# HGM Web-App Review Report

## Review outcome

- Application:
- Technical-brief version:
- Pull request and commit:
- Netlify preview:
- Non-production Supabase target:
- Reviewer:
- Review date:
- Recommendation: Green — Pass / Amber — Conditional pass / Red — Fail

## Executive summary

Summarize whether the current commit and preview satisfy the approved requirements and technical brief, remain inside their safety boundaries, and are ready for a human release decision.

## Evidence reviewed

- Applicable `AGENTS.md` files and skills:
- Approved requirements:
- Approved HGM Technical Brief:
- Diff and changed dependencies:
- Automated checks:
- Supabase migrations, policies, functions, and advisors:
- Supabase MCP project reference, read-only mode, and enabled feature groups:
- Supabase Postgres best-practice categories applied:
- Netlify preview:
- Allowed and denied test identities or fixtures:
- Monitoring, recovery, and operational evidence:
- Staging canary report and evidence owners:
- Approved exception register:

## Findings

| Priority | Finding | Evidence | Required action | Owner |
| --- | --- | --- | --- | --- |
| Blocker / Important / Advisory |  |  |  |  |

## Requirements and technical scope

- Requested behavior present:
- Things the app must not do remain absent:
- Protected behavior and interfaces preserved:
- Unapproved files, services, dependencies, data, or side effects:
- Deviations from the approved requirements or technical brief:

## Functional and user experience review

- Critical journeys:
- Validation, empty, loading, error, not-found, and denied states:
- Keyboard and assistive-technology behavior:
- Responsive behavior:
- Public indexing or rendering requirement, if applicable:

## Identity and authorization review

| Boundary | Allowed case and result | Denied case and result | Evidence |
| --- | --- | --- | --- |
| Route experience |  |  |  |
| Data API / RLS |  |  |  |
| Storage |  |  |  |
| Edge Function |  |  |  |
| Role or tenant change |  |  |  |

Confirm that browser route guards are not the only enforcement and that no authorization depends on email suffixes or user-editable metadata.

## Data, secrets, and integrations

- Data minimisation and classification:
- Production data excluded from preview:
- Browser-safe configuration only:
- Secrets and credentials protected:
- Function input and authorization checks:
- Webhook verification, retries, and idempotency:
- Rate, quota, size, and cost limits:
- Log redaction:

## Delivery and operations

- Current commit passed required checks:
- Preview uses the declared non-production Supabase target:
- Migration compatibility and recovery:
- MCP target and mode match the approved non-production environment:
- Relevant Postgres best-practice evidence:
- Monitoring and incident ownership:
- Support and access review:
- Human release authority and remaining stop points:
- Required Netlify preview present: Yes / No
- Independent evidence present: Yes / No

## Conditions for release decision

List every blocker or condition that must be resolved before a named human decides whether to merge and release. If there are none, write `None`.

Do not select `Green — Pass` when the required Netlify preview or independent evidence is absent.

## Human decisions still required

List production, access, migration, credential, commercial, privacy, or release decisions that the reviewer did not and cannot make.
