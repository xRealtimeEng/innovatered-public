# innovatered-public

**Limited public** mirror of the RED marketing / brochure frontend only.

This is **not** the full product monorepo. Full **RPS**, internal tooling, and private backend IP stay private:

- Private monorepo: https://github.com/xRealtimeEng/innovatered *(private)*
- Shared public API: https://github.com/xRealtimeEng/innovatered-api
- Production API base URL: `https://red-api-8w9g.onrender.com`

Azure DevOps (`REDevOps/RedWeb`, `REDevOps/RPS`) remains the deploy source of truth for Cloudflare Pages unless Ben switches remotes.

## What’s included

Vite + React + TypeScript brochure site (from RedWeb `frontend/`), including `public/` assets needed to build.

## What’s not included

- Full RPS application
- Flask backend / secrets / databases
- `.env*` production secrets (see `.env.example` only)

## Build

```bash
npm install
npm run build
# or: npm run dev
```

### Environment

Copy `.env.example` and set:

```bash
VITE_API_URL=https://red-api-8w9g.onrender.com
```

For local API work, point `VITE_API_URL` at your local Flask (default in `.env.example`: `http://127.0.0.1:8000`).

## Branch

`main` only — public limited surface.
