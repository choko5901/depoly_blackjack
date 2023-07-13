import { createSlice } from '@reduxjs/toolkit';


const cardSlice = createSlice({
    name: 'cardDeck',
    initialState: {value: [{
      mark : "",
      card : ""
    }]},
    reducers: {
      initCardDecks: (state, action) => {
        state.value = action.payload;
      }
    }
    
})

export default cardSlice;
export const { initCardDecks } = cardSlice.actions;

