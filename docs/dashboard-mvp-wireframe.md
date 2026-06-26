# Dashboard MVP Wireframe

This document defines the first dashboard concept for the LifeOS MVP.

The dashboard is the main entry point of the product. It should help the user quickly understand what matters today, what is active, and what needs attention.

## Dashboard Goals

The MVP dashboard should answer five questions:

1. What should I focus on today?
2. Which goals are currently active?
3. Which tasks need attention?
4. What changed recently?
5. Which life area am I neglecting?

## Layout

```text
+------------------------------------------------------+
| LifeOS                                               |
| Today: Focus, Progress, and Next Actions             |
+------------------------------------------------------+

+----------------------+ +----------------------------+
| Today's Focus        | | Life Areas                 |
| - Main priority      | | Health   Career            |
| - Secondary task     | | Finance  Projects          |
| - Review reminder    | |                            |
+----------------------+ +----------------------------+

+----------------------+ +----------------------------+
| Active Goals         | | Open Tasks                 |
| - Goal 1             | | - Task 1                   |
| - Goal 2             | | - Task 2                   |
| - Goal 3             | | - Task 3                   |
+----------------------+ +----------------------------+

+------------------------------------------------------+
| AI Daily Brief                                        |
| Summary, risks, neglected areas, suggested next step |
+------------------------------------------------------+

+------------------------------------------------------+
| Weekly Progress                                       |
| Small progress overview across life areas            |
+------------------------------------------------------+
```

## Initial Sections

### Today's Focus

Shows the most important things for the current day.

Initial content:

- Main focus
- Secondary task
- Daily review reminder

### Life Areas

Shows the four MVP life areas:

- Health
- Career
- Finance
- Projects

Each area may show:

- Number of active goals
- Number of open tasks
- Last review status
- Simple status indicator

### Active Goals

Shows active goals across all life areas.

Initial fields:

- Goal title
- Life area
- Priority
- Target date
- Progress note

### Open Tasks

Shows tasks that need action.

Initial fields:

- Task title
- Life area
- Priority
- Due date
- Status

### AI Daily Brief

Shows AI-assisted summary and next action suggestions.

Initial content:

- Short daily summary
- One suggested next action
- Neglected area warning if applicable
- Blocker or risk note

### Weekly Progress

Shows a simple weekly overview.

Initial content:

- Completed tasks this week
- Active goals touched this week
- Life area balance
- Review completion status

## MVP Dashboard Rules

The first dashboard should be simple, readable, and fast to understand.

Rules:

- No complex charts in the first version
- No real private data in the repository
- Use mock data during early development
- Prioritize clarity over visual complexity
- Make the page useful even before AI integration is complete

## First Implementation Notes

The first React version can use static mock data.

Suggested components:

- `DashboardPage`
- `TodayFocusCard`
- `LifeAreaCard`
- `ActiveGoalsCard`
- `OpenTasksCard`
- `AiDailyBriefCard`
- `WeeklyProgressCard`

The initial UI does not need backend integration.
