import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser, LoginRequest } from "../../../types/auth";
import AuthService from "../../../services/auth.service";
import { PersistConfig } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";

export interface AuthState {
    token: string;
    isLoggedIn: boolean;
    user: IUser | null;
}

const initialState: AuthState = {
    token: '',
    isLoggedIn: false,
    user: null,
};

export const login = createAsyncThunk(
    'auth/login',
    async (params: LoginRequest, thunkAPI) => {
        try {
            const data = await AuthService.login(params);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth() { },
        setIsLogin: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoggedIn = false;
                state.user = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                const { token, user } = action.payload.data
                state.token = token;
                state.user = user;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, (state) => {
                state.isLoggedIn = false;
                state.user = null;
            });
    }
})

export const persistConfig: PersistConfig<AuthState> = {
    key: 'auth',
    storage,
    whitelist: [],
};
export const authReducer = persistReducer(persistConfig, authSlice.reducer);
export const authActions = authSlice.actions;
