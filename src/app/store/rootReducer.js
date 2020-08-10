import {combineReducers} from 'redux';
import {ALL_MESSAGES_LOADED, SET_USER_NAME} from '../components/App/constants';
import DateTime from 'luxon/src/datetime.js'

// Will be refactored later on

const message = {
    id : 0,
    content: '',
    userKey: ''
};

const initialStateMessages = {
    lastUpdated : null,
    list : [],
    knownUsers : {},
};

const messages = (state = initialStateMessages, action) => {
    switch (action.type) {
        case ALL_MESSAGES_LOADED:

            console.log(action.messages);
            state.lastUpdated = DateTime.local().toISO();

            return {...state};
        default :
            return state;
    }
};

const initialStateUser = {
    name: ''
};

const user = (state = initialStateUser, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            state.name = action.name;
            return {...state};
        default :
            return state;
    }
};

export default combineReducers({
        messages,
        user
    }
);

