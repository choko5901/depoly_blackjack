import { createSlice } from '@reduxjs/toolkit';


const finalSlice = createSlice({
    name: 'cardDeck',
    initialState: {value: []},
    reducers: {
      dealerFinalScores: (state, action) => {
        state.value[0] = action.payload;
      },
      myFinalScores: (state, action) => {
        state.value[1] = action.payload;
      },
    }
    
})

export default finalSlice;
export const { dealerFinalScores, myFinalScores } = finalSlice.actions;