import Api from '../../../services/apiWrapper';
import {SEND_MESSAGE_SUCCESS} from '../../App/constants';
import {fetchAllMessages} from '../../Messages/actions';

const api = new Api({});

const messageSendSuccess = () => ({
    type: SEND_MESSAGE_SUCCESS
});


export const sendMessage = (message) => (dispatch, getState) => new Promise((resolve) => {

    const {name} = getState().user;

    api.post({
        headers: {'content-type': 'application/json'},
        data: {author: name || 'test', message: message}
    }).then((res) => {
        dispatch(messageSendSuccess(res.data));
        dispatch(fetchAllMessages());
        resolve(res.data);

    }).catch((err) => {
        console.error(err); // eslint-disable-line

    });
});
