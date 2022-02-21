import { StyleSheet, Pressable, FlatList, ListRenderItem } from 'react-native'

import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import { Card } from 'react-native-elements'

export default function Projects({}: RootTabScreenProps<'TabOne'>) {
	const fakeData = [
		{
			name: 'Project 1',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci repudiandae magni voluptas impedit nihil obcaecati.',
			status: 'In progress',
			advancement: 50,
		},
		{
			name: 'Project 2',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci repudiandae magni voluptas impedit nihil obcaecati.',
			status: 'Done',
			advancement: 100,
		},
		{
			name: 'Project 3',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci repudiandae magni voluptas impedit nihil obcaecati.',
			status: 'Delayed',
			advancement: 25,
		},
	]

	interface Idata {
		name: string
		description: string
		status: string
		advancement: number
	}

	const Item = ({ name, description, status, advancement }: Idata) => {
		return (
			<View style={styles.container}>
				<Card containerStyle={styles.card}>
					<View style={styles.cardHeader}>
						<Text style={styles.title}>{name}</Text>
						<Pressable style={styles.button} onPress={onPressProject}>
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
				name={item.name}
				description={item.description}
				status={item.status}
				advancement={item.advancement}
			/>
		)
	}

	const onPressProject = () => {
		alert('Hi')
	}
	return (
		<View style={styles.screen}>
			<FlatList
				data={fakeData}
				renderItem={renderItem}
				keyExtractor={(fakedata) => fakedata.name}
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
