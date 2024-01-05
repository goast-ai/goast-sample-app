import React from 'react';
import { render } from '@testing-library/react';
import DisplayUser from './DisplayUser';

describe('DisplayUser', () => {
  test('renders without crashing when username is null', () => {
    const { container } = render(<DisplayUser username={null} />);
    expect(container).toBeTruthy();
  });

  test('displays correct message when there is no user', () => {
    const { getByText } = render(<DisplayUser username={null} />);
    expect(getByText('No user selected')).toBeInTheDocument();
  });
});
