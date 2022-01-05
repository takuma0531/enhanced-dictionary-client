import axios, { AxiosInstance } from "axios";
import { JwtService } from "@/services/localStorage/JwtService";

export abstract class BaseHttpService {
  protected axiosApi: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  protected setToken(): void {
    const token = JwtService.getToken();
    if (!token) return;
    this.axiosApi.defaults.headers.common = {
      Authorization: `bearer ${token}`,
    };
  }
}
