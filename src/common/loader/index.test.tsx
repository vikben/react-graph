import { render } from '@testing-library/react';

import Loading from './index';

describe('Loading component', () => {
  test('When loader is true', () => {

    // render component
    const { container } = render(<Loading />);
    const loader = container.querySelector('.loader');
    expect(loader).toBeInTheDocument();
  });

});
