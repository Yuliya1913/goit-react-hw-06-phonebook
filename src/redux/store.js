import { configureStore } from '@reduxjs/toolkit';

import { persistedReducer } from './contacts/contactsSlice';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

export const persistor = persistStore(store);
