/**
 * Custom Redux Hooks
 * These hooks provide typed versions of useDispatch and useSelector
 * for better TypeScript support throughout the application
 */

import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
