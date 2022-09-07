import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useEffect, useState } from 'react'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import Constants from 'expo-constants'
const { manifest } = Constants
import AsyncStorage from '@react-native-async-storage/async-storage'

// to get ip address from phone's network
const api =
	typeof manifest?.packagerOpts === `object` &&
	manifest.packagerOpts.dev &&
	manifest?.debuggerHost?.split(`:`).shift()

const httpLink = createHttpLink({
	uri: `http://${api}:4000/graphql`,
})

const authLink = setContext(async (_, { headers }) => {
	const token = await AsyncStorage.getItem('@token')
	return {
		headers: {
			...headers,
			authorization: token ? `${token}` : '',
		},
	}
})

const client = new ApolloClient({
	//#docker
	//uri: 'http://localhost:5050/graphql',
	//#local
	//uri: 'http://localhost:4000/graphql',
	//#phone
	// uri: `http://${api}:4000/graphql`,
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink),
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
