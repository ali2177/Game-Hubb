import apiClient, { FectResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  const fetchPlatform = () =>
    apiClient
      .get<FectResponse<Platform>>("/platforms/lists/parents")
      .then((res) => res.data);

  return useQuery({
    queryKey: ["platform"],
    queryFn: fetchPlatform,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
};

export default usePlatform;
