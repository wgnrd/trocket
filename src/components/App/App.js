import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import Home from '../Home/Home';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.error(`GraphQl error ${message}`);
      return null;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: `https://api.everbase.co/graphql?apikey=${process.env.REACT_APP_EVERBASE_API_KEY}`,
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>GraphQL Country Client</h1>
      <Home />
    </ApolloProvider>
  );
}

export default App;
