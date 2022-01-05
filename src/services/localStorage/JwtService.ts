export class JwtService {
  private static TOKEN_KEY = "token";

  public static getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public static saveToken(token: string): void {
    return localStorage.setItem(this.TOKEN_KEY, token);
  }

  public static removeToken(): void {
    return localStorage.removeItem(this.TOKEN_KEY);
  }
}
