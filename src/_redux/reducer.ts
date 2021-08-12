import { LoadingProviderState } from './types';
import { DISABLE_LOADING_ACTION, ENABLE_LOADING_ACTION } from './actions';

export const initialState: LoadingProviderState = {
  loadingAreas: [],
};

type ActionsType = {
  type: string;
  payload?: string;
};

export const loadingProviderReducer = (state: LoadingProviderState = initialState, { type, payload }: ActionsType): LoadingProviderState => {
  switch (type) {
    case ENABLE_LOADING_ACTION:
      return {
        ...state,
        loadingAreas: [...state.loadingAreas, payload as string],
      };
    case DISABLE_LOADING_ACTION:
      return {
        ...state,
        loadingAreas: state.loadingAreas.filter(area => area !== payload),
      };
    default:
      return state;
  }
};
