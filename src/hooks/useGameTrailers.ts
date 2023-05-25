import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailers } from "../entities/Trailers";

const useGamesTrailers = (slug: string) => {
  const apiClient = new APIClient<Trailers>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: ["gameTrailer", slug],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
};

export default useGamesTrailers;
