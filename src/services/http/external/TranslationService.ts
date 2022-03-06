import axios from "axios";
import { Word } from "@/typings/models/word";

class TranslationService {
  private readonly baseUrl = process.env.REACT_APP_TRANSLATION_URL;

  public async getTranslatedText(word: Word): Promise<Word> {
    try {
      const res = await axios.post(
        `${this.baseUrl}`,
        {
          q: word.detectedText,
          source: word.detectedLanguage,
          target: word.targetLanguage,
          format: "text",
        },
        { headers: { "Content-Type": "application/json" } }
      );
      word.targetText = res.data.translatedText;
      return word;
    } catch (err) {
      throw err;
    }
  }
}

export const translationService = new TranslationService();
