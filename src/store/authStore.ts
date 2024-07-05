import { createStore, useStore } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
};

export const useAuthStore = createStore<AuthState>(() => ({
  isAuthenticated: true,
}));

export const useAuth = () => useStore(useAuthStore)