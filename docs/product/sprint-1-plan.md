# Sprint 1 Plan

Sprint 1 focuses on turning the initial LifeOS foundation into the first usable product screen.

The goal is to replace the default Vite starter UI with a real LifeOS dashboard experience using mock data, reusable components, and basic frontend structure.

## Sprint 1 Name

First Usable Dashboard

## Sprint 1 Goal

Build the first visible LifeOS dashboard shell.

By the end of Sprint 1, the project should have a simple but recognizable product interface that shows the core LifeOS concept: managing health, career, finance, projects, goals, tasks, and daily focus from one place.

## Sprint 1 Scope

Sprint 1 will focus only on the frontend dashboard experience.

Included work:

* Replace the default Vite starter UI
* Add a base application layout
* Add mock data for dashboard sections
* Create reusable dashboard cards
* Show life areas, active goals, open tasks, AI daily brief, and weekly progress
* Add basic routing if useful
* Add component-level tests
* Add pre-commit hooks for web quality checks
* Document Sprint 1 outcome

## Sprint 1 Non-Goals

Sprint 1 will not include:

* Backend implementation
* Database integration
* Authentication
* Real AI API integration
* Real private user data
* Mobile app
* Deployment
* Advanced analytics
* Complex charts
* Multi-user support

These features will be considered in later sprints.

## Sprint 1 Issues

Planned Sprint 1 issues:

* docs: create Sprint 1 plan
* chore: choose UI styling approach and theme direction
* feat: replace Vite starter UI with LifeOS dashboard shell
* feat: add base application layout
* feat: add mock dashboard data
* feat: create life area overview cards
* feat: create active goals and open tasks cards
* feat: create AI daily brief and weekly progress cards
* feat: add basic routing
* test: add dashboard component tests
* chore: add pre-commit hooks for web quality checks
* docs: create Sprint 1 review checklist

## Technical Direction

The frontend will continue with:

* React
* TypeScript
* Vite
* ESLint
* Prettier
* Vitest
* React Testing Library
* GitHub Actions Web CI

The dashboard should use mock data first. This keeps the first implementation simple and allows the product experience to be designed before backend integration.

## UI Direction

The first UI should feel like a clean personal operating system, not a generic admin panel.

Initial UI principles:

* Clear hierarchy
* Calm visual design
* Dashboard-first experience
* Fast understanding
* Minimal but useful sections
* Mock data that demonstrates the product idea
* No visual complexity before the core flow is clear

## Initial Dashboard Sections

The first dashboard should include:

### Today’s Focus

Shows the most important focus for the day.

Possible content:

* Main focus
* Secondary task
* Daily review reminder

### Life Areas

Shows the four MVP life areas:

* Health
* Career
* Finance
* Projects

Each area may show:

* Active goals count
* Open tasks count
* Simple status indicator

### Active Goals

Shows show:

* Active goals count
* Open tasks count
* Simple status indicator

### Active Goals

Shows currently active goals across life areas.

Each goal may show:

* Title
* Life area
* Priority
* Target date
* Progress note

### Open Tasks

Shows tasks that need action.

Each task may show:

* Title
* Life area
* Priority
* Due date
* Status

### AI Daily Brief

Shows a mock AI-assisted summary.

Initial content may include:

* Daily summary
* Suggested next action
* Neglected area warning
* Risk or blocker note

### Weekly Progress

Shows a basic weekly overview.

Initial content may include:

* Completed tasks this week
* Goals touched this week
* Life area balance
* Review completion status

## Testing Direction

Sprint 1 should add basic component tests for the dashboard.

Initial tests may verify:

* Dashboard page renders
* Main sections are visible
* Mock life areas are displayed
* Active goals are displayed
* Open tasks are displayed
* AI daily brief is visible

The goal is not full test coverage yet. The goal is to practice writing useful tests early.

## Pre-Commit Hook Direction

Sprint 1 should introduce pre-commit checks for the web app.

The first version may use Husky and lint-staged or an equivalent lightweight setup.

The pre-commit flow should help prevent avoidable issues before pushing code.

Possible checks:

* Formatting
* Linting
* TypeScript/build validation
* Unit tests if fast enough

## Definition of Done

Sprint 1 is complete when:

* Default Vite UI is removed
* LifeOS dashboard shell is visible
* Dashboard uses mock data
* Core dashboard sections exist
* Base layout exists
* Styling direction is selected
* Basic routing decision is made
* Component tests are added
* Web quality checks still pass
* Pre-commit hook setup is documented or implemented
* Sprint 1 review checklist is created

## Success Criteria

Sprint 1 is successful if someone opening the app can immediately understand that LifeOS is a personal operating system dashboard for managing life areas, goals, tasks, focus, and progress.

The app does not need to be fully functional yet, but it should start looking like the real product.
