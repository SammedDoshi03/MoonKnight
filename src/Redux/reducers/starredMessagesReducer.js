import { ActionTypes } from "../constants/action-types";

const initialState = {
    starredMessages: [{
        id: 1,
        name: 'John Doe',
        profile: require('../../assests/demo.png'),
        message: "Someting"
    }, ]
};

export const starredMessageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_STARRED_MESSAGES:
            if (state.starredMessages.find(starredMessages => starredMessage.id === payload.id)) {
                return state;
            }
            return {...state, starredMessages: [...state.starredMessages, payload] };

        case ActionTypes.REMOVE_STARRED_MESSAGES:
            return {...state,
                articles: removeStarredMessages(state.starredMessages, payload)
            };
        default:
            return state;
    }
}

const removeStarredMessages = (starredMessages, payload) => {
    return starredMessages.filter(starredMessage => starredMessage.id !== payload.id);
}