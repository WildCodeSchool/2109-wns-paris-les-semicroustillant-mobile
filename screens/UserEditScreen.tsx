import { Fragment, useState } from 'react'
import {
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Pressable,
} from 'react-native'
import { Card, Divider } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'
import { gql, useQuery } from '@apollo/client'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps, IUser, IProject } from '../types'


const GET_PROJECTS_BY_USERID_QUERY = gql`
	query GetProjectsByUserId {
		getProjectsByUserId {
			name
		}
	}
`

const GET_ALL_PROJECTS = gql`
	query GetAllProjects {
		getAllProjects {
			_id
			name
			projectOwner
			members
		}
	}
`

const ONE_USER_QUERY = gql`
	query getOneUser($userId: String!) {
		getOneUser(userId: $userId) {
			_id
			firstname
			lastname
			email
			position
			role
		}
	}
`

export default function UserEditScreen({
	route,
	navigation,
}: RootTabScreenProps<'Users'>) {
	const [editPersonalInfo, setEditPersonalInfo] = useState(false)
	const [editRole, setEditRole] = useState(false)
	const { data: userData } = useQuery<{ getOneUser: IUser }>(ONE_USER_QUERY, {
		variables: { userId: route.params?.['_id'] },
	})
	const user = userData?.getOneUser

	const { data: projectData } = useQuery<{ getProjectsByUserId: IProject[] }>(
		GET_PROJECTS_BY_USERID_QUERY,
		{
			variables: { userId: route.params?.['_id'] },
		}
	)
	const projects = projectData?.getProjectsByUserId

	const { data: allProjectData } =
		useQuery<{ getAllProjects: IProject[] }>(GET_ALL_PROJECTS)
	const allProjects = allProjectData?.getAllProjects

	return (
		<SafeAreaView style={styles.mainContainer}>
			{/* ----- HEADER ----- */}
			<Card containerStyle={styles.card}>
				<View style={styles.header}>
					<Pressable
						onPress={() => navigation?.navigate('Users')}
						style={({ pressed }) => ({
							opacity: pressed ? 0.5 : 1,
							position: 'absolute',
							zIndex: 1,
						})}
					>
						<Ionicons
							name='ios-chevron-back'
							color={'#F50D51'}
							size={30}
							style={{ paddingLeft: 15 }}
						/>
					</Pressable>

					<View style={styles.innerHeader}>
						<Text style={styles.mainTitle}>
							{user?.firstname} {user?.lastname}
						</Text>
					</View>
				</View>
				<Divider />
				{/* ----- MAIN CONTENT ----- */}
				<View style={styles.secondaryContainer}>
					<ScrollView style={styles.scrollContainer}>
						{/* ----- PERSONAL INFO ----- */}
						<View style={styles.userInfoCard}>
							<View style={styles.userInfoCardHeader}>
								<Text style={styles.userInfoCardHeaderTitle}>
									Personal information
								</Text>
								<Pressable
									onPress={() => setEditPersonalInfo(!editPersonalInfo)}
									style={({ pressed }) => ({
										opacity: pressed ? 0.5 : 1,
									})}
								>
									<Ionicons
										name={
											editPersonalInfo ? 'ios-checkmark' : 'ios-create-outline'
										}
										size={30}
										color={'#F50D51'}
									/>
								</Pressable>
							</View>

							<View style={styles.userInfoCardContent}>
								<View style={styles.userInfoCardContentSubTitle}>
									<Text style={styles.subTitle}>Firstname</Text>
									<Text style={styles.subTitle}>Lastname</Text>
									<Text style={styles.subTitle}>E-mail</Text>
								</View>

								<View style={styles.userInfoCardContentSubContent}>
									<Text style={styles.subInfo}>{user?.firstname}</Text>
									<Text style={styles.subInfo}>{user?.lastname}</Text>
									<Text style={styles.subInfo}>{user?.email}</Text>
								</View>
							</View>
						</View>

						{/* ----- USER'S ROLE ----- */}
						<View style={styles.userInfoCard}>
							<View style={styles.userInfoCardHeader}>
								<Text style={styles.userInfoCardHeaderTitle}>Role</Text>
								<Pressable
									onPress={() => setEditRole(!editRole)}
									style={({ pressed }) => ({
										opacity: pressed ? 0.5 : 1,
									})}
								>
									<Ionicons
										name={editRole ? 'ios-checkmark' : 'ios-create-outline'}
										size={30}
										color={'#F50D51'}
									/>
								</Pressable>
							</View>

							<View style={styles.userInfoCardContent}>
								<View style={styles.userInfoCardContentSubTitle}>
									<Text style={styles.subTitle}>Position</Text>
									<Text style={styles.subTitle}>Role</Text>
								</View>

								<View style={styles.userInfoCardContentSubContent}>
									<Text style={styles.subInfo}>{user?.position}</Text>
									<Text style={styles.subInfo}>{user?.role}</Text>
								</View>
							</View>
						</View>

						{/* ----- USERS'S PROJECTS ----- */}
						<View style={styles.userInfoCard}>
							<View style={styles.userInfoCardHeader}>
								<Text style={styles.userInfoCardHeaderTitle}>Projects</Text>
							</View>

							{allProjects?.map((project) => (
								<Fragment key={project._id}>
									<View style={styles.userInfoCardProjects}>
										<Text style={styles.subInfo}>{project?.name}</Text>
										<Pressable
											onPress={() => console.log('action')}
											style={({ pressed }) => ({
												opacity: pressed ? 0.5 : 1,
											})}
										>
											<Ionicons
												name='ios-chevron-forward'
												size={30}
												color={'#F50D51'}
											/>
										</Pressable>
									</View>
									<Divider />
								</Fragment>
							))}
						</View>
					</ScrollView>
				</View>
			</Card>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	secondaryContainer: {
		height: '100%',
		padding: 20,
	},
	card: {
		height: '100%',
		width: '100%',
		shadowOpacity: 0,
		flex: 1,
		marginTop: 0,
		paddingTop: 0,
		paddingBottom: 0,
		padding: 0,
		borderWidth: 0,
	},
	userInfoCard: {
		padding: 25,
		borderRadius: 15,
		marginBottom: 20,
		borderColor: 'gainsboro',
		borderWidth: 1,
	},
	userInfoCardHeader: {
		marginBottom: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	userInfoCardHeaderTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#F50D51',
	},
	userInfoCardContent: {
		flexDirection: 'row',
		flex: 1,
	},
	userInfoCardContentSubTitle: {
		justifyContent: 'space-between',
		flex: 2,
	},
	userInfoCardContentSubContent: {
		justifyContent: 'space-between',
		flexWrap: 'nowrap',
		flex: 3,
	},
	subTitle: {
		fontSize: 17,
		fontWeight: '500',
	},
	subInfo: {
		fontSize: 16,
	},
	userInfoCardProjects: {
		marginBottom: 10,
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	scrollContainer: {
		width: '100%',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	innerHeader: {
		justifyContent: 'space-between',
		flex: 1,
	},
	mainTitle: {
		flexWrap: 'nowrap',
		textAlign: 'center',
		fontSize: 23,
		fontWeight: 'bold',
		marginBottom: 20,
		marginTop: 20,
		marginLeft: 20,
	},
})
