import axios from "axios";
import { Word } from "@/typings/models/word";

// TODO: will be consumed in store
class DefinitionService {
  private readonly baseUrl = process.env.REACT_APP_DEFINITION_URL;

  public async getDefinitionOfWord(word: Word): Promise<Word> {
    try {
      const res = await axios.get(
        `${this.baseUrl}/${word.detectedLanguage}/${word.detectedText}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      // TODO: check data sturcture
      console.log(res);

      word.definition = res.data[0].meanings[0];
      return word;
    } catch (err) {
      throw err;
    }
  }
}

export const definitionService = new DefinitionService();
