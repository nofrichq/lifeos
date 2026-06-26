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
test: add web unit testing setup
```

## Pull Request Rule

Even when working alone, larger changes should be made through pull requests when possible.

Small documentation updates may be committed directly during Sprint 0, but implementation work should gradually move toward a branch and pull request workflow.

## Local Quality Flow

Before pushing changes, run the relevant local quality command.

For the web app:

```bash
cd apps/web
npm run quality:check
```

For changes that need formatting first:

```bash
cd apps/web
npm run quality
```

## Automation

The repository uses GitHub Actions to run web quality checks on push and pull requests.

The web CI workflow should check:

- Formatting
- Linting
- Unit tests
- Production build

## Future Workflow Improvements

Potential future workflow improvements:

- Pre-commit hooks
- Pull request branch protection
- Required CI checks before merge
- Release notes
- Sprint review template
