import loginReducer from '../features/signIn';
import userReducer from '../features/user'
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer
    }
});