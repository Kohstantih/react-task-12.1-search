import { debounce, put, retry, spawn, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST } from "../actions/actionsTypes";
import { searchSkillsRequest } from "../actions/actionsCreator";
import { searchSkills } from "../fetchs/searchSkills";
import { searchFailure, searchRun, searchSuccess as searchSuccess } from "../reducers/searchSkilsSlice";

function filterChangeSearchAction(action: PayloadAction<{search: string}>) {
    return action.type === CHANGE_SEARCH_FIELD && action.payload.search.trim() !== '';
}

function *handleChangeSearchSaga(action: PayloadAction<{search: string}>) {
    yield put(searchSkillsRequest(action.payload.search));
}

function* watchChangeSearchSaga() {
    yield debounce(300, filterChangeSearchAction, handleChangeSearchSaga);
}

function* handleSearchSkillsSaga(action: PayloadAction<{search: string}>) {
        yield put(searchRun());

    try {
        const retryCount = 3;
        const retryDelay = 1 * 1000;[]
        const data = yield retry(retryCount, retryDelay, searchSkills, action.payload.search);
        yield put(searchSuccess(data));
    } catch (error: unknown) {
        if ( error instanceof Error) {
            const { message } = error;
            yield put(searchFailure(message));
        }
        
    }
}

function* watchSearchSkillsSaga() {
    yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga);
}

export default function* saga() {
    console.log('saga run')
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchSkillsSaga)
}
