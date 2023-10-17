import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';

const middleware: any = [];

if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middleware.push(createDebugger());
}

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

export default store;
