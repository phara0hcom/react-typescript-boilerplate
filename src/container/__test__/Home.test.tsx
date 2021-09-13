import { render, screen } from '@testing-library/react';

import Home from '../Home';

describe('Home', () => {
  test('renders Home Container', () => {
    render(<Home />);

    expect(screen.getByText(/Home/)).toBeTruthy();
  });
});
