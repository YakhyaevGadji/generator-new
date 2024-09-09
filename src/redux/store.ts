import { configureStore } from '@reduxjs/toolkit'
import reduxSlice from "./reduxSlice.ts";

export const store = configureStore({
    reducer: {
        data: reduxSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;