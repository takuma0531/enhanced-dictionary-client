import { User } from "../user";

export interface Word {
  id?: string;
  detectedText?: string;
  definition?: string;
  detectedLanguage?: string;
  targetText?: string;
  targetLanguage?: string;
  count?: number;
  isMemorized?: boolean;
  dateMemorized?: Date;
  user?: string | User;
}

export interface WordCard {
  id: string;
  orderId: number;
  text: string;
}

export interface LanguageInfo {
  value: string;
  language: string;
}
