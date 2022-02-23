import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import Constants from 'expo-constants'
const { manifest } = Constants

// to get ip address from phone's network
const api =
	typeof manifest?.packagerOpts === `object` && manifest.packagerOpts.dev
		? manifest?.debuggerHost?.split(`:`).shift()
		: `api.example.com`

const client = new ApolloClient({
	//#docker
	//uri: 'http://localhost:5050/graphql',
	//#local
	//uri: 'http://localhost:4000/graphql',
	//#phone
	uri: `http://${api}:5050/graphql`,
	cache: new InMemoryCache(),
})

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
