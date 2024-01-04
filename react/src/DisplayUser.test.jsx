import React from 'react';
import { render } from '@testing-library/react';
import DisplayUser from './DisplayUser';

describe('DisplayUser', () => {
  test('renders without crashing with a username', () => {
    const { getByText } = render(<DisplayUser username={{ first: 'John', last: 'Doe' }} />);
    expect(getByText(/John Doe/)).toBeInTheDocument();
  });

  test('renders without crashing with null username', () => {
    const { getByText } = render(<DisplayUser username={null} />);
    expect(getByText(/No user selected/)).toBeInTheDocument();
  });
});
