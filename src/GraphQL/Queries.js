import { gql } from '@apollo/client';

export const GET_TOPLIST_DATA = gql`
  query {
    getTopCards {
      name
      age
      _id
    }
  }
`;
