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

};

const initialStateUser = {
    key: ''
};

const user = (state = initialStateUser, action) => {

};

export default combineReducers({
        messages,
        user
    }
);

