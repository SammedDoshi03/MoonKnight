import { ActionTypes } from "../constants/action-types";

export const setStarredMessages = (starredMessages) => {
    return {
        type: ActionTypes.SET_STARRED_MESSAGES,
        payload: starredMessages,
    }
};

export const removeStarredMessages = (starredMessages) => {
    return {
        type: ActionTypes.REMOVE_STARRED_MESSAGES,
        payload: starredMessages,
    }
}