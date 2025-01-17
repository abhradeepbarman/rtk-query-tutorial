import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./api";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (defaultMiddlware) => defaultMiddlware().concat(postsApi.middleware),
});
