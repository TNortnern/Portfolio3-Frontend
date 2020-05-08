import gql from "graphql-tag";

export default gql`
  query Project($id: ID!) {
    project(id: $id) {
      id
      name
      description
      images
      links {
        codeLink
        hostedLink
      }
      projectType
      importance
      technologies {
        id
        name
      }
    }
  }
`;
