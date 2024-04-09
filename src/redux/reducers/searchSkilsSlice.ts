import { createSlice } from "@reduxjs/toolkit";
import { TSearchState } from "../../types/TSearchState";

const initialState: TSearchState = {
    list: [],
    isLoading: false,
    error: null,
    search: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changeSearch: (state, action ) => {
            state.search = action.payload;
            if (!state.search) state.list = [];
        },
        searchRun: (state) => {
            state.isLoading = true;
        },
        searchSuccess: (state, action) => {
            state.isLoading = false;
            if (state.search) state.list = action.payload
            else state.list = []
        },
        searchFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
    },
})

export const {
    changeSearch,
    searchRun,
    searchSuccess: searchSuccess,
    searchFailure,
} = searchSlice.actions;

export default searchSlice.reducer
