import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/es/storage';
import { authReducer } from "./slices/auth";


export const rootReducer = combineReducers({
    auth: persistReducer({
        key: "auth",
        storage,
        whitelist: ['token', 'isLoggedIn', 'user']
    },
        authReducer),
});