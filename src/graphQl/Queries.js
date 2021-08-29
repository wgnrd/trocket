import { gql } from '@apollo/client';

export const LOAD_LAUNCHES = gql`
  query launchesPast($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_utc
      launch_site {
        site_name_long
        site_name
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`;

export const COUNTRY_BY_CODE = gql`
  query countryByCode($code: String!) {
    countries(where: { alpha3Code: { eq: "AUT" } }) {
      id
      name
    }
  }
`;
