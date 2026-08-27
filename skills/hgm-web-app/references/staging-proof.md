# Staging proof

Use this proof loop during the existing Build stage whenever implementation includes Auth, Supabase mutations, Edge Functions, queues, schedules, external AI, or browser acceptance. It does not create a separate lifecycle stage or authorize production work.

## Before changing staging

1. Confirm the approved requirements, approved HGM Technical Brief, and explicit authority to build.
2. Record an environment manifest containing the repository, feature branch, local or staging environment, exact Supabase target, MCP access mode and enabled features, schedule state, and every enabled or disabled external side effect.
3. Protect pasted credentials. Never repeat, log, screenshot, publish, or commit them. Treat a credential pasted into chat or another inappropriate surface as exposed and requiring owner-led rotation. Store its replacement only in approved server-side secret storage.
4. Run the local tests, production build, migration checks, dependency audit, and secret inspection required by the technical brief.

## Apply and read back

5. Apply only the staging migrations and Edge Functions authorized for the declared target. A successful command proves only that the command returned successfully.
6. Read the target back independently. Verify the expected tables, constraints, grants, RLS policies, functions, Auth provider state, public-signup state, and staff memberships. Record the evidence owner for each result.
7. Run an approved synthetic or public-source canary through a real browser session. A dashboard visit, screenshot, or successful navigation is not proof of the underlying behavior.
8. Follow asynchronous work to a terminal state. Verify queue drainage, durable progress, visible coverage failures, aggregates, cost counters, and safe client errors with operator correlation data.
9. Replay one idempotent operation. Prove that the replay does not duplicate runs, canonical sources, or mentions.
10. Finish with keyboard-accessible navigation, correct headings and semantic roles, and no fresh browser console warnings or errors.

## Auth proof

Treat these as separate controls and verify each one that the technical brief requires:

- provider enablement
- public-signup enablement or disablement
- invitation and enrollment
- application membership and role assignment
- password recovery
- production SMTP readiness
- password policy
- removal or suspension behavior

A valid identity-provider session does not prove application membership or authorization.

## Queue and scheduled-work proof

- Size each batch from the available function runtime budget.
- Persist durable checkpoints before acknowledging work.
- Set visibility timeouts longer than the expected batch duration and renew them only through an explicit, bounded mechanism.
- Limit retries, record each attempt, and move exhausted work to a visible terminal failure.
- Make dispatch and processing idempotent so an interruption can continue without duplicating effects.
- Keep non-production schedules and external side effects disabled unless the technical brief explicitly authorizes a safe canary state.

## Evidence record

Use [the staging canary report](../../../templates/staging-canary-report.md). For every claim, name the evidence, observation time, exact target, and person or system responsible for producing it. Redact credentials, personal data, private URLs, source passages, and sensitive identifiers.

Staging proof may support a later review. It does not replace the required Netlify preview, independent reviewer, or named human release decision.
