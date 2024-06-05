import { configureStore } from '@reduxjs/toolkit';
import { articlesApi, persistedArticlesApiReducer } from './articles';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: persistedArticlesApiReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(articlesApi.middleware),
});

export const persistor = persistStore(store);
