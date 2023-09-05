import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 0, name: "Chipsy", count: 1, price: 8 },
  { id: 1, name: "Pepsi", "count": 1, price: 5 },
  { id: 2, name: "Molto", "count": 1, price: 3 },
  { id: 3, name: "Kranchy", "count": 1, price: 10 },
  { id: 4, name: "Cigarates", "count": 1, price: 30 },

]




export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // @ts-ignore
      state.value += 1
    },
    decrement: (state) => {
      // @ts-ignore
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      // @ts-ignore
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer