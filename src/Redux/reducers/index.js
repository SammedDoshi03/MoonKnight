import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { starredMessageReducer } from './starredMessagesReducer';
import { replyReducer } from './replyReducer';

export const rootReducer = combineReducers({
    starredMessageReducer,
    replyReducer
});