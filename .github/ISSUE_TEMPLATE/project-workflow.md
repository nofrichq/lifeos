# Project Workflow

LifeOS uses GitHub Issues and GitHub Projects to manage product and engineering work.

## Board Columns

The project board uses three initial columns:

- Todo
- In Progress
- Done

This simple workflow is enough for Sprint 0. More columns may be added later if needed.

## Issue Types

Initial issue types:

- `type:feature`
- `type:bug`
- `type:docs`
- `type:chore`
- `type:task`

## Areas

Initial areas:

- `area:product`
- `area:frontend`
- `area:backend`
- `area:database`
- `area:devops`
- `area:docs`

## Priorities

Initial priorities:

- `priority:low`
- `priority:medium`
- `priority:high`

## Sprint Flow

Each sprint should follow this flow:

1. Select a small number of issues for the sprint.
2. Move one issue at a time to In Progress.
3. Work in small commits.
4. Link commits and pull requests to issues.
5. Move completed issues to Done.
6. End the sprint with a short review.

## Commit Style

LifeOS uses Conventional Commits where possible.

Examples:

```text
docs: define MVP scope
chore: initialize repository structure
feat: create dashboard shell
fix: correct task status mapping
ci: add GitHub Actions workflow