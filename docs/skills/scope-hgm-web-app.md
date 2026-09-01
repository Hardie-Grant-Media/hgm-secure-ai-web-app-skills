# `scope-hgm-web-app`: the technical planner

## At a glance

| Question | Answer |
| --- | --- |
| What is it? | A read-only planning skill that turns approved product requirements into an HGM Technical Brief. |
| When is it used? | Before any code, database, account or hosting change. |
| What does it produce? | A decision-complete technical plan with permissions, environments, tests, risks and approvals. |
| What does it not do? | It does not choose features, invent users, create accounts or start building. |

## Why HGM uses it

Product requirements explain what the app should achieve. The technical brief explains how HGM will build and prove it safely. Keeping those two decisions separate prevents a coding assistant from filling product gaps with assumptions.

## What it needs

- an approved product requirement source and owner
- the approved users and people who must be excluded
- the smallest useful first release and its non-goals
- expected workflows, data, integrations and side effects
- acceptance criteria and accessibility needs
- the five approved AI safety boundaries

If a missing decision would change the product, identity model, data use or risk, the skill returns it to the appropriate owner.

## What it decides technically

- whether the app is internal, public, a customer portal or a defined combination
- how users sign in and how application membership is granted or removed
- whether Entra SAML is ready for internal users, and which customer data or actions require MFA
- which roles can perform each action and where that permission is enforced
- which information reaches the browser and which work stays server-side
- which local, test, preview and production environments exist
- which Supabase capabilities and integrations are genuinely required
- which allowed, denied and failure cases must be observed
- who owns support, incidents, access review, recovery and retirement

## What it produces

The HGM Technical Brief records:

- the approved requirement source and owners
- application profile, routes and workflows
- data purpose, classification, retention and deletion
- identity, roles and permissions
- Supabase and integration design
- environment manifest and approved exceptions
- safety boundaries and stop points
- required and denied acceptance tests
- operational ownership and approval evidence

## Brandlens example

For Brandlens, Scope translated the monitoring requirements into manager and viewer roles, daily and manual runs, a 30-day baseline, public-source discovery, evidence retention, visible failures, cost limits and a schedule that would remain disabled until separately approved. Under the current standard, Entra SAML is required before an internal app can pass access review.

## Stop point

Scope remains read-only. It stops when the technical brief is ready and asks for explicit technical approval before Build begins.

Read the [source skill](../../skills/scope-hgm-web-app/SKILL.md) and [HGM Technical Brief template](../../templates/hgm-app-brief.md).
