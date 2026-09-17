/** Shared RED API client — VITE_API_URL + red_auth_token (Batch 3). */

export const AUTH_TOKEN_KEY = 'red_auth_token';

export function apiBase(): string {
  const raw = (import.meta.env.VITE_API_URL as string | undefined)?.trim();
  if (raw && raw.length > 0) return raw.replace(/\/$/, '');
  // Local vite only — never ship localhost as a production fallback.
  if (import.meta.env.DEV) return 'http://127.0.0.1:8000';
  return 'https://red-api-8w9g.onrender.com';
}

/** Resolved once at module load — same helper as apiBase(). */
export const API_BASE = apiBase();

export type RedUser = {
  id: number;
  email: string;
  name: string | null;
  created_at: string | null;
};

export function getAuthToken(): string | null {
  try {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setAuthToken(token: string | null): void {
  try {
    if (token) localStorage.setItem(AUTH_TOKEN_KEY, token);
    else localStorage.removeItem(AUTH_TOKEN_KEY);
  } catch {
    /* ignore */
  }
}

async function parseJson(res: Response): Promise<Record<string, unknown>> {
  try {
    return (await res.json()) as Record<string, unknown>;
  } catch {
    return {};
  }
}

export async function apiRegister(input: {
  email: string;
  password: string;
  name?: string;
}): Promise<{ token: string; user: RedUser }> {
  const res = await fetch(`${apiBase()}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  const data = await parseJson(res);
  if (!res.ok) throw new Error(String(data.error || res.statusText || 'register failed'));
  return data as unknown as { token: string; user: RedUser };
}

export async function apiLogin(input: {
  email: string;
  password: string;
}): Promise<{ token: string; user: RedUser }> {
  const res = await fetch(`${apiBase()}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  const data = await parseJson(res);
  if (!res.ok) throw new Error(String(data.error || res.statusText || 'login failed'));
  return data as unknown as { token: string; user: RedUser };
}

export async function apiLogout(): Promise<void> {
  const token = getAuthToken();
  try {
    await fetch(`${apiBase()}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({}),
    });
  } finally {
    setAuthToken(null);
  }
}

export async function apiMe(): Promise<RedUser | null> {
  const token = getAuthToken();
  if (!token) return null;
  const res = await fetch(`${apiBase()}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    if (res.status === 401) setAuthToken(null);
    return null;
  }
  const data = await parseJson(res);
  return (data.user as RedUser) || null;
}

export async function apiContact(input: {
  name: string;
  email: string;
  company?: string;
  note: string;
}): Promise<{ ok: boolean; id?: number }> {
  const res = await fetch(`${apiBase()}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });
  const data = await parseJson(res);
  if (!res.ok) throw new Error(String(data.error || res.statusText || 'contact failed'));
  return data as unknown as { ok: boolean; id?: number };
}
