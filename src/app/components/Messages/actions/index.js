import Api from '../../../services/apiWrapper';
import {ALL_MESSAGES_SUCCESS} from '../../App/constants';

const api = new Api({});

const allMessagesLoaded = (messages) => ({
    type: ALL_MESSAGES_SUCCESS,
    messages
});


export const fetchAllMessages = () => dispatch => new Promise((resolve) => {

    api.get({}).then((res) => {
        console.log(res.data)
        dispatch(allMessagesLoaded(res.data));
        resolve(res.data);

    }).catch((err) => {
        console.error(err); // eslint-disable-line

    });
});
