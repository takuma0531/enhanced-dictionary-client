import { User } from "../user";

export interface Word {
  detectedText: string;
  definition: string;
  detectedLanguage: string;
  targetText: string;
  targetLanguage: string;
  count: number;
  isMemorized: boolean;
  dateMemorized: Date;
  user: string | User;
}
