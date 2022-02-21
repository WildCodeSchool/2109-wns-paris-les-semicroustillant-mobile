import { RootTabScreenProps } from '../types'
import { Text, View } from '../components/Themed'
import { StyleSheet, Pressable, FlatList, ListRenderItem } from 'react-native'
import { Card } from 'react-native-elements'

export default function ProjectDetails({
	route,
}: RootTabScreenProps<'ProjectDetails'>) {
	const fakeData: any = () => {
		return route.params.projectId === '1'
			? {
					_id: '1',
					name: 'Project 1',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci repudiandae magni voluptas impedit nihil obcaecati.',
					status: 'In progress',
					advancement: 50,
			  }
			: route.params.projectId === '2'
			? {
					_id: '2',
					name: 'Project 2',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci repudiandae magni voluptas impedit nihil obcaecati.',
					status: 'Done',
					advancement: 100,
			  }
			: {
					_id: '3',
					name: 'Project 3',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci repudiandae magni voluptas impedit nihil obcaecati.',
					status: 'Delayed',
					advancement: 25,
			  }
	}
	const getData = fakeData()

	interface Idata {
		_id: string
		subject: string
	}
	const tasks = [
		{ _id: '1', subject: 'Task one' },
		{ _id: '2', subject: 'Task two' },
		{ _id: '3', subject: 'Task three' },
	]

	const Item = ({ subject }: Idata) => {
		return (
			<Card containerStyle={styles.taskCard}>
				<Text>{subject}</Text>
			</Card>
		)
	}

	const renderItem: ListRenderItem<Idata> = ({ item }) => {
		return <Item _id={item._id} subject={item.subject} />
	}

	return (
		<View style={styles.container}>
			<Text style={styles.mainTitle}>{getData.name}</Text>
			<View style={styles.projectCard}>
				<Card>
					<Text style={styles.description}>{getData.description}</Text>
					<View style={styles.bottomContainer}>
						<View style={styles.bottom}>
							<Text style={styles.redText}>Status: </Text>
							<Text>{getData.status}</Text>
						</View>
						<View style={styles.bottom}>
							<Text style={styles.redText}>Advancement: </Text>
							<Text>{getData.advancement}%</Text>
						</View>
					</View>
				</Card>
			</View>
			<View style={styles.tasksContainer}>
				<Text style={styles.sectionsTitle}>Tasks</Text>
				<FlatList
					data={tasks}
					renderItem={renderItem}
					keyExtractor={(tasks) => tasks._id}
				/>
			</View>
			<View style={styles.usersContainer}>
				<Text style={styles.sectionsTitle}>Users</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	a: {
		borderWidth: 1,
		flex: 1,
		height: '50%',
	},
	bottom: {
		flexDirection: 'row',
	},
	bottomContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	container: {
		flex: 1,
		alignItems: 'center',
	},
	description: {
		marginBottom: 20,
	},
	projectCard: {
		// width: '80%',
		flex: 1,
	},
	redText: {
		color: '#F50D51',
	},
	taskCard: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 250,
		height: 45,
	},
	tasksContainer: {
		flex: 1,
	},
	sectionsTitle: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 15,
		marginTop: 35,
	},
	mainTitle: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		marginTop: 20,
	},
	usersContainer: {
		flex: 1,
	},
})
