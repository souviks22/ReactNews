import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    newsData: [],
    isNewsEnd: false,
    isLoading: false,
    isMoreLoading: false,
    loadingError: null
  },
  reducers: {
    request(state, action) {
      if (action.payload.page === 1) {
        state.isLoading = true
      } else {
        state.isMoreLoading = true
      }
    },
    success(state, action) {
      state.newsData.push(...action.payload.articles)
      state.loadingError = null
      state.isLoading = false
      state.isMoreLoading = false
    },
    failure(state, action) {
      state.loadingError = action.payload.error
      state.isLoading = false
      state.isMoreLoading = false
    },
    endNews(state) {
      state.isNewsEnd = true
      state.isLoading = false
      state.isMoreLoading = false
    }
  }
})

export const newsReducer = newsSlice.reducer
export const newsActions = newsSlice.actions