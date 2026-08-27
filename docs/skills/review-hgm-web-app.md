# `review-hgm-web-app`: the independent reviewer

## At a glance

| Question | Answer |
| --- | --- |
| What is it? | A read-only review skill that compares the exact change and preview with the approved plan and evidence. |
| When is it used? | After Build and security evidence are complete for a specific commit and preview. |
| What does it produce? | Green, Amber or Red advice for the named human release authority. |
| What does it not do? | It does not fix, merge, deploy, change access or make the release decision. |

## Why HGM uses it

The person or AI that built the app should not be the only source of confidence. Review independently checks the exact version proposed for release and treats missing evidence as a gap rather than a pass.

## What it needs

- approved requirements and HGM Technical Brief
- exact pull-request commit
- exact Netlify preview
- declared non-production Supabase target
- migration and recovery information
- automated, permission, browser, dependency and security evidence
- staging canary report and named evidence owners where applicable

## What it reviews

- the approved workflows are present and unapproved work is absent
- the app remains the smallest useful, maintainable solution
- sign-in and data permissions are enforced beyond the screen
- preview credentials, data, schedules and integrations are non-production
- allowed, denied and failure cases were actually observed
- database changes are compatible and recoverable
- queues, retries, duplicate prevention, failures and costs are visible where relevant
- accessibility, support, monitoring, incident and retirement ownership are recorded

## Review outcomes

- **Green — Pass:** no unresolved blocker; the evidence supports a human release decision.
- **Amber — Conditional pass:** no demonstrated critical failure, but named evidence or work is still required.
- **Red — Fail:** required behaviour is missing, prohibited behaviour is present, a safety boundary failed or the change exceeded its authority.

A required Netlify preview or independent evidence cannot be missing from a Green result.

## Brandlens example

The Brandlens worked example stops before this skill runs. Local and staging evidence exist, but the required Netlify preview and independent review are still pending. The correct status is therefore not Green and not “production-ready.”

## Stop point

Review remains read-only. It lists blockers, evidence, required actions, owners and remaining human decisions. The named release authority—not the skill—decides whether to merge and release.

Read the [source skill](../../skills/review-hgm-web-app/SKILL.md) and [review report template](../../templates/review-report.md).
