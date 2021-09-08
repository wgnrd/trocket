import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Searchbar from './Searchbar';

test('renders searchbar', () => {
  render(
    <MockedProvider>
      <Searchbar />
    </MockedProvider>
  );
  const linkElement = screen.getByPlaceholderText('e.g. RU');
  expect(linkElement).toBeInTheDocument();
});
