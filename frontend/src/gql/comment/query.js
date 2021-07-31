import { gql } from "@apollo/client";

const GET_COMMENTS = gql`
   query GetComments {
      comments {
         id
         text
         post {
            id
            title
         }
         user {
            id
            name
         }
         comments {
            id
            text
         }
      }
   }
`;
const GET_COMMENT = gql`
   query GetComment($id: ID!) {
      comment(id: $id) {
         id
         text
         post {
            id
            title
         }
         user {
            id
            name
         }
         comments {
            id
            text
         }
      }
   }
`;
export { GET_COMMENTS, GET_COMMENT };
