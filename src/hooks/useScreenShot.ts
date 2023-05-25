import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { ScreenShot } from "../entities/GameScrennShot";

const useScreenShot = (slug: string) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${slug}/screenshots`);

  return useQuery({
    queryKey: ["gameScreenShot", slug],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
};

export default useScreenShot;
