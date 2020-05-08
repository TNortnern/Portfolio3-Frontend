import gql from 'graphql-tag'

export default gql`
{
    projects {
        id
        name
        images
        technologies {
            name
        }
    }
}
`