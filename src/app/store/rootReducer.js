import {combineReducers} from 'redux';

const message = {
    id : 0,
    content: '',
    userKey: ''
};

const initialStateMessages = {
    list : [],
    knownUsers : {},
};

const messages = (state = initialStateMessages, action) => {
    switch (action.type) {
        default :
            return state;
    }
};

const initialStateUser = {
    key: ''
};

const user = (state = initialStateUser, action) => {
    switch (action.type) {
        default :
            return state;
    }
};

export default combineReducers({
        messages,
        user
    }
);

