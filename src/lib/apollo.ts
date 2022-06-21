import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl4opform0ln201xx79ic3fg4/master',
	cache: new InMemoryCache(),
});
