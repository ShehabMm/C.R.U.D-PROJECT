import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../Redux/mydataSlice"

export const store = configureStore({
  reducer: {

    counter: counterReducer
  },
})