import { Dispatch, useReducer, useContext, createContext } from 'react';

import { initialState, InitialState } from './initial-state';
import { Action, reducer } from './reducers';

type ContextTypes = {
  state: InitialState;
  dispatch: Dispatch<Action>;
};

export const AppState = createContext({} as ContextTypes);

export const useAppState = () => useContext(AppState);

export const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <AppState.Provider value={value}>{children}</AppState.Provider>;
};
