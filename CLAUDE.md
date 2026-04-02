# Skills Box

## gstack

Use /browse from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

Available skills:
- `/office-hours` — YC Office Hours: startup diagnostic + builder brainstorm
- `/plan-ceo-review` — CEO/founder-mode plan review (SCOPE EXPANSION, HOLD SCOPE, SELECTIVE EXPANSION, SCOPE REDUCTION)
- `/plan-eng-review` — Eng manager-mode plan review: architecture, data flow, edge cases, test coverage
- `/plan-design-review` — Senior designer plan review: visual quality audit with fixes
- `/design-consultation` — Complete design system from scratch (aesthetic, typography, color, layout, motion)
- `/design-shotgun` — Generate multiple AI design variants and compare
- `/design-html` — Production-quality HTML generation from approved mockups
- `/review` — Staff engineer code review: find production bugs, auto-fix obvious ones
- `/ship` — Release engineer: sync main, run tests, push, open PR
- `/land-and-deploy` — Merge PR, wait for CI, verify production health
- `/canary` — Post-deploy SRE monitoring loop
- `/benchmark` — Performance baseline + Core Web Vitals comparison
- `/browse` — Headless Chromium browser for QA/testing (~100ms/command)
- `/connect-chrome` — Control real Chrome as headed window with Side Panel
- `/qa` — QA Lead: test, find bugs, fix with atomic commits, auto-generate regression tests
- `/qa-only` — QA Reporter: report-only bug report without code changes
- `/design-review` — Design QA: visual audit + iterative fixes in source
- `/setup-browser-cookies` — Import cookies from real browser for authenticated testing
- `/setup-deploy` — One-time setup for /land-and-deploy (detects platform, URL, deploy commands)
- `/retro` — Team-aware weekly engineering retrospective with per-person breakdowns
- `/investigate` — Systematic root-cause debugging (Iron Law: no fixes without investigation)
- `/document-release` — Update all project docs to match what shipped
- `/codex` — Independent code review from OpenAI Codex CLI (cross-model analysis)
- `/cso` — Chief Security Officer: OWASP Top 10 + STRIDE threat model
- `/autoplan` — One command, fully reviewed plan (CEO → design → eng review automatically)
- `/careful` — Safety guardrails: warns before destructive commands (rm -rf, DROP TABLE, force-push)
- `/freeze` — Edit lock: restrict file edits to one directory
- `/guard` — /careful + /freeze combined for maximum safety
- `/unfreeze` — Remove /freeze boundary
- `/gstack-upgrade` — Upgrade gstack to latest version
- `/learn` — Memory: manage learned patterns, pitfalls, and preferences across sessions

If gstack skills aren't working, run `cd ~/.claude/skills/gstack && ./setup` to build the binary and register skills.

## planning-with-files

Use Manus-style persistent markdown planning for multi-step tasks.

For every complex task, create THREE files:
- `task_plan.md` — Track phases and progress
- `findings.md` — Store research and findings
- `progress.md` — Session log and test results

Key rules:
1. Create Plan First — Never start without `task_plan.md`
2. The 2-Action Rule — Save findings after every 2 view/browser operations
3. Log ALL Errors — They help avoid repetition
4. Never Repeat Failures — Track attempts, mutate approach

Invoke with: `/planning-with-files:plan` (or `/planning-with-files:start`)

## Lenny's Product Skills

86 PM skills from Lenny's Podcast (RefoundAI). Available on demand:
- Strategy: `/writing-prds`, `/defining-product-vision`, `/startup-ideation`, `/competitive-analysis`
- Shipping: `/shipping-products`, `/prioritizing-roadmap`, `/scoping-cutting`, `/working-backwards`
- Users: `/conducting-user-interviews`, `/analyzing-user-feedback`, `/usability-testing`, `/user-onboarding`
- Growth: `/designing-growth-loops`, `/retention-engagement`, `/pricing-strategy`
- Team: `/building-team-culture`, `/coaching-pms`, `/stakeholder-alignment`, `/running-effective-meetings`
- Career: `/building-a-promotion-case`, `/negotiating-offers`, `/finding-mentors-sponsors`
- AI: `/ai-evals`, `/ai-product-strategy`, `/building-with-llms`, `/vibe-coding`

Full list: `ai-evals`, `ai-product-strategy`, `analyzing-user-feedback`, `behavioral-product-design`, `brand-storytelling`, `building-a-promotion-case`, `building-sales-team`, `building-team-culture`, `building-with-llms`, `career-transitions`, `coaching-pms`, `community-building`, `competitive-analysis`, `conducting-interviews`, `conducting-user-interviews`, `content-marketing`, `cross-functional-collaboration`, `defining-product-vision`, `delegating-work`, `design-engineering`, `design-systems`, `designing-growth-loops`, `designing-surveys`, `dogfooding`, `energy-management`, `engineering-culture`, `enterprise-sales`, `evaluating-candidates`, `evaluating-new-technology`, `evaluating-trade-offs`, `finding-mentors-sponsors`, `founder-sales`, `fundraising`, `giving-presentations`, `having-difficult-conversations`, `launch-marketing`, `managing-imposter-syndrome`, `managing-tech-debt`, `managing-timelines`, `managing-up`, `marketplace-liquidity`, `measuring-product-market-fit`, `media-relations`, `negotiating-offers`, `onboarding-new-hires`, `organizational-design`, `organizational-transformation`, `partnership-bd`, `personal-productivity`, `planning-under-uncertainty`, `platform-infrastructure`, `platform-strategy`, `positioning-messaging`, `post-mortems-retrospectives`, `pricing-strategy`, `prioritizing-roadmap`, `problem-definition`, `product-led-sales`, `product-operations`, `product-taste-intuition`, `retention-engagement`, `running-decision-processes`, `running-design-reviews`, `running-effective-1-1s`, `running-effective-meetings`, `running-offsites`, `sales-compensation`, `sales-qualification`, `scoping-cutting`, `setting-okrs-goals`, `shipping-products`, `stakeholder-alignment`, `startup-ideation`, `startup-pivoting`, `systems-thinking`, `team-rituals`, `technical-roadmaps`, `usability-testing`, `user-onboarding`, `vibe-coding`, `working-backwards`, `writing-job-descriptions`, `writing-north-star-metrics`, `writing-prds`, `writing-specs-designs`, `written-communication`.
