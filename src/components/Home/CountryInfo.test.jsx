import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import CountryInfo from './CountryInfo';

test('renders countryInfo', () => {
  render(
    <MockedProvider>
      <CountryInfo />
    </MockedProvider>
  );
  const element = screen.getByText('Loading country info');
  expect(element).toBeInTheDocument();
});
