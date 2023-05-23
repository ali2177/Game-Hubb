import { create } from "zustand";

export interface GameQuery {
  genreID?: number;
  genreName?: string;
  selectedPlatform?: string;
  selectedPlatformID?: number;
  sortOrder?: string;
  userInput?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setUserInput: (userInput: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setGenreID: (genreID: number) => void;
  setGenreName: (genreName: string) => void;
  setPlatformName: (selectedPlatform: string) => void;
  setPlatformID: (selectedPlatformID: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setUserInput: (userInput) =>
    set(() => ({
      gameQuery: {
        userInput,
      },
    })),
  setGenreID: (genreID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreID } })),
  setGenreName: (genreName) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreName } })),
  setPlatformID: (selectedPlatformID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, selectedPlatformID } })),
  setPlatformName: (selectedPlatform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, selectedPlatform } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
