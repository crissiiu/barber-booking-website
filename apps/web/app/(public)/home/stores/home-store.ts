import { create } from "zustand";

interface HomeState {
  activeSlideIndex: number;
  selectedBranchId: string | null;
  setActiveSlideIndex: (index: number) => void;
  setSelectedBranchId: (branchId: string | null) => void;
}

export const useHomeStore = create<HomeState>((set) => ({
  activeSlideIndex: 0,
  selectedBranchId: null,
  setActiveSlideIndex: (activeSlideIndex) => set({ activeSlideIndex }),
  setSelectedBranchId: (selectedBranchId) => set({ selectedBranchId }),
}));
