import translate from "translate";
import { Word } from "@/typings/models/word";

class TranslationService {
  public async getTranslatedText(word: Word): Promise<Word> {
    try {
      const translatedText = await translate(word.detectedText!, {
        from: `${word.detectedLanguage}`,
        to: `${word.targetLanguage}`,
      });
      word.targetText = translatedText;
      return word;
    } catch (err) {
      throw err;
    }
  }
}

export const translationService = new TranslationService();
