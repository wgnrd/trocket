import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App with header', () => {
  render(<App />);
  const linkElement = screen.getByText(/GraphQL Country Client/i);
  expect(linkElement).toBeInTheDocument();
});
