import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

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
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsloading(true);
    apiClient
      .get<FecthPlatformResponse>("/platforms/lists/parents", {
        signal: controller.signal,
      })
      .then((res) => {
        setPlatforms(res.data.results);
        setIsloading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setIsloading(false);
      });

    return () => controller.abort();
  }, []);

  return { platforms, error, isloading };
};

export default usePlatform;
