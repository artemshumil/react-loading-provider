import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { LOADING_PROVIDER_REDUCER_NAME } from './constants';
import { LoadingProviderState, LoadingProviderStatePart } from './types';

export const LoadingProviderStateSelector = (store: LoadingProviderStatePart) =>
  store[LOADING_PROVIDER_REDUCER_NAME] || initialState;

export const getCurrentAreaLoading = createSelector(
  [LoadingProviderStateSelector, (state, area: string) => area],
  ({ loadingAreas }: LoadingProviderState, area) => loadingAreas.includes(area),
);
