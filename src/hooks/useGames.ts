import apiClient, { FectResponse } from "../services/api-client";
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
const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () =>
    apiClient
      .get<FectResponse<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.selectedPlatform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.userInput,
        },
      })
      .then((res) => res.data);
  return useQuery<FectResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: fetchGames,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
};

export default useGames;
