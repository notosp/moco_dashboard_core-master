import authAction from '../stores/actions/auth';

export default {
    login: async (params) => {
        authAction.setAuth(params);
        return params;
    },
    logout: () => {
        authAction.clearAuth();
        return Promise.resolve();
    }
};