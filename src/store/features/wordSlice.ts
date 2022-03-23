import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  wordService,
  definitionService,
  translationService,
} from "@/services/http";
import { Word } from "@/typings/models/word";
import { AsyncThunkTypeWord } from "@/enums/asyncThunkType";

interface WordState {
  word: Word;
  allWords: Word[];
  wordsForMemoryGame: Word[] | null;
}

const initialState: WordState = {
  word: {},
  allWords: [],
  wordsForMemoryGame: null,
};

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    updateWordState: (state: WordState, action: PayloadAction<Word>) => {
      state.word = action.payload;
    },
    updateAllWords: (state: WordState, action: PayloadAction<Word[]>) => {
      state.allWords = action.payload;
    },
    updateWordsForMemoryGame: (
      state: WordState,
      action: PayloadAction<Word[]>
    ) => {
      state.wordsForMemoryGame = action.payload;
    },
  },
});

export const { updateWordState, updateAllWords, updateWordsForMemoryGame } =
  wordSlice.actions;

// TODO: Error handling later
const thunkFunctions = {
  registerWord: createAsyncThunk(
    AsyncThunkTypeWord.REGISTER_WORD,
    async (word: Word) => {
      await wordService.registerWord(word);
    }
  ),
  getAllWords: createAsyncThunk(
    AsyncThunkTypeWord.GET_ALL_WORDS,
    async (arg: void, { dispatch }) => {
      const words = await wordService.getAllWords();
      if (words) dispatch(updateAllWords(words));
    }
  ),
  getWordsForMemoryGame: createAsyncThunk(
    AsyncThunkTypeWord.GET_WORDS_FOR_MEMORY_GAME,
    async (numberOfpairs: number, { dispatch }) => {
      const words = await wordService.getWordsForMemoryGame(numberOfpairs);
      if (words) dispatch(updateWordsForMemoryGame(words));
    }
  ),
  updateWord: createAsyncThunk(
    AsyncThunkTypeWord.UPDATE_WORD,
    async (word: Word, { dispatch }) => {
      const updatedWord = await wordService.updateWord(word);
      dispatch(updateWordState(updatedWord));
    }
  ),
  incrementCountOfWordsPlayed: createAsyncThunk(
    AsyncThunkTypeWord.INCREMENTING_COUNT_OF_WORD_PLAYED,
    async (word: Word) => {
      await wordService.incrementCountOfWordPlayed(word);
    }
  ),
  refreshCountOfWordPlayed: createAsyncThunk(
    AsyncThunkTypeWord.REFRESHING_COUNT_OF_WORD_PLAYED,
    async (wordId: string) => {
      await wordService.refreshCountOfWordPlayed(wordId);
    }
  ),
  deleteWord: createAsyncThunk(
    AsyncThunkTypeWord.DELETE_WORD,
    async (wordId: string) => {
      await wordService.deleteWord(wordId);
    }
  ),
  searchWord: createAsyncThunk(
    AsyncThunkTypeWord.SEARCH_WORD,
    async (word: Word, { dispatch }) => {
      let updatedWord: Word;
      updatedWord = await definitionService.getDefinitionOfWord(word);
      updatedWord = await translationService.getTranslatedText(updatedWord);
      dispatch(updateWordState(updatedWord));
    }
  ),
};

export const {
  registerWord,
  getAllWords,
  getWordsForMemoryGame,
  updateWord,
  incrementCountOfWordsPlayed,
  refreshCountOfWordPlayed,
  deleteWord,
  searchWord,
} = thunkFunctions;

export const selectWord = (state: RootState) => state.word;

export default wordSlice.reducer;
