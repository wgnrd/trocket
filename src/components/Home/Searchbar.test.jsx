import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar';

test('renders searchbar', () => {
  render(<Searchbar />);
  const linkElement = screen.getByPlaceholderText('Top level domain');
  expect(linkElement).toBeInTheDocument();
});
