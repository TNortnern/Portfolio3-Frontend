import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createUploadLink } from "apollo-upload-client";
import Vue from "vue";
import VueApollo from "vue-apollo";
Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  link: createUploadLink({
    uri: "http://api-portfolio3.herokuapp.com/graphql",
  }),
  cache: new InMemoryCache(),
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export default apolloProvider