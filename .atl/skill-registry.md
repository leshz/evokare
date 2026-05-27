# Skill Registry — evokare

Generated: 2026-05-27

## Trigger Table

| Trigger | Skill | Path |
|---------|-------|------|
| Writing Go tests, Bubbletea TUI testing | go-testing | ~/.claude/skills/go-testing/SKILL.md |
| Creating new AI agent skills | skill-creator | ~/.claude/skills/skill-creator/SKILL.md |
| Creating a PR, opening a pull request | branch-pr | ~/.claude/skills/branch-pr/SKILL.md |
| "judgment day", adversarial dual review | judgment-day | ~/.claude/skills/judgment-day/SKILL.md |
| Creating a GitHub issue, reporting bugs | issue-creation | ~/.claude/skills/issue-creation/SKILL.md |
| Designing dashboards, admin panels, interactive UIs | interface-design | ~/.claude/skills/interface-design/SKILL.md |

## Compact Rules

### go-testing
- Use `teatest` for Bubbletea TUI model testing
- Test model Update() in isolation — pass Msg, assert returned model state
- Use `tea.Batch` results, not side effects, for assertions
- Table-driven tests: `[]struct{ name, input, want }` pattern
- Never assert on terminal output strings — assert on model fields

### skill-creator
- Frontmatter required: name, description (with Trigger:), license, metadata.author, metadata.version
- Include `allowed-tools` when skill needs specific tools
- Keep SKILL.md focused on WHAT to do, not WHY — sub-agents read this
- Compact rules section is mandatory for sub-agent injection
- Skills live in `~/.claude/skills/{skill-name}/SKILL.md`

### branch-pr
- Always create an issue first (issue-first enforcement)
- Branch naming: `claude/[description]-[sessionId]`
- PR title: under 70 chars, imperative mood
- PR body: Summary (bullets) + Test plan (checklist) + attribution
- Never push directly to main — always via PR

### judgment-day
- Launch TWO independent blind judge sub-agents simultaneously (parallel)
- Each judge reviews without seeing the other's output
- Synthesize findings: CRITICAL > WARNING > SUGGESTION priority
- Apply fixes after first round, re-judge until both pass or 2 iterations max
- Each judge prompt must include the full diff/code to review

### issue-creation
- Always create GitHub issue before writing code or PR
- Issue title: imperative mood, under 70 chars
- Include: problem description, acceptance criteria, relevant files
- Label appropriately: bug, enhancement, documentation
- Reference issue number in PR and commits

### interface-design
- Use atomic design: atoms → molecules → organisms → templates → pages
- Container/presentational split: containers fetch data, presenters render
- Tailwind utility-first: no inline styles, no CSS modules unless justified
- Responsive mobile-first: start with mobile layout, scale up with sm/md/lg
- Dark mode: design for both themes if enabled in project
- Accessibility: semantic HTML, aria labels, keyboard navigation
- NOT for marketing pages — use copywriting skill instead
