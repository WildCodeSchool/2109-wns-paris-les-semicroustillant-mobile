import { RootTabScreenProps } from '../types'
import { Text, View } from '../components/Themed'
import { StyleSheet, ListRenderItem, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import UserItem from '../components/UserItemComponent'
import { fakeData as users } from './UserScreen'
import AvatarComponent from '../components/AvatarComponent'

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

	interface Users {
		_id: string
		firstname: string
		lastname: string
		position: string
	}
	interface Idata {
		_id: string
		subject: string
		users: Users[] | any
	}
	const tasks = [
		{
			_id: '1',
			subject: 'Task one',
			users: [
				{ _id: '1', firstname: 'Jane', lastname: 'Doe', position: 'Developer' },
				{
					_id: '2',
					firstname: 'Tom',
					lastname: 'Jones',
					position: 'Product Owner',
				},
			],
		},
		{
			_id: '2',
			subject: 'Task two',
			users: [
				{ _id: '1', firstname: 'Jane', lastname: 'Doe', position: 'Developer' },
				{
					_id: '2',
					firstname: 'Tom',
					lastname: 'Jones',
					position: 'Product Owner',
				},
			],
		},
		{
			_id: '3',
			subject: 'Task three',
			users: [
				{ _id: '1', firstname: 'Jane', lastname: 'Doe', position: 'Developer' },
				{
					_id: '2',
					firstname: 'Tom',
					lastname: 'Jones',
					position: 'Product Owner',
				},
			],
		},
	]

	const Item = ({ subject, users }: Idata) => {
		console.log(users)
		return (
			<Card containerStyle={styles.taskCard}>
				<View style={styles.tasks}>
					<Text style={styles.taskSubject}>{subject}</Text>
					<View style={styles.taskUsers}>
						{users.map((user: Users) => (
							<AvatarComponent
								key={user._id}
								firstname={user.firstname}
								lastname={user.lastname}
								position={user.position}
								avatarSize={34}
							/>
						))}
					</View>
				</View>
			</Card>
		)
	}

	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollContainer}>
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
					{tasks.map((task) => (
						<Item
							key={task._id}
							_id={task._id}
							subject={task.subject}
							users={task.users}
						/>
					))}
				</View>
				<View style={styles.usersContainer}>
					<Text style={styles.sectionsTitle}>Users</Text>
					{users.map((user) => (
						<>
							<UserItem
								key={user._id}
								_id={user._id}
								firstname={user.firstname}
								lastname={user.lastname}
								position={user.position}
								avatarSize={34}
							/>
						</>
					))}
				</View>
			</ScrollView>
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
		flex: 1,
		width: '100%',
	},
	redText: {
		color: '#F50D51',
	},
	tasks: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	taskCard: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 80,
		width: '90%',
	},
	tasksContainer: {
		alignItems: 'center',
	},
	taskSubject: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 15,
		marginRight: 20,
	},
	scrollContainer: {
		marginHorizontal: 10,
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
	taskUsers: {
		flexDirection: 'row',
	},
	usersContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
})
