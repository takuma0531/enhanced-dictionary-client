export enum AsyncThunkTypeUser {
  REGISTER_USER = "user/registerUser",
  LOGIN_USER = "user/loginUser",
  GET_USER = "user/getUser",
  CHECK_AUTH = "user/checkAuth",
}

export enum AsyncThunkTypeWord {
  REGISTER_WORD = "word/registerWord",
  GET_ALL_WORDS = "word/getAllWords",
  GET_WORDS_FOR_MEMORY_GAME = "word/getWordsForMemoryGame",
  UPDATE_WORD = "word/updateWord",
  INCREMENTING_COUNT_OF_WORD_PLAYED = "word/incrementCountOfWordPlayed",
  REFRESHING_COUNT_OF_WORD_PLAYED = "word/refreshCountOfWordPlayed",
  DELETE_WORD = "word/deleteWord",
  SEARCH_WORD = "word/searchWord",
}
