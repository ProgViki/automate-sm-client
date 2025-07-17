import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authReducer from '../features/auth/authSlice'
import notificationReducer from '../features/notification/notificationSlice'
import { authApi } from '../api/authApi'
import { projectApi } from '../api/projectApi'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notification: notificationReducer,
    [authApi.reducerPath]: authApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    // Add other APIs here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      projectApi.middleware,
      // Add other API middlewares here
    ),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch