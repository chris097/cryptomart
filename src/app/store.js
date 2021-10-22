import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../service/CryptoApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
}); 