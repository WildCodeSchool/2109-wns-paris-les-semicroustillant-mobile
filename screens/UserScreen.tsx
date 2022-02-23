import React, { useState } from 'react'
import {
	StyleSheet,
	SafeAreaView,
	FlatList,
	ListRenderItem,
} from 'react-native'
import { Card, SearchBar } from 'react-native-elements'
import { gql, useQuery } from '@apollo/client'
import UserItemComponent from '../components/UserItemComponent'
import { RootTabScreenProps, IUserItem } from '../types'

const USERS_QUERY = gql`
	query GetAllUsers {
		allUsers {
			_id
			firstname
			lastname
			position
			email
		}
	}
`

export default function UserScreen({
	navigation,
}: RootTabScreenProps<'Users'>) {
	const { data } = useQuery<{ allUsers: IUserItem[] }>(USERS_QUERY)
	const [search, setSearch] = useState('')
	const updateSearch = (search: string) => {
		setSearch(search)
	}

	const renderItem: ListRenderItem<IUserItem> = ({ item }) => {
		return (
			<UserItemComponent
				_id={item._id}
				firstname={item.firstname}
				lastname={item.lastname}
				position={item.position}
				avatarSize={64}
				navigation={navigation}
			/>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<SearchBar
				platform='ios'
				placeholder='Search'
				containerStyle={styles.searchbarContainer}
				// @ts-ignore
				onChangeText={updateSearch}
				value={search}
			/>
			<Card containerStyle={styles.card}>
				<FlatList
					style={{ height: '100%' }}
					data={data?.allUsers}
					keyExtractor={(item) => item._id}
					renderItem={renderItem}
				/>
			</Card>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		width: '100%',
	},
	card: {
		width: '100%',
		shadowOpacity: 0,
		flex: 1,
		marginTop: 0,
		paddingTop: 0,
		paddingBottom: 0,
	},
	searchbarContainer: {
		backgroundColor: 'transparent',
	},
})
