import { render, screen, fireEvent } from '@testing-library/react';
import DisplayUser from './DisplayUser';

describe('DisplayUser component', () => {
  test('renders "No user selected" when username state has empty first and last properties', () => {
    render(<DisplayUser />);
    const clearButton = screen.getByRole('button', { name: /clear name/i });
    fireEvent.click(clearButton);
    const noUserText = screen.getByText(/no user selected/i);
    expect(noUserText).toBeInTheDocument();
  });

  test('clears username state when the clear button is clicked', () => {
    render(<DisplayUser />);
    const clearButton = screen.getByRole('button', { name: /clear name/i });
    fireEvent.click(clearButton);
    const firstName = screen.queryByText(/firstname:/i);
    const lastName = screen.queryByText(/lastname:/i);
    expect(firstName).not.toBeInTheDocument();
    expect(lastName).not.toBeInTheDocument();
  });
});
