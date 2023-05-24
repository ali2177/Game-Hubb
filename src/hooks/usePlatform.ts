import { useQuery } from "@tanstack/react-query";
import APIClient, { FectResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () => {
  return useQuery({
    queryKey: ["platform"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
};

export default usePlatform;
