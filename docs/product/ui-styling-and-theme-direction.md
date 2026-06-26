# UI Styling and Theme Direction

This document defines the initial UI styling direction for LifeOS.

Sprint 1 will replace the default Vite starter UI with a custom LifeOS dashboard. The goal is to create a clean, calm, product-like interface that feels like a personal operating system rather than a generic admin panel.

## Decision

LifeOS will use Tailwind CSS for the first frontend implementation.

## Why Tailwind CSS

Tailwind CSS was selected because it supports:

* Fast custom UI development
* Strong design flexibility
* Utility-first styling
* Easy iteration during early product design
* A modern frontend portfolio signal
* Building a unique product identity without depending heavily on prebuilt component libraries

LifeOS should feel like its own product. A custom Tailwind-based UI gives more visual control than using a ready-made component library from the beginning.

## Alternatives Considered

### Material UI

Material UI is a strong and production-ready React component library. It provides many ready-to-use components and can speed up development.

However, for LifeOS Sprint 1, Material UI is not selected because:

* It may make the product feel like a generic admin panel.
* It adds a strong Material Design visual language.
* It may reduce the need to practice custom UI composition.
* The first dashboard needs visual identity more than many complex components.

Material UI may still be considered later if the product needs complex components such as advanced tables, dialogs, forms, or admin-style workflows.

### Plain CSS

Plain CSS is simple and has no dependency cost.

However, it is not selected for Sprint 1 because:

* Styling may become harder to organize as the UI grows.
* It provides less structure for fast iteration.
* It gives less direct portfolio signal than Tailwind CSS in modern frontend work.

### CSS Modules

CSS Modules provide scoped styling and are a good option for component-based CSS.

However, for the first dashboard, Tailwind CSS is preferred because it allows faster visual iteration directly inside components.

## Initial Theme Direction

LifeOS should feel:

* Calm
* Focused
* Modern
* Minimal
* Trustworthy
* Personal but professional
* More like an operating system than a task app

## Visual Principles

### 1. Clarity over decoration

The dashboard should be easy to scan. Visual design should help the user understand priorities quickly.

### 2. Calm productivity

The UI should avoid aggressive colors, visual noise, and unnecessary animations.

### 3. Product identity

LifeOS should not look like a default template. It should have a recognizable visual direction connected to the Nofric brand.

### 4. Dashboard-first structure

The first screen should immediately communicate:

* Today's focus
* Life areas
* Active goals
* Open tasks
* AI daily brief
* Weekly progress

### 5. Mock data should feel realistic

Mock data should demonstrate the product idea without using real private personal information.

## Initial Color Direction

The first theme will use:

* Dark neutral background
* Light foreground text
* Muted borders
* Soft card surfaces
* Teal or turquoise accent color
* Limited status colors for priority and progress

This matches the Nofric brand direction and avoids a generic blue SaaS look.

## Initial Typography Direction

The first implementation can use the system font stack.

The UI should prioritize readability over decoration.

Possible future typography improvements:

* Inter
* Geist
* IBM Plex Sans

For Sprint 1, the system font stack is enough.

## Component Direction

Sprint 1 should create small reusable components instead of installing a full component library.

Initial components:

* AppLayout
* Sidebar
* Header
* DashboardPage
* SectionHeader
* StatCard
* LifeAreaCard
* GoalCard
* TaskCard
* AiBriefCard
* WeeklyProgressCard

## Tailwind Setup Direction

Tailwind CSS should be installed in the web app under `apps/web`.

The first setup should include:

* Tailwind CSS
* Vite integration
* Global CSS entry
* Basic theme tokens if needed

## Non-Goals

Sprint 1 will not include:

* Full design system
* Component library package
* Complex animations
* Light and dark theme switching
* Advanced responsive layouts
* Pixel-perfect branding
* External UI kits

## Definition of Done

This decision is complete when:

* The styling approach is documented
* Tailwind CSS is selected as the initial styling tool
* Alternatives are documented
* Initial visual principles are documented
* Initial theme direction is documented
* Sprint 1 dashboard implementation can start with a clear UI direction
