/**
 * @desc this file contains the interface for the application
 * @author Vikram vikben@gmail.com
 */

// context interface
export interface IContext {
  state: IState;
  dispatch: React.Dispatch<any>;
}

// reducer state interface
export interface IState {
  isLoading: boolean;
  hasError: boolean;
  errorMsg: string;
  graph: {
    graphData: GraphData[];
    height: number;
    width?: number;
  };
  isPostLoading: boolean;
}

// graph data interface
export interface GraphData extends IObjectKeys {
  min: number;
  max: number;
  avg: number;
  x: string | null;
}

interface IObjectKeys {
  [key: string]: any;
}
