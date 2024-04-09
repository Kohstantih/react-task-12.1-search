import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchSkilsSlice"
import createSagaMiddleware from "redux-saga";
import saga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(saga)
