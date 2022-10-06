import create from "zustand";

import { NewsNavbarTypes } from "../types/newsNavbarTypes";
import { ProjectNavbarTypes } from "../types/projectsNavbarTypes";

interface StoreTypes {
  selectedTag: string[] | undefined;
  projectFilter: ProjectNavbarTypes;
  newsFilter: NewsNavbarTypes;
}

export const useZustandStore = create<StoreTypes>(set => ({
  selectedTag: undefined,
  projectFilter: "Összes",
  newsFilter: "Összes",
}));
