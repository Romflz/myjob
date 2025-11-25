# Monor Workspace

Monorepo managed with pnpm workspaces, containing:

- `apps/frontend` – Vite + Vue frontend
- `apps/backend` – Express + TypeScript backend
- `packages/shared` – Shared types and validation (using Zod)

## Setup

```powershell
cd C:\Users\roman\Documents\monor
pnpm install
```

## Development

- Frontend only:

```powershell
pnpm dev:frontend
```

- Backend only:

```powershell
pnpm dev:backend
```

- All dev scripts (frontend + backend) in parallel:

```powershell
pnpm dev
```

## Using shared package

From frontend or backend, import shared types/validation:

```ts
import { User, UserSchema } from "shared";
```

`UserSchema` is a Zod schema; `User` is the inferred TypeScript type.
