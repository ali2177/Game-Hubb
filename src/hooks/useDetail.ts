import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>(`/games`);

const useDetail = (slug: string) => {
  console.log(slug);

  return useQuery({
    queryKey: ["gameDetail", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
};

export default useDetail;
