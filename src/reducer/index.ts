/**
 * @desc this files contains reducer for home component
 * @author Vikram vikben@gmail.com
 */

import { IState } from '../interface/';

const LOADING = 'LOADING';
const POST_LOADING = 'POST_LOADING';
const SET_DATA = 'SET_DATA';
const ADD_NEW_DATA = 'ADD_NEW_DATA';

export const reducer = (
  state: IState,
  action: { type: string; payload: any }
) => {
  const newState = { ...state };
  switch (action.type) {
    case LOADING: {
      newState.isLoading = action.payload;
      return newState;
    }
    case POST_LOADING: {
      newState.isPostLoading = action.payload;
      return newState;
    }
    case SET_DATA: {
      newState.graph.graphData = action.payload;
      return newState;
    }
    case ADD_NEW_DATA: {
      // I dont need to clone on each step if I use external library for deep clone or JSON.stringify
      const cloneObj = { ...newState.graph };
      const cloneArray = [...cloneObj.graphData];
      cloneArray.unshift(action.payload);
      newState.graph.graphData = cloneArray;
      newState.graph = cloneObj;
      return newState;
    }
    default:
      return newState;
  }
};
