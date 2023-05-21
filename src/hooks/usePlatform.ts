import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FecthPlatformResponse {
  count: number;
  results: Platform[];
}

const usePlatform = () => {
  const fetchPlatform = () =>
    apiClient
      .get<FecthPlatformResponse>("/platforms/lists/parents")
      .then((res) => res.data);

  return useQuery({
    queryKey: ["platform"],
    queryFn: fetchPlatform,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
};

export default usePlatform;
