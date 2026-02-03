import { create } from 'zustand';

type ThemeType = 'light' | 'dark';

interface AppState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
}));
