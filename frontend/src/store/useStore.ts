import create from "zustand";

import { NewsFilterTypes } from "../types/newsFilterTypes";
import { ProjectFilterTypes } from "../types/projectFilterTypes";

interface StoreTypes {
  selectedTag: string[] | undefined;
  projectFilter: ProjectFilterTypes;
  newsFilter: NewsFilterTypes;
}

export const useZustandStore = create<StoreTypes>(set => ({
  selectedTag: undefined,
  projectFilter: "Összes",
  newsFilter: "Összes",
}));
