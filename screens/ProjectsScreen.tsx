import { StyleSheet, Pressable, FlatList, ListRenderItem } from 'react-native'
import { useQuery, gql } from '@apollo/client'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import { Card } from 'react-native-elements'

export default function Projects({
	navigation,
}: RootTabScreenProps<'Projects'>) {
	// const fakeData = [
	// 	{
	// 		_id: '1',
	// 		name: 'Project 1',
	// 		description:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci repudiandae magni voluptas impedit nihil obcaecati.',
	// 		status: 'In progress',
	// 		advancement: 50,
	// 	},
	// 	{
	// 		_id: '2',
	// 		name: 'Project 2',
	// 		description:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci repudiandae magni voluptas impedit nihil obcaecati.',
	// 		status: 'Done',
	// 		advancement: 100,
	// 	},
	// 	{
	// 		_id: '3',
	// 		name: 'Project 3',
	// 		description:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci repudiandae magni voluptas impedit nihil obcaecati.',
	// 		status: 'Delayed',
	// 		advancement: 25,
	// 	},
	// ]

	const GET_PROJECTS = gql`
		query GetAllProjects {
			getAllProjects {
				_id
				name
				description
				status
			}
		}
	`
	interface Idata {
		_id: string
		name: string
		description: string
		status: string
		projectOwner?: string
		advancement: number
		members?: string[]
	}

	interface IgetAllProjects {
		getAllProjects: Idata[]
	}

	const { loading, data } = useQuery<IgetAllProjects>(GET_PROJECTS)

	const projects = data && data.getAllProjects

	console.log('data', data)

	const Item = ({ _id, name, description, status, advancement }: Idata) => {
		return (
			<View style={styles.container}>
				<Card containerStyle={styles.card}>
					<View style={styles.cardHeader}>
						<Text style={styles.title}>{name}</Text>
						<Pressable
							style={styles.button}
							onPress={() =>
								navigation.navigate('ProjectDetails', { projectId: _id })
							}
						>
							<Text style={styles.buttonText}>See More</Text>
						</Pressable>
					</View>
					<Text style={styles.description}>{description}</Text>
					<Card.Divider />
					<View style={styles.bottom}>
						<Text style={styles.redText}>Status: </Text>
						<Text>{status}</Text>
					</View>
					<View style={styles.bottom}>
						<Text style={styles.redText}>Advancement: </Text>
						<Text>{advancement}%</Text>
					</View>
				</Card>
			</View>
		)
	}

	const renderItem: ListRenderItem<Idata> = ({ item }) => {
		return (
			<Item
				_id={item._id}
				name={item.name}
				description={item.description}
				status={item.status}
				advancement={item.advancement}
			/>
		)
	}

	return (
		<View style={styles.screen}>
			<FlatList
				data={projects}
				renderItem={renderItem}
				keyExtractor={(project) => project._id}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	bottom: {
		flexDirection: 'row',
	},
	button: {
		borderWidth: 2,
		borderColor: '#F50D51',
		width: 80,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	buttonText: {
		color: '#F50D51',
	},
	card: {
		width: '90%',
		marginTop: 20,
	},
	cardHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	description: {
		marginBottom: 10,
	},
	redText: {
		color: '#F50D51',
	},
	screen: {
		height: '100%',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	title: {
		fontSize: 15,
		fontWeight: 'bold',
	},
})
