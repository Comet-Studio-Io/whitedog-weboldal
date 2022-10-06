import create from "zustand";

import { NewsNavbarTypes } from "../types/newsNavbarTypes";
import { ProjectNavbarTypes } from "../types/projectsNavbarTypes";

interface StoreTypes {
  selectedTag: string[] | undefined;
  filterType: NewsNavbarTypes | ProjectNavbarTypes;
}

export const useZustandStore = create<StoreTypes>(set => ({
  selectedTag: undefined,
  filterType: "Összes",
}));
