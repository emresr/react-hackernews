import { gql } from "@apollo/client";

const GET_POSTS = gql`
  {
    posts {
      id
      title
      author {
        email
        id
      }
      comments{comments{text}}
    }
  }
`;

const GET_POST = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
      author {
        email
      }
      comments{id}
    }
  }
`;

export { GET_POSTS, GET_POST };
