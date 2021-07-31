import { gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation PostMutation($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      id
      title
    }
  }
`;

const EDIT_POST = gql`
  mutation EditPost($title: String!, $content: String!, $id: ID!) {
    updatePost(title: $title, content: $content, id: $id) {
      id
    }
  }
`;
export { CREATE_POST, EDIT_POST };
