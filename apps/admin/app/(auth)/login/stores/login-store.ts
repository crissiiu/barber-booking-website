import { create } from "zustand";
import type { AdminProfile } from "@auth/login/models/login-models";

interface LoginState {
  isSubmitting: boolean;
  error: string | null;
  currentUser: AdminProfile | null;
  setSubmitting: (isSubmitting: boolean) => void;
  setError: (error: string | null) => void;
  setCurrentUser: (user: AdminProfile | null) => void;
  reset: () => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  isSubmitting: false,
  error: null,
  currentUser: null,
  setSubmitting: (isSubmitting) => set({ isSubmitting }),
  setError: (error) => set({ error }),
  setCurrentUser: (currentUser) => set({ currentUser }),
  reset: () => set({ isSubmitting: false, error: null, currentUser: null }),
}));
