import { Word } from "../../typings/models/word";

export interface IWebSocket {
  init(): void;
  disconnect(): void;
  gameStart(words: Word[], callback: any): void;
  gameClick(wordCardOrderId: number): void;
  onGameFlip(callback: any): void;
  onGameUnflip(callback: any): void;
  onGameCheck(callback: any): void;
}
