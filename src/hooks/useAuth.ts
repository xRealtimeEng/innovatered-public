import { useCallback, useEffect, useState } from 'react';
import {
  apiLogin,
  apiLogout,
  apiMe,
  apiRegister,
  setAuthToken,
  type RedUser,
} from '../lib/api';

export function useAuth() {
  const [user, setUser] = useState<RedUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const me = await apiMe();
      setUser(me);
    } catch (e) {
      setUser(null);
      setError(e instanceof Error ? e.message : 'auth check failed');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const login = useCallback(async (email: string, password: string) => {
    setError(null);
    const { token, user: u } = await apiLogin({ email, password });
    setAuthToken(token);
    setUser(u);
    return u;
  }, []);

  const register = useCallback(async (email: string, password: string, name?: string) => {
    setError(null);
    const { token, user: u } = await apiRegister({ email, password, name });
    setAuthToken(token);
    setUser(u);
    return u;
  }, []);

  const logout = useCallback(async () => {
    setError(null);
    await apiLogout();
    setUser(null);
  }, []);

  return { user, loading, error, setError, login, register, logout, refresh };
}
