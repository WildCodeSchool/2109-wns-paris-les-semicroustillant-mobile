import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'

const client = new ApolloClient({
	uri: 'http://localhost:5050/graphql',
	cache: new InMemoryCache(),
})

/* // Initialize Apollo Client
const client = new ApolloClient({
  // URI with Docker
  // uri: 'http://localhost:5050/graphql',
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
}); */

export default function App() {
	const isLoadingComplete = useCachedResources()
	const colorScheme = useColorScheme()

	if (!isLoadingComplete) {
		return null
	} else {
		return (
			<SafeAreaProvider>
				<ApolloProvider client={client}>
					<Navigation colorScheme={colorScheme} />
					<StatusBar />
				</ApolloProvider>
			</SafeAreaProvider>
		)
	}
}
