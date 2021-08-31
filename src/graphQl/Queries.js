import { gql } from '@apollo/client';

export const COUNTRY_BY_CODE = gql`
  query countryByCode($code: String!) {
    countries(where: { alpha2Code: { eq: $code } }) {
      id
      name
    }
  }
`;
