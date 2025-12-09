import { configureStore } from "@reduxjs/toolkit";
import ventesReducer from './venteSlice'

export const store = configureStore(
    {
        reducer:{
            ventes : ventesReducer,
        }
    }
)