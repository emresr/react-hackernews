import { gql } from "@apollo/client";

const GET_USER_POSTS = gql`
   query UserPosts($id: ID!) {
      user(id: $id) {
         id
         karma
         about
         email
         createdAt
         posts {
            id
            title
            content
         }
      }
   }
`;
const GET_USER_INFO = gql`
   query UserInfo($id: ID!) {
      user(id: $id) {
         email
         likes
         posts {
            id
         }
      }
   }
`;
const CHECK_TOKEN = gql`
   query CheckToken($token: String!) {
      checkToken(token: $token) {
         id
      }
   }
`;
export { GET_USER_POSTS, GET_USER_INFO, CHECK_TOKEN };
