/**
 * @desc this file will cerate the context for the application
 * @author Vikram vikben@gmail.com
 */

import { createContext } from 'react';
import { IState, IContext } from '../interface/';

// context intial state
export const initialState: IState = {
  isLoading: false,
  hasError: false,
  errorMsg: '',
  graph: {
    graphData: [],
    height: 450
  },
  isPostLoading: false
};

export const contextState: IContext = {
  state: initialState,
  dispatch: () => {},
};

export const AppContext = createContext<IContext>(contextState);
