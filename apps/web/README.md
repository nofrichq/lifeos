# LifeOS Web

This package contains the first web application shell for LifeOS.

The web app is built with React, TypeScript, and Vite. It will initially use static mock data while the product direction, dashboard, and backend API are being developed.

## Stack

- React
- TypeScript
- Vite
- ESLint
- Prettier
- Vitest
- React Testing Library

## Available Scripts

Run commands from the `apps/web` directory.

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run linting

```bash
npm run lint
```

### Format files

```bash
npm run format
```

### Check formatting

```bash
npm run format:check
```

### Run tests in watch mode

```bash
npm run test
```

### Run tests once

```bash
npm run test:run
```

### Run all local quality checks

```bash
npm run quality:check
```

### Format and run local quality checks

```bash
npm run quality
```

## Testing Direction

The first test setup uses Vitest and React Testing Library.

Testing should focus on user-visible behavior instead of implementation details. Prefer accessible queries such as `getByRole` and `getByLabelText` over brittle text or class-based checks.

## Development Notes

The default Vite starter UI will be replaced with the first LifeOS dashboard implementation in Sprint 1.

Until backend integration is ready, the web app should use mock data only.
