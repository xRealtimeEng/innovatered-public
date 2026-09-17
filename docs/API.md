# RED HTTP surface (public APIs)

Same catalog as [www.innovatered.com/apis](https://www.innovatered.com/apis).

**Base URL:** `https://red-api-8w9g.onrender.com`  
**Stack:** Flask + SQLAlchemy (Batch 3 shared auth/contact demo).  
**Auth:** Bearer token; clients store it as `red_auth_token` (shared across RedWeb + RPS).

Source: [xRealtimeEng/innovatered-api](https://github.com/xRealtimeEng/innovatered-api)

---

## Live routes

### `GET /health`

Liveness for the Flask process.

- **Request:** none  
- **Response:** `{ status: "ok", service: "red-api" }`

### `GET /db/ping`

Executes `SELECT 1` against `DATABASE_URL` (SQLite default; Postgres-capable).

- **Request:** none  
- **Response:** `{ ok: true, database_url_scheme: "sqlite" }`

### `GET /debug/health`

Diagnostic health: DB ping plus `mail_mode` and recent log lines (staging/ops).

- **Request:** none  
- **Response:** `{ status, service, mail_mode, db_scheme, recent_log_lines }`  
- **Note:** ops/debug only — do not expose secrets in log lines.

### `POST /auth/register`

Create account. Returns bearer token + user.

| Field | Type | Notes |
|-------|------|--------|
| `email` | string | Required. Normalized lower-case. |
| `password` | string | Required. Min 8 characters. |
| `name` | string | Optional. Trimmed. |

- **Response:** `201 { token, user }` — `400` / `409` on validation or duplicate email  
- **Client:** store `token` as `red_auth_token`; send `Authorization: Bearer <token>`

### `POST /auth/login`

Sign in. Returns bearer token + user.

| Field | Type | Notes |
|-------|------|--------|
| `email` | string | Required. |
| `password` | string | Required. |

- **Response:** `{ token, user }` — `401` on invalid credentials

### `POST /auth/logout`

Revokes the bearer token server-side (in-memory demo store).

- **Request:** Bearer optional; empty JSON body OK  
- **Response:** `{ ok: true }`  
- **Client:** always clear `red_auth_token` after logout

### `GET /auth/me`

Current user for a valid bearer token.

- **Request:** `Authorization: Bearer <token>`  
- **Response:** `{ user }` — `401` if missing/invalid

### `POST /contact`

Lead capture. Persists a row; may log or SMTP mail per `MAIL_MODE`.

| Field | Type | Notes |
|-------|------|--------|
| `name` | string | Required. Trimmed. |
| `email` | string | Required. Must look like an email. |
| `company` | string | Optional. Trimmed; omit or empty OK. |
| `note` | string | Required. Trimmed. |

- **Response:** `{ ok: true, id, mail }` — `400` if name/email/note missing  
- Free tier currently uses `MAIL_MODE=log` (request succeeds; message is logged, not SMTP’d)

---

## Planned (not shipped)

| Method | Path | Notes |
|--------|------|--------|
| GET | `/docs` | Swagger UI — Flask has no OpenAPI UI by default |
| GET | `/openapi.json` | OpenAPI schema — not shipped; use this catalog |

---

## Quick examples

```bash
# Health
curl -sS https://red-api-8w9g.onrender.com/health

# Login (demo seed user — change in production)
curl -sS -X POST https://red-api-8w9g.onrender.com/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"demo@innovatered.local","password":"RedTest-2026!"}'

# Contact
curl -sS -X POST https://red-api-8w9g.onrender.com/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Ada","email":"ada@example.com","company":"Acme","note":"RTLS interest"}'
```

First request on free Render may be slow (cold start).
