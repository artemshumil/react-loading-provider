type Action<T> = (payload: T) => {
  type: string;
  payload: T;
};

export const ENABLE_LOADING_ACTION = 'ENABLE_LOADING_ACTION';
export const enableLoadingAction: Action<string> = payload => ({
  type: ENABLE_LOADING_ACTION,
  payload,
});

export const DISABLE_LOADING_ACTION = 'DISABLE_LOADING_ACTION';
export const disableLoadingAction: Action<string> = payload => ({
  type: DISABLE_LOADING_ACTION,
  payload,
});
