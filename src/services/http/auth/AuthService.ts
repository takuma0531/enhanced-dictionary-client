import { IAuthService } from "./IAuthService";
import { BaseHttpService } from "../base/BaseHttpService";
import { User, AuthorizedResult } from "@/typings/models/user";
import { JwtService } from "@/services/localStorage/JwtService";

const URL_PATH = {
  LOGIN: "login",
  CHECK_AUTH: "check-auth",
};

class AuthService extends BaseHttpService implements IAuthService {
  private readonly BASE_ROUTE = "/api/v1/users";

  public async registerUser(user: User): Promise<User> {
    try {
      const { data } = await this.axiosApi.post<User>(this.BASE_ROUTE, user);
      JwtService.saveToken(data.authResult?.token!);
      return data;
    } catch (err) {
      throw err;
    }
  }

  public async loginUser(user: User): Promise<AuthorizedResult> {
    try {
      const { data } = await this.axiosApi.post<AuthorizedResult>(
        `${this.BASE_ROUTE}/${URL_PATH.LOGIN}`,
        user
      );
      if (data.isAuthorized && data.token) JwtService.saveToken(data.token);
      return data;
    } catch (err) {
      throw err;
    }
  }

  public async getUser(): Promise<User> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.get<User>(this.BASE_ROUTE);
      return data;
    } catch (err) {
      throw err;
    }
  }

  public async checkAuth(): Promise<AuthorizedResult> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.get<AuthorizedResult>(
        `${this.BASE_ROUTE}/${URL_PATH.CHECK_AUTH}`
      );
      if (data.isAuthorized && data.token) JwtService.saveToken(data.token);
      return data;
    } catch (err) {
      throw err;
    }
  }
}

export const authService = new AuthService();
