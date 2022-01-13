import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import PageNotFound from './index';

describe('PageNotFound component', () => {
  test('When no router is present', () => {
    // render component
    render(
      <Router>
        <PageNotFound />
      </Router>
    );

    const pageNotFoundText = screen.getByText('Page Not Found.');
    expect(pageNotFoundText).toBeInTheDocument();

    const homePageLink = screen.getByText('Home');
    expect(homePageLink).toBeInTheDocument();
  });
});
