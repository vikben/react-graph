import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import { AppContext, contextState } from '../../context';
import Home from './index';

let initialState;
beforeEach(() => {
  initialState = JSON.parse(JSON.stringify(contextState));
});

afterEach(cleanup);

test('loading flag is true then render loading component', () => {
  // render component
  initialState.state.isLoading = true;
  const { container } = render(
    <AppContext.Provider value={initialState}>
      <Home />
    </AppContext.Provider>
  );

  const loader = container.querySelector('.loader');
  expect(loader).toBeInTheDocument();
});

test('has error flag is true then render error message', () => {
  // render component
  initialState.state.hasError = true;
  initialState.state.errorMsg = 'Something went wrong!';
  render(
    <AppContext.Provider value={initialState}>
      <Home />
    </AppContext.Provider>
  );

  const errorText = screen.getByText('Something went wrong!');
  expect(errorText).toBeInTheDocument();
});

test('render form elements and grapn components', () => {
  // render component
  render(
    <AppContext.Provider value={initialState}>
      <Home />
    </AppContext.Provider>
  );

  const dateSelector = screen.getByLabelText('Select date*');
  expect(dateSelector).toBeInTheDocument();

  const maxTextFiled = screen.getByLabelText('Max*');
  expect(maxTextFiled).toBeInTheDocument();

  const minTextFiled = screen.getByLabelText('Min*');
  expect(minTextFiled).toBeInTheDocument();

  const addButton = screen.getByRole('button', {
    name: /Add/i,
  });
  expect(addButton).toBeInTheDocument();
});
