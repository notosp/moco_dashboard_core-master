import * as ActionType from '../action-type';

const STORAGE = 'state_auth';
const initState = {}

const initializeState = () => {
    const auth = localStorage.getItem(STORAGE);
    const state = auth ? JSON.parse(auth) : initState;
    return state;
}

const reducer = (state = initializeState(), action) => {
    const { type, value } = action;
    switch (type) {
        case ActionType.AUTH_SET:
            localStorage.setItem(STORAGE, JSON.stringify(value));
            return { ...value };
        case ActionType.AUTH_CLEAR:
            localStorage.removeItem(STORAGE);
            return {}
        default:
            return state;
    }
}

export default reducer;
