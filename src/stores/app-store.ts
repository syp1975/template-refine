import { create } from "zustand";

interface AppState {
  count: number;
  increase: (by: number) => void;
  clear: () => void;
}

export const useAppStore = create<AppState>()((set) => ({
  count: 0,
  increase: (by) => set((state) => ({ count: state.count + by })),
  clear: () => set({ count: 0 }),
}));
