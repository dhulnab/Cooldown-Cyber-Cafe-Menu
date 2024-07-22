import { create } from "zustand";

export const useGlobalStates = create((set) => ({
  page: "",
  arPageName: "",
  setPage: (page) => set({ page }),
  setArPageName: (arPageName) => set({ arPageName }),
}));
