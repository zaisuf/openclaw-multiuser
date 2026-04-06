# OpenClaw Multi-User

Modified version of OpenClaw that supports multiple users with separate gateway tokens.

## What This Does

- User signup/login system
- Auto session creation on signup
- Unique gateway tokens per user
- Each user gets their own space

## Token Format

```
u_{userId}_{random}
```

Example: `u_abc123_xyz789`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/signup | Create account |
| POST | /api/auth/login | Login |
| GET | /api/auth/me | Get current user |
| GET | /api/auth/token | Get user's token |

## Setup

1. Deploy on Fly.io or your preferred host
2. Set environment variables
3. Connect channels using user's token

## Architecture

- One OpenClaw instance
- Multiple user sessions (in memory/DB)
- Token-based routing

---

Based on OpenClaw: https://github.com/openclaw/openclaw
