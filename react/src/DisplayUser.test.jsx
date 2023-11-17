import { render, screen } from '@testing-library/react';
import DisplayUser from './DisplayUser';

test('displays "No user selected" when username is null', () => {
  render(<DisplayUser username={null} />);
  expect(screen.getByText('No user selected')).toBeInTheDocument();
});
