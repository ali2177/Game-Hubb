import APIClient, { FectResponse } from "../services/api-client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const apiClient = new APIClient<Game>("/games");
const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FectResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.selectedPlatform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.userInput,
          page: pageParam,
        },
      }),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
