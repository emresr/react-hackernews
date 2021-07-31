import { gql } from "@apollo/client";

const GET_TODAY = gql`
  {
    posts {
      id
      title
      author {
        email
        id
      }
    }
  }
`;
const GET_WEEK = gql`
  {
    posts {
      id
      title
      author {
        email
        id
      }
    }
  }
`;
const GET_MONTH = gql`
  {
    posts {
      id
      title
      author {
        email
        id
      }
    }
  }
`;

export { GET_TODAY, GET_WEEK, GET_MONTH };
