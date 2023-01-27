import loginReducer from '../features/signIn';
import { configureStore } from '@reduxjs/toolkit';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default configureStore({
    reducer: {
        login: loginReducer
    }
}, reduxDevtools);