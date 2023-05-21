import axios, { AxiosRequestConfig } from "axios";

export interface FectResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0c604df02e624217a44f1a703738afc3",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FectResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
