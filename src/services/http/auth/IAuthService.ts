import { User, AuthorizedResult } from "@/typings/models/user";

export interface IAuthService {
  registerUser(user: User): Promise<User>;
  loginUser(user: User): Promise<AuthorizedResult>;
  getUser(): Promise<User>;
  checkAuth(): Promise<AuthorizedResult>;
}
