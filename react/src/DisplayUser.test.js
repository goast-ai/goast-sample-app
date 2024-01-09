import React from 'react';
import { render, screen } from '@testing-library/react';
import DisplayUser from './DisplayUser';

describe('DisplayUser', () => {
  test('displays "No user selected" when the username state is null', () => {
    render(<DisplayUser user={null} />);
    expect(screen.getByText('No user selected')).toBeInTheDocument();
  });
});
