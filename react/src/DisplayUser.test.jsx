it('displays "No user selected" when username is null', () => {
  render(<DisplayUser username={null} />);
  expect(screen.getByText('No user selected')).toBeInTheDocument();
});
