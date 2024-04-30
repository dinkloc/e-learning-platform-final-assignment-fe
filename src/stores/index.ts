import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import persistStore from "redux-persist/es/persistStore";

import { rootReducer } from "./reducers";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    },
    devTools: true,
});

export type PAppState = ReturnType<typeof rootReducer>;
export type PAppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    PAppState,
    unknown,
    Action<string>
>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<PAppState> = useSelector;

const persistor = persistStore(store);

export { persistor, store };