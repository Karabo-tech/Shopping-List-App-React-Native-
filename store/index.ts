/**
 * Redux Store Configuration
 * This file configures the Redux store with Redux Toolkit and Redux Persist
 * for state persistence across app sessions using AsyncStorage
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import shoppingListReducer from './slices/shoppingListSlice';

// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

// Combine all reducers
const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for Redux Persist
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
      },
    }),
});

// Create the persistor for the store
export const persistor = persistStore(store);

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
