import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reviewsReducer from './features/reviews/reviewsSlice';
import {useSelector, TypedUseSelectorHook} from 'react-redux'

// Combine reducers into a root reducer
export const store = configureStore({
 reducer: {
  reviewsReducer
 }
  
  
});

// Configure the Redux store with the root reducer
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector