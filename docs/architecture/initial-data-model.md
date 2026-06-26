# Initial Data Model

This document defines the first draft of the LifeOS data model.

The goal is not to finalize the entire database schema, but to create a clear starting point for the MVP.

## Core Concepts

LifeOS is organized around life areas, goals, tasks, reviews, notes, and AI-assisted insights.

Initial core entities:

- User
- LifeArea
- Goal
- Task
- Review
- ReviewItem
- Note
- AiInsight

## Entity Overview

### User

Represents the owner of the LifeOS workspace.

Initial fields:

- id
- displayName
- email
- createdAt
- updatedAt

In the first MVP, authentication may start with a single-user or local mode. The data model still keeps a User entity to make future authentication easier.

### LifeArea

Represents a major area of life.

Initial examples:

- Health
- Career
- Finance
- Projects

Initial fields:

- id
- userId
- name
- description
- color
- icon
- sortOrder
- createdAt
- updatedAt

### Goal

Represents a meaningful outcome the user wants to achieve.

Initial fields:

- id
- userId
- lifeAreaId
- title
- description
- status
- priority
- targetDate
- progressNote
- createdAt
- updatedAt

Initial statuses:

- BACKLOG
- ACTIVE
- PAUSED
- COMPLETED
- CANCELLED

Initial priorities:

- LOW
- MEDIUM
- HIGH

### Task

Represents a concrete action.

Initial fields:

- id
- userId
- lifeAreaId
- goalId
- title
- description
- status
- priority
- dueDate
- completedAt
- createdAt
- updatedAt

Initial statuses:

- TODO
- IN_PROGRESS
- DONE
- CANCELLED

### Review

Represents a daily or weekly reflection.

Initial fields:

- id
- userId
- type
- reviewDate
- summary
- mood
- energyLevel
- createdAt
- updatedAt

Initial types:

- DAILY
- WEEKLY

### ReviewItem

Represents structured answers inside a review.

Initial fields:

- id
- reviewId
- lifeAreaId
- question
- answer
- createdAt
- updatedAt

Example questions:

- What did I do today?
- What changed?
- What is blocked?
- What should I focus on next?

### Note

Represents unstructured user input that can later be converted into tasks, goals, or insights.

Initial fields:

- id
- userId
- lifeAreaId
- title
- content
- createdAt
- updatedAt

### AiInsight

Represents AI-generated summaries, suggestions, or observations.

Initial fields:

- id
- userId
- sourceType
- sourceId
- insightType
- content
- createdAt

Initial insight types:

- DAILY_SUMMARY
- WEEKLY_SUMMARY
- NEXT_ACTION_SUGGESTION
- NEGLECTED_AREA_WARNING
- NOTE_TO_TASK_SUGGESTION

## Initial Relationships

```text
User 1 --- * LifeArea
User 1 --- * Goal
User 1 --- * Task
User 1 --- * Review
User 1 --- * Note
User 1 --- * AiInsight

LifeArea 1 --- * Goal
LifeArea 1 --- * Task
LifeArea 1 --- * ReviewItem
LifeArea 1 --- * Note

Goal 1 --- * Task

Review 1 --- * ReviewItem
```

## MVP Database Direction

The backend will use PostgreSQL as the primary database.

The initial schema should be managed with Flyway migrations. Database tables should be designed in a way that supports future authentication, multi-user support, and analytics without overengineering the first MVP.

## Naming Direction

Suggested table names:

- `users`
- `life_areas`
- `goals`
- `tasks`
- `reviews`
- `review_items`
- `notes`
- `ai_insights`

Suggested enum naming style:

- Uppercase enum values in backend code
- Lowercase or kebab-case labels in the UI

## Notes for Future Iterations

Potential future entities:

- Habit
- Metric
- CalendarEvent
- FinancialTransaction
- Attachment
- Integration
- Notification
- AuditLog

These are intentionally excluded from the first MVP data model to keep the scope small.
