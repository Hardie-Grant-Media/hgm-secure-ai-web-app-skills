# `build-hgm-web-app`: the non-production builder

## At a glance

| Question | Answer |
| --- | --- |
| What is it? | The implementation skill for an approved HGM Technical Brief. |
| When is it used? | After technical approval and explicit authority to build. |
| What does it produce? | A feature-branch implementation, non-production preview evidence and a release handoff. |
| What does it not do? | It does not expand the product, use production data or release its own work. |

## Why HGM uses it

Build turns an approved plan into the smallest complete test version. It is designed to show real behaviour, including denied and failed cases, instead of treating a successful build command as completion.

## What it needs

- the approved requirements and HGM Technical Brief
- explicit authority to build
- a feature branch
- exact local, Supabase and Netlify non-production targets
- synthetic or deliberately prepared test data
- named acceptance tests and protected existing behaviour

## What it does

- inspects the existing project before adding routes, components or packages
- builds only the approved workflows and states
- keeps privileged work and third-party credentials on the server
- adds permitted, unauthenticated, unauthorised, wrong-provider, MFA and cross-user tests where relevant
- preserves existing interfaces and uses backward-compatible changes
- records deviations and unresolved risks instead of hiding them

When the app uses sign-in, Supabase changes, server functions, queues, schedules, external AI or browser acceptance, Build also runs the [staging-proof loop](../../skills/hgm-web-app/references/staging-proof.md).

## What it proves

- formatting, linting, types, tests and production build pass
- the critical journeys work in a real browser
- keyboard use, responsive layout and accessible page structure are present
- the declared test backend contains the expected objects and controls
- allowed users can act and disallowed users cannot
- background jobs reach a visible final state
- repeating an operation does not create duplicate effects
- dependency failures do not produce a false success

## Brandlens example

For Brandlens, Build created the portfolio and brand views, manager-only controls, viewer mode and visible scan states. It added the new monitoring workflow without removing the original one-off scan. The local app was connected to the declared staging target, and the Halliday Wine Companion canary was followed until its queue, mentions and daily score reconciled.

## Stop point

Build stops before production access, production data, production migrations, active schedules, merge or release. Its output is evidence for review, not a release approval.

Read the [source skill](../../skills/build-hgm-web-app/SKILL.md) and [delivery guidance](../delivery-and-operations.md).
