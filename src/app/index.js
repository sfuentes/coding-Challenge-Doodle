import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import configureStore from './store/configureStore'

const store = configureStore();

render(
    <Provider store={store}>
        Initial Title
        <App />
    </Provider>,
    document.getElementById('root')
);
