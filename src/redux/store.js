import { configureStore } from '@reduxjs/toolkit';

import { persistedReducer } from './contacts/contactsSlice';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

export const persistor = persistStore(store);



// с мидлвеа middleware прослойка для проверки данных

// import { configureStore } from '@reduxjs/toolkit';

// import { persistedReducer } from './contacts/contactsSlice';
// import persistStore from 'redux-persist/es/persistStore';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
