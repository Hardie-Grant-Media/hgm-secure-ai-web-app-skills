# `hgm-web-app`: the workflow coordinator

## At a glance

| Question | Answer |
| --- | --- |
| What is it? | The single starting point for technical delivery of an approved HGM web app. |
| When is it used? | From the first technical plan through build, security, review and release handoff. |
| What does it produce? | The correct next action, the evidence required at that stage and a clear stop point. |
| What does it not do? | It does not invent the app, approve its requirements or release it without separate authority. |

## Why HGM uses it

People should not need to know which specialist instruction to choose. The master skill identifies the current stage and applies the right guidance while keeping the same safety boundaries throughout.

It also prevents a common misunderstanding: asking an AI assistant to “handle the whole app” does not approve every future action. Planning approval, build approval and release approval remain separate decisions.

## What it needs

- approved product requirements, including users, workflows, data, acceptance criteria and non-goals
- named business and technical owners
- plain-language boundaries describing what AI may change, must protect, must not do and when it must stop
- the target repository and applicable repository instructions
- explicit authority for the current stage

If product requirements are missing or unresolved, the skill stops rather than designing the product itself.

## What it does

1. Finds the earliest unfinished stage.
2. Applies `scope-hgm-web-app`, `build-hgm-web-app`, `secure-hgm-supabase` or `review-hgm-web-app` when that specialist guidance is available.
3. Keeps the approved technology, data, access and delivery boundaries consistent between stages.
4. Requires evidence that the application actually behaved as expected.
5. Reports the current stage, completed proof, blockers, decision owner and next action.

## What it checks

- the app remains the smallest useful version of the approved requirements
- local, test, preview and production environments remain separate
- sign-in is not mistaken for permission to see or change data
- secrets and privileged work remain outside the browser
- a successful command, dashboard visit or screenshot is not treated as proof
- merging, production changes and schedule activation remain human decisions

## Brandlens example

For Brandlens, the master skill recognised that the requirements and technical brief were already approved. It routed the work into Build, required the staging-proof loop because the app used sign-in, database changes, queues, schedules and external AI, and stopped before Netlify, independent review and release.

## Handoff

The skill ends every stage with a plain-language status:

- what is complete
- what evidence supports that claim
- what is still missing
- who must decide next
- the exact next permitted action

Read the [source skill](../../skills/hgm-web-app/SKILL.md) and [staging-proof reference](../../skills/hgm-web-app/references/staging-proof.md) for the instructions used by the coding assistant.
