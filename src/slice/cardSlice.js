import { createSlice } from '@reduxjs/toolkit';


const cardSlice = createSlice({
    name: 'cardDeck',
    initialState: {value: [{
      mark : "",
      card : ""
    }]},
    reducers: {
      initCardDeck: (state, action) => {
        state.value = action.payload;
      }
    }
    
})

export default cardSlice;
export const { initCardDeck} = cardSlice.actions;

