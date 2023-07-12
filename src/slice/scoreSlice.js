import { createSlice } from '@reduxjs/toolkit';


const finalSlice = createSlice({
    name: 'cardDeck',
    initialState: {value: []},
    reducers: {
      dealerFinalScore: (state, action) => {
        state.value[0] = action.payload;
      },
      myFinalScore: (state, action) => {
        state.value[1] = action.payload;
      },
    }
    
})

export default finalSlice;
export const { dealerFinalScore, myFinalScore } = finalSlice.actions;