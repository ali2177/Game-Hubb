import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FecthGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () =>
    apiClient
      .get<FecthGamesResponse>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.selectedPlatform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.userInput,
        },
      })
      .then((res) => res.data);
  return useQuery<FecthGamesResponse, Error>({
    queryKey: ["games", gameQuery],
    queryFn: fetchGames,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
};

export default useGames;
