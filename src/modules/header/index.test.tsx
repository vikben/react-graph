import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './index';

test('renders header component', () => {
  // render component in router as header component
  render(
    <Router>
      <Header />
    </Router>
  );

  // application logo
  const searchButton = screen.getByText('KONUX');
  expect(searchButton).toBeInTheDocument();
});
