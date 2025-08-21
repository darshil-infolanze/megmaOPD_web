import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice'
import businessReducer from "./features/businessSlice"
import formReducer from "./features/formSlice"

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['auth']
};

const rootReducer = combineReducers({
    auth : authReducer,
    business: businessReducer,
    form:formReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);