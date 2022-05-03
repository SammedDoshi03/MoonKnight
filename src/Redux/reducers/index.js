import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { starredMessageReducer } from './starredMessagesReducer';

export const rootReducer = combineReducers({
    starredMessageReducer
});