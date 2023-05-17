import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Genre } from "./useGenres";
import { AxiosRequestConfig } from "axios";

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

const useGames = (requestConfig: AxiosRequestConfig, deps?: any[]) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsloading(true);
      apiClient
        .get<FecthGamesResponse>("/games", {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setGames(res.data.results);
          setIsloading(false);
        })
        .catch((err) => {
          if (err.name === "CanceledError") return;
          setError(err.message);
          setIsloading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { games, error, isloading };
};

export default useGames;
