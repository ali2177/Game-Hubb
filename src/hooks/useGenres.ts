import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FecthGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const fetchGenres = () =>
    apiClient.get<FecthGenresResponse>("/genres").then((res) => res.data);

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });
};

export default useGenres;
