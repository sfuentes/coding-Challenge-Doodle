import Api from '../../../services/apiWrapper';
import {ALL_MESSAGES_LOADED} from '../../App/constants';

const api = new Api({});

const allMessagesLoaded = (messages) => ({
    type: ALL_MESSAGES_LOADED,
    messages
});


export const fetchAllMessages = () => dispatch => new Promise((resolve) => {

    api.get({}).then((res) => {
        dispatch(allMessagesLoaded(res.data));
        resolve(res.data);

    }).catch((err) => {
        console.error(err); // eslint-disable-line

    });
});
