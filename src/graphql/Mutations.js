import gql from "graphql-tag";

export const addProject = gql`
  mutation(
    $name: String!
    $description: String!
    $projectType: String!
    $technologies: [String]!
    $links: [String]!
    $importance: Int
    $images: [Upload!]!
  ) {
    addProject(
      name: $name
      description: $description
      projectType: $projectType
      technologies: $technologies
      links: $links
      importance: $importance
      images: $images
    ) {
      id
      name
      technologies {
        name
        image
      }
      images
      links {
        codeLink
        hostedLink
      }
    }
  }
`;

export const addTechnology = gql`
  mutation($name: String!, $description: String!, $image: Upload!) {
    addTechnology(name: $name, description: $description, image: $image) {
      id
      name
      description
      image
    }
  }
`;

export const deleteProject = gql`
  mutation($id: ID!) {
    deleteProject(id: $id) {
      id
      name
    }
  }
`;

export const deleteTechnology = gql`
  mutation($id: ID!) {
    deleteTechnology(id: $id) {
      id
      name
    }
  }
`;
