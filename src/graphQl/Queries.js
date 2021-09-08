import { gql } from '@apollo/client';

export const COUNTRY_BY_CODE = gql`
  query countryByCode($code: String!) {
    countries(where: { alpha2Code: { eq: $code } }) {
      id
      name
    }
  }
`;

export const CLIENT_COUNTRY_CODE = gql`
  query {
    client {
      ipAddress {
        country {
          alpha2Code
        }
      }
    }
  }
`;
