import { Word } from "@/typings/models/word";

export interface IWordService {
  registerWord(word: Word): Promise<Word>;
  getAllWords(): Promise<Word[]>;
  getWordsForMemoryGame(numberOfPairs: number): Promise<Word[]>;
  updateWord(word: Word): Promise<Word>;
  incrementCountOfWordsPlayed(words: Word[]): Promise<Word>;
  refreshCountOfWordPlayed(wordId: string): Promise<Word>;
  deleteWord(wordId: string): Promise<void>;
}
