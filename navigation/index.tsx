/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Pressable } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import SettingsScreen from '../screens/SettingsScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import LoginScreen from '../screens/LoginScreen'
import UserScreen from '../screens/UserScreen'
import UserEditScreen from '../screens/UserEditScreen'
import ProjectsScreen from '../screens/ProjectsScreen'
import TasksScreen from '../screens/TasksScreen'
import ProjectDetails from '../screens/ProjectDetails'
import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps,
} from '../types'
import LinkingConfiguration from './LinkingConfiguration'

import { Image, StyleSheet } from 'react-native'
import biscotteLogo from '../assets/logo/biscotteLogo.png'

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	)
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Root'
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='NotFound'
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name='Settings' component={SettingsScreen} />
			</Stack.Group>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen
					name='UserEdit'
					component={UserEditScreen}
					options={{
						title: 'Edit a user',
					}}
				/>
			</Stack.Group>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen
					name='ProjectDetails'
					component={ProjectDetails}
					options={{
						title: 'Project Details',
					}}
				/>
			</Stack.Group>
		</Stack.Navigator>
	)
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
	const colorScheme = useColorScheme()

	return (
		<BottomTab.Navigator
			initialRouteName='Login'
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}
		>
			<BottomTab.Screen
				name='Login'
				component={LoginScreen}
				options={{
					title: 'Login',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='arrow-right' color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name='Projects'
				component={ProjectsScreen}
				options={({ navigation }: RootTabScreenProps<'Projects'>) => ({
					title: 'Projects',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name='folder-open' color={color} />
					),
					headerLeft: () => (
						<Pressable
							onPress={() => navigation.navigate('Settings')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<Image source={biscotteLogo} style={styles.logo} />
						</Pressable>
					),
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Settings')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<FontAwesome
								name='gear'
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
			<BottomTab.Screen
				name='Tasks'
				component={TasksScreen}
				options={({ navigation }: RootTabScreenProps<'Tasks'>) => ({
					title: 'Tasks',
					tabBarIcon: ({ color }) => <TabBarIcon name='list' color={color} />,
					headerLeft: () => (
						<Pressable
							onPress={() => navigation.navigate('Settings')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<Image source={biscotteLogo} style={styles.logo} />
						</Pressable>
					),
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Settings')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<FontAwesome
								name='gear'
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
			<BottomTab.Screen
				name='Users'
				component={UserScreen}
				options={({ navigation }: RootTabScreenProps<'Users'>) => ({
					title: 'Users',
					tabBarIcon: ({ color }) => <TabBarIcon name='users' color={color} />,
					headerLeft: () => (
						<Pressable
							onPress={() => navigation.navigate('Settings')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<Image source={biscotteLogo} style={styles.logo} />
						</Pressable>
					),
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Settings')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<FontAwesome
								name='gear'
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
		</BottomTab.Navigator>
	)
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name']
	color: string
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}

const styles = StyleSheet.create({
	logo: {
		marginTop: 15,
		width: 160,
		height: 160,
	},
})
