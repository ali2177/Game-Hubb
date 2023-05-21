import APIClient, { FectResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
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
  return useQuery<FectResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.selectedPlatform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.userInput,
        },
      }),
  });
};

export default useGames;
