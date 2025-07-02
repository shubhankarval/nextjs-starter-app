# nextjs-starter-app

This repository serves as a **template source** for [`nextjs-starter-pack`](htthttps://github.com/shubhankarval/nextjs-starter-pack). It contains the base Next.js starter code along with optional feature implementations stored in separate branches.

It is **not meant to be used directly** for app development, but acts as a **code store** for templating different feature combinations when generating new projects via nextjs-starter-pack.

## 🧩 Available Feature Branches

Each branch includes optional code for a specific feature:

| Branch Name      | Feature Description                 |
| ---------------- | ----------------------------------- |
| `main`           | Base minimal Next.js setup          |
| `authjs`         | Authentication using Auth.js        |
| `clerk`          | Authentication using Clerk          |
| `dark-mode`      | Dark mode with next-themes          |
| `jotai`          | State management with Jotai         |
| `prisma`         | Prisma ORM integration              |
| `rhf-with-zod`   | React Hook Form with Zod validation |
| `tanstack-query` | Data fetching with TanStack Query   |
| `zustand`        | State management with Zustand       |

> You can mix and match features in the `nextjs-starter-pack` setup, which uses relevant code from these branches.

## 🛠️ Running Locally

Install the dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

Now open your browser to [http://localhost:3000](http://localhost:3000) 
