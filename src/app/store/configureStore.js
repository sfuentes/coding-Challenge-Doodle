import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import rootReducer from './rootReducer';

export default function configureStore() {
    // Place for adding all that other Stuff like Dev Tools ect.

    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)));
}
