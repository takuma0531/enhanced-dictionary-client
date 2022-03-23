import { IWordService } from "./IWordService";
import { BaseHttpService } from "../base/BaseHttpService";
import { Word } from "@/typings/models/word";

const URL_PATH = {
  USER: "user",
  MEMORY_GAME: "memory-game",
  INCREMENTING_COUNT_OF_WORD_PLAYED: "incrementing-count-of-word-played",
  REFRESHING_COUNT_OF_WORD_PLAYED: "refreshing-count-of-word-played",
};

const QUERY_STRING = {
  NUMBER_OF_PAIRS: "numberOfPairs",
  WORD_ID: "wordId",
};

class WordService extends BaseHttpService implements IWordService {
  private readonly BASE_ROUTE = "/api/v1/words";

  public async registerWord(word: Word): Promise<Word> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.post<Word>(
        `${this.BASE_ROUTE}/${URL_PATH.USER}`,
        word
      );
      return data;
    } catch (err) {
      throw err;
    }
  }

  public async getAllWords(): Promise<Word[]> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.get<Word[]>(
        `${this.BASE_ROUTE}/${URL_PATH.USER}`
      );
      return data;
    } catch (err) {
      throw err;
    }
  }

  public async getWordsForMemoryGame(numberOfPairs: number): Promise<Word[]> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.get<Word[]>(
        `${this.BASE_ROUTE}/${URL_PATH.USER}/${URL_PATH.MEMORY_GAME}?${QUERY_STRING.NUMBER_OF_PAIRS}=${numberOfPairs}`
      );
      if (!data) return [];
      return data;
    } catch (err) {
      throw err;
    }
  }

  public async updateWord(word: Word): Promise<Word> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.put<Word>(
        `${this.BASE_ROUTE}/${URL_PATH.USER}`,
        word
      );
      return data;
    } catch (err) {
      throw err;
    }
  }

  public async incrementCountOfWordPlayed(word: Word): Promise<Word> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.put<Word>(
        `${this.BASE_ROUTE}/${URL_PATH.USER}/${URL_PATH.INCREMENTING_COUNT_OF_WORD_PLAYED}`,
        word
      );
      return data;
    } catch (err) {
      throw err;
    }
  }

  public async refreshCountOfWordPlayed(wordId: string): Promise<Word> {
    try {
      this.setToken();
      const { data } = await this.axiosApi.put<Word>(
        `${this.BASE_ROUTE}/ ${URL_PATH.USER}/${URL_PATH.REFRESHING_COUNT_OF_WORD_PLAYED}?${QUERY_STRING.WORD_ID}=${wordId}`
      );
      return data;
    } catch (err) {
      throw err;
    }
  }

  public async deleteWord(wordId: string): Promise<void> {
    try {
      this.setToken();
      await this.axiosApi.delete(
        `${this.BASE_ROUTE}/${URL_PATH.USER}?${QUERY_STRING.WORD_ID}=${wordId}`
      );
    } catch (err) {
      throw err;
    }
  }
}

export const wordService = new WordService();
