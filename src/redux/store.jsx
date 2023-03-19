import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './slicer';
import { api } from './api';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { contactsReducer, filterSlice } from './slicer';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterSlice.reducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    api.middleware,
  ],
});
