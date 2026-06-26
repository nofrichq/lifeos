# LifeOS

LifeOS is an AI-supported personal operating system designed to help manage life, work, health, career, finance, and projects from one place.

The goal is not to build another productivity app. LifeOS aims to become a practical daily operating layer: a system that helps turn scattered goals, routines, decisions, and tasks into clear next actions. It starts as a personal tool for real daily use, then evolves into a portfolio-grade open-source product and eventually a product that can be extended, shared, or commercialized.

## Vision

LifeOS exists to reduce friction between intention and execution.

Most people do not fail because they lack goals. They fail because their goals, habits, finances, career plans, health routines, and projects live in disconnected places. LifeOS brings these areas together and uses AI to help the user understand what matters, what changed, and what the next best step should be.

## Target User

The initial target user is the creator of the project, using LifeOS as a real personal system for 2026.

The broader target user is a builder, developer, freelancer, career switcher, or self-improvement-focused person who wants a single system for managing personal growth, work, money, health, and projects without jumping between many disconnected tools.

## Product Principles

### 1. Real daily use over demo features

Every feature should solve a real problem in daily life. LifeOS should not be built only to look good in a portfolio; it should be useful enough to be opened every day.

### 2. Reduce friction, do not add another system to maintain

LifeOS should make life easier, not create more admin work. If a feature requires too much manual effort, it should be simplified, automated, or removed.

### 3. One place for life and work

Health, career, finance, and projects are connected in real life. LifeOS should treat them as connected areas instead of isolated modules.

### 4. AI as an assistant, not the product itself

AI should help summarize, prioritize, detect patterns, and suggest next actions. The core value is the operating system around the user’s life, not AI for its own sake.

### 5. Privacy-first by default

Personal data such as health notes, financial records, habits, and private plans must be handled carefully. The public repository should only contain code, mock data, examples, and documentation.

### 6. Build small, improve continuously

The product should evolve through small, working increments. Each sprint should produce something clearer, more useful, or more stable.

### 7. Portfolio-quality engineering

The project should demonstrate professional software habits: clean architecture, readable code, meaningful commits, issue tracking, documentation, tests, and deployment discipline.

## What LifeOS Is Not

LifeOS is not a clone of Notion, Jira, Google Calendar, or a generic habit tracker.

It is not intended to replace every specialized tool from day one. The MVP should focus on creating a simple, useful operating layer that connects goals, tasks, routines, and progress.

LifeOS is also not a place for storing real private user data in the public repository. Any sensitive or personal data should stay local, private, or mocked during public development.

## MVP Scope

The first version of LifeOS will focus on a small but useful operating layer for managing daily life and work. The MVP should be simple enough to build quickly, but structured enough to evolve into a real product.

### Core Modules

#### Dashboard

The dashboard is the main entry point of LifeOS. It should give a quick overview of what matters today, what needs attention, and what changed recently.

Initial dashboard elements:

- Today's focus
- Active goals
- Open tasks
- Recent progress
- Basic weekly overview

#### Life Areas

LifeOS will start with four core life areas:

- Health
- Career
- Finance
- Projects

Each area should have its own goals, tasks, notes, and review items.

#### Goals

Goals represent meaningful outcomes the user wants to achieve.

Initial goal fields:

- Title
- Description
- Life area
- Status
- Priority
- Target date
- Progress note

#### Tasks

Tasks represent concrete actions linked to goals or life areas.

Initial task fields:

- Title
- Description
- Life area
- Related goal
- Status
- Priority
- Due date

#### Reviews

The MVP should support a simple review flow.

Initial review types:

- Daily review
- Weekly review

The review flow should help answer:

- What did I do?
- What changed?
- What is blocked?
- What should I focus on next?

#### AI Assistance

AI should be introduced carefully in the MVP.

Initial AI use cases:

- Summarize daily or weekly progress
- Suggest next actions
- Detect neglected areas
- Turn scattered notes into structured tasks

AI should not make decisions automatically. It should assist the user and explain its suggestions clearly.

## MVP Non-Goals

The MVP will intentionally avoid features that would make the first version too large or unfocused.

LifeOS MVP will not include:

- Mobile app
- Multi-user collaboration
- Public user accounts
- Payment system
- Complex calendar integration
- Banking integrations
- Medical data integrations
- Wearable device integrations
- Advanced analytics
- Full AI automation
- Real private personal data in the public repository

These features may be considered later, but they are outside the first MVP.

## MVP Success Criteria

The MVP is successful if it can be used daily by the creator to:

- See today's focus
- Track active goals
- Manage tasks across health, career, finance, and projects
- Run a basic daily or weekly review
- Get simple AI-assisted summaries or next-action suggestions
- Demonstrate clean product thinking and engineering discipline in the public repository
