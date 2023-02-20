import loginReducer from '../features/signIn';
import userReducer from '../features/user'
import { configureStore } from '@reduxjs/toolkit';
import { authMiddleware } from '../features/signIn';





export default configureStore({
    reducer: {
        login: loginReducer,
        userAction: userReducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(authMiddleware)
});