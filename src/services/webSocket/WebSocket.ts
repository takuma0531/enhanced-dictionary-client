import io, { Socket } from "socket.io-client";
import { IWebSocket } from "./IWebSocket";
import { SocketEventNames } from "../../enums/socketEventNames";
import { Word } from "../../typings/models/word";

class WebSocket implements IWebSocket {
  private _connectionUrl: string | null =
    process.env.REACT_APP_SOCKET_CONNECTION_URL || null;
  private _socket: Socket | null = null;

  public init() {
    if (!this._connectionUrl) return;
    this._socket = io(this._connectionUrl);
  }

  public disconnect(): void {
    this._socket?.close();
  }

  public gameStart(words: Word[], callback: any): void {
    this._socket?.emit(SocketEventNames.GAME_START, words);
    this._socket?.on(SocketEventNames.INITIAL_GAME_DATA_SHARE, callback);
  }

  public gameClick(wordCardOrderId: number): void {
    this._socket?.emit(SocketEventNames.GAME_CLICK, wordCardOrderId);
  }

  public onGameFlip(callback: any): void {
    this._socket?.on(SocketEventNames.GAME_FLIP, callback);
  }

  public onGameUnflip(callback: any): void {
    this._socket?.on(SocketEventNames.GAME_UNFLIP, callback);
  }

  public onGameCheck(callback: any): void {
    this._socket?.on(SocketEventNames.GAME_CHECK, callback);
  }

  public onGameFinish(callback: any): void {
    this._socket?.on(SocketEventNames.GAME_FINISH, callback);
  }
}

export const webSocket = new WebSocket();
