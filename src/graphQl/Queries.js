import { gql } from '@apollo/client';

// TODO: make launch limit variable
export const LOAD_LAUNCHES = gql`
  query {
    launchesPast(limit: 4) {
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
