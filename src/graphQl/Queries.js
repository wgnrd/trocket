import { gql } from '@apollo/client';

export const COUNTRY_BY_CODE = gql`
  query countryByCode($code: String!) {
    countries(where: { alpha2Code: { eq: $code } }) {
      id
      name
      population
      capital {
        name
      }
      continent {
        name
      }
      currencies {
        id
        name
        unitSymbols
      }
      languages {
        id
        name
      }
    }
  }
`;

// we query the country of the client and also get
// all available alpha2Codes to facilitate the autocomplete
export const CLIENT_COUNTRY_CODE = gql`
  query {
    client {
      ipAddress {
        country {
          alpha2Code
        }
      }
    }
    countries {
      id
      alpha2Code
    }
  }
`;
