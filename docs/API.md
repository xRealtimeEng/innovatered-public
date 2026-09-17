# Public API

Base URL: `https://red-api-8w9g.onrender.com`

| Method | Path | Notes |
|--------|------|--------|
| GET | `/health` | Liveness |
| GET | `/db/ping` | Database ping |
| POST | `/auth/register` | Demo auth |
| POST | `/auth/login` | Demo auth |
| GET | `/auth/me` | Bearer token |
| POST | `/contact` | Lead capture (`MAIL_MODE=log` on free tier) |

Source: [innovatered-api](https://github.com/xRealtimeEng/innovatered-api)
