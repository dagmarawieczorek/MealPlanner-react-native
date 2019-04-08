import gql from 'graphql-tag';

export const AUTHORIZE = gql`
mutation authorize($username: String!, $password: String!) {
    authorize (input: {
      username: $username
      password: $password
    }) {
      idToken
    }
  }
`;