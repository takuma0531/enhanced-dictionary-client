import { Word } from "../word";

export interface User {
  email?: string;
  password?: string;
  words?: Word[];
  authResult?: AuthorizedResult;
}

export interface AuthorizedResult {
  token?: string | null;
  expireIn?: any;
  isAuthorized: boolean;
}
