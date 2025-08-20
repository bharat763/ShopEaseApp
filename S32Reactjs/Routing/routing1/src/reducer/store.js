
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import {  persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
  whitelist:["auth"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
 const store =configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', ],
          ignoredPaths:['register'],
        },
      }),
});
let persistor = persistStore(store)
export{store,persistor}