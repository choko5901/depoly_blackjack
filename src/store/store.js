import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../slice/cardSlice";
import  finalSlice  from "../slice/scoreSlice";
const store = configureStore({
        reducer: {
            initCardDeck : cardSlice.reducer,
            finalScore : finalSlice.reducer
        }
    }
);

export default store;