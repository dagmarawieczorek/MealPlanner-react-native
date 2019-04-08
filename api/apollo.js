import ApolloClient from "apollo-boost";
import { createNetworkInterface } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
const GRAPHQL_ENDPOINT = `https://myfancyappname.herokuapp.com/v1alpha1/graphql`;

let instance = null;
let httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
})

let authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: this.token ? `Bearer ${this.token}` : '',
    },
  }
})

class ApiClient {

    constructor() {
        if (!instance) {
              this.client = new ApolloClient({
                link: authLink.concat(httpLink),
                cache: new InMemoryCache()
              });
        }

        return instance;
    }

    setToken(token) {
        this.token = token;
    }

    getClient() {
      console.log("!!!!" + this.client);
      return this.client;
    }
}

export default ApiClient;
