# Monor - Job Listings Platform

A job listings site built with a monorepo architecture using pnpm workspaces.

## Project Structure

```
monor/
├── apps/
│   ├── frontend/         # Vue + Vite frontend
│   └── backend/          # Express + TypeScript API
├── packages/
│   ├── shared/           # Shared types & validation (Zod)
│   └── db/               # Prisma database layer
└── builds/               # Production builds
```

## Tech Stack

- **Frontend:** Vue 3, Vite (With proxy to backend), TypeScript
- **Backend:** Express, TypeScript, Prisma
- **Database:** PostgreSQL (prod)
- **Validation:** Zod
- **Monorepo:** pnpm workspaces

## Getting Started

```bash
# Install dependencies
pnpm install

# Start frontend dev server
pnpm dev:frontend

# Start backend dev server
pnpm dev:backend

# Start both
pnpm dev
```

## Scripts

| Command             | Description         |
| ------------------- | ------------------- |
| `pnpm dev`          | Run all dev servers |
| `pnpm dev:frontend` | Run frontend only   |
| `pnpm dev:backend`  | Run backend only    |
| `pnpm build`        | Build all packages  |

## Shared Package

Import shared types and validation schemas in frontend or backend:

```ts
import { User, UserSchema } from 'shared'
```
