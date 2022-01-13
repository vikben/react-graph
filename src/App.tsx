/**
 * @desc this component contains Routes for the application
 * @author Vikram vikben@gmail.com
 */

import React, { useReducer, Reducer, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import { AppContext, initialState } from './context/';
import { reducer } from './reducer/';

import Loading from './common/loader';

import Header from './modules/header';
import Home from './modules/home';

// load component when required
const PageNotFound = React.lazy(() => import('./modules/404page'));

function App() {
  const [state, dispatch] = useReducer<Reducer<any, any>>(
    reducer,
    initialState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
