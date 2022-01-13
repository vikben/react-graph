
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { AppContext, contextState } from '../../context';
import Graph from './index';

let initialState;
beforeEach(() => {
  initialState = JSON.parse(JSON.stringify(contextState));
});

jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
      ...OriginalModule,
      ResponsiveContainer: ({ height, children }) => (
          <OriginalModule.ResponsiveContainer width={100} height={height}>
              {children}
          </OriginalModule.ResponsiveContainer>
      ),
  };
});

test('when no graph data found', () => {

  // render component
  render(
    <AppContext.Provider value={initialState}>
      <Graph />
    </AppContext.Provider>
  );

  const searchButton = screen.getByText('No Graph data found');
  expect(searchButton).toBeInTheDocument();
});

test('render graph', async () => {
    initialState.state.graph.graphData = [{ "x": "2021-12-13T15:26:43.689Z", "avg": 27, "min": 19, "max": 27 }];
    const { debug, container } = render(
      <AppContext.Provider value={initialState}>
                <Graph />
      </AppContext.Provider>
    );
    
    await waitFor(() => {
      const bars = container.querySelector(".recharts-surface");
      expect(bars).toBeInTheDocument();
    });

  });