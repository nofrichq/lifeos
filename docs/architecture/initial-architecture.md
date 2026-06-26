# Initial Architecture and Tech Stack

LifeOS will be developed as a modern full-stack monorepo project.

The goal of the technology choices is not only to build a working MVP, but also to demonstrate production-oriented engineering skills that are valuable for backend, full-stack, and product engineering roles.

## Selected Stack

### Frontend

- React
- TypeScript
- Vite
- MUI or Tailwind CSS
- TanStack Query
- React Router
- Recharts

### Backend

- Java 17+
- Spring Boot 3
- Spring Web
- Spring Security
- Spring Data JPA
- Bean Validation
- OpenAPI / Swagger

### Database

- PostgreSQL
- Flyway for database migrations

### DevOps and Tooling

- Docker
- Docker Compose
- GitHub Actions
- ESLint / Prettier
- Checkstyle or Spotless
- Maven

### Testing

- Vitest
- React Testing Library
- JUnit 5
- Mockito
- Testcontainers

### AI Layer

AI features will be added after the core MVP is stable.

Initial AI use cases:

- Daily summary generation
- Weekly review summary
- Next-action suggestions
- Turning notes into structured tasks
- Detecting neglected life areas

## Architecture Direction

LifeOS will start as a modular monolith.

The backend will be organized by business modules instead of technical layers only. Initial modules:

- Identity
- Life Areas
- Goals
- Tasks
- Reviews
- AI Assistant

The project will avoid microservices in the MVP because microservices would add unnecessary operational complexity. A modular monolith is more suitable for an early-stage product while still allowing clean boundaries and future scalability.

## Monorepo Direction

The initial monorepo structure is:

```text
apps/
  web/      React frontend application
  api/      Spring Boot backend API

docs/
  architecture/  Architecture notes and diagrams
  product/       Product documentation and planning
  decisions/     Architecture Decision Records

infra/       Infrastructure and deployment files
packages/    Shared packages and reusable code
```

## Why This Stack

This stack was selected because it demonstrates practical, job-relevant engineering skills:

- Modern Java and Spring Boot backend development
- REST API design
- Authentication and authorization
- Relational database modeling with PostgreSQL
- Database migrations
- Modern React and TypeScript frontend development
- Docker-based local development
- CI/CD with GitHub Actions
- Automated testing
- AI-assisted product features

## Initial Deployment Plan

The first deployment target will be simple and low-cost:

- Frontend: Vercel or similar static frontend hosting
- Backend: Render, Fly.io, Railway, or VPS
- Database: Managed PostgreSQL

The deployment target may change later based on cost, reliability, and learning value.

## MVP Architecture Boundaries

The MVP should avoid unnecessary infrastructure and complexity.

Initial rules:

- Start with a single frontend app and a single backend API.
- Use mock data until the dashboard direction is clear.
- Add the database after the first custom UI is in place.
- Add AI integration after the core data model and review flow are usable.
- Do not introduce microservices during the MVP.
