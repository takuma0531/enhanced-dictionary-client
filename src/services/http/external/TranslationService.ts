import axios from "axios";
import { Word } from "@/typings/models/word";

// TODO: will be consumed in store
class TranslationService {
  private readonly baseUrl = process.env.REACT_APP_TRANSLATION_URL;

  public async getTranslatedText(word: Word): Promise<Word> {
    try {
      const res = await axios.post(`${this.baseUrl}`, {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: word.detectedText,
          source: word.detectedLanguage,
          target: word.targetLanguage,
          format: "text",
        }),
      });
      // TODO: check data sturcture
      console.log(res);

      word.targetText = res.data.translatedText

      return res.data.translatedText;
    } catch (err) {
      throw err;
    }
  }
}

export const translationService = new TranslationService();
