# `secure-hgm-supabase`: the data and access specialist

## At a glance

| Question | Answer |
| --- | --- |
| What is it? | The specialist skill for Supabase sign-in, data, permissions, files, server functions, queues and migrations. |
| When is it used? | Whenever an approved app reads or changes Supabase. |
| What does it produce? | Enforceable access rules, versioned changes, allowed and denied test evidence, and a recovery approach. |
| What does it not do? | It does not treat an MCP connection as permission or weaken security to make an error disappear. |

## Why HGM uses it

Hiding a button is not security. This skill puts the real rules at the database, file and server-function boundaries so a user cannot bypass them by changing the browser.

## What it needs

- the approved requirements and technical brief
- the exact local or authorised test project
- the application roles, ownership or membership relationships
- the official Supabase skill and relevant Postgres best-practice guidance
- project-scoped Supabase MCP access with the minimum required features
- explicit authority before any test-environment mutation

## What it controls

- who may sign in and how account enrollment, recovery and removal work
- how internal Entra SAML, customer passwordless login and required MFA are enforced
- who may read, add, update or delete each type of information
- which database objects the browser can reach
- how private files are separated between users or organisations
- which operations require a server function
- how secrets, webhooks, quotas and external services are protected
- how queued or scheduled work continues safely after interruption
- how database changes remain compatible and recoverable

## Supabase MCP boundary

The MCP is a development connection, not part of the finished app. It is scoped to one declared project and uses read-only access for discovery or review. Mutation is enabled only for an explicitly approved non-production action. The target, mode and enabled feature groups are recorded without publishing credentials.

## What it proves

- sign-in provider and provenance, public signup, automatic account creation, invitation, membership, recovery and MFA are checked separately
- allowed and denied database, file and function requests behave correctly
- private credentials never reach the browser or public build
- queued work uses checkpoints, bounded retries and visible final failures
- interrupted or repeated work does not duplicate records or side effects
- database and security advisors have been reviewed
- consequential changes have a recovery or forward-fix path

## Brandlens example

For Brandlens, Secure enforced active staff membership for all reads and a manager role for changes. Brand creation, editing, pausing and manual scans remained behind authenticated server functions. Search and classification credentials stayed server-side. Daily runs and source processing used unique records, bounded retries and duplicate prevention, while schedules stayed off during staging.

## Stop point

The skill does not apply production migrations, change production sign-in, rotate credentials, copy production data, broaden access or activate schedules without separate authority for that exact target and action.

Read the [source skill](../../skills/secure-hgm-supabase/SKILL.md), [security guardrails](../security-guardrails.md) and [Supabase MCP workflow](../supabase-mcp-and-postgres.md).
