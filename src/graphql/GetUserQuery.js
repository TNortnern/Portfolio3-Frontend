import gql from "graphql-tag";

const getUser = gql`
  query getUser($token: String!) {
    getUser(token: $token) {
      id
      email
    }
  }
`;

export default getUser