import { create } from "zustand";

export const useGlobalStates = create((set) => ({
  page: "Home",
  arPageName: "",
  setPage: (page) => set({ page }),
  setArPageName: (arPageName) => set({ arPageName }),
}));
