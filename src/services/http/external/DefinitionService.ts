import axios from "axios";
import { Word } from "@/typings/models/word";

class DefinitionService {
  private readonly baseUrl = process.env.REACT_APP_DEFINITION_URL;

  public async getDefinitionOfWord(word: Word): Promise<Word> {
    try {
      if (word.detectedLanguage != "en") return word;
      const res = await axios.get(
        `${this.baseUrl}/${word.detectedLanguage}/${word.detectedText}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      word.definition = res.data[0].meanings[0].definitions[0].definition;
      return word;
    } catch (err) {
      throw err;
    }
  }
}

export const definitionService = new DefinitionService();
