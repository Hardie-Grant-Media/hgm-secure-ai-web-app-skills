# Staging Canary Report

Complete this report only for an approved non-production canary. Redact credentials, personal information, private URLs, source passages, and sensitive identifiers.

## Authority and environment manifest

- Approved requirements and version:
- Approved HGM Technical Brief and version:
- Build authority and evidence:
- Repository:
- Feature branch and commit:
- Environment: Local / Preview / Staging
- Exact Supabase target:
- Supabase MCP mode and enabled features:
- Auth provider state:
- Public-signup state:
- Automatic-account-creation state:
- MFA state and protected boundary:
- Schedule state:
- External side effects and their state:
- Evidence owner:
- Observation time and timezone:

## Local and migration checks

| Check | Result | Evidence owner | Evidence location |
| --- | --- | --- | --- |
| Tests, formatting, linting, and types |  |  |  |
| Production build |  |  |  |
| Migration verification |  |  |  |
| Dependency audit |  |  |  |
| Secret inspection |  |  |  |

## Target readback

| Control | Expected state | Observed state | Evidence owner |
| --- | --- | --- | --- |
| Tables and constraints |  |  |  |
| Grants and RLS policies |  |  |  |
| Functions |  |  |  |
| Auth provider, provenance, signup, and MFA |  |  |  |
| Staff memberships and roles |  |  |  |
| Queues and schedules |  |  |  |

## Canary and asynchronous outcome

- Approved synthetic or public-source fixture:
- Browser journey and identity:
- Terminal run state:
- Queue drainage:
- Durable checkpoint or continuation evidence:
- Coverage failures visible:
- Aggregates reconciled:
- Cost counters visible:
- Safe client error and operator correlation evidence:
- Keyboard, headings, and semantic roles:
- Fresh console warnings or errors:

## Idempotent replay

| Record type | Before replay | After replay | Duplicate count |
| --- | ---: | ---: | ---: |
| Runs |  |  |  |
| Canonical sources |  |  |  |
| Mentions or effects |  |  |  |

## Exceptions and remaining gates

- Approved exceptions used:
- Unresolved risks or failures:
- Netlify preview: Complete / Pending
- Independent review: Complete / Pending
- Production approval: Complete / Pending
- Merge, production migration, and schedule activation remain human-controlled: Yes / No
