import { StyleSheet, Image } from 'react-native'

import { View } from '../components/Themed'
import { TextInput, Text, Pressable } from 'react-native'
import { RootTabScreenProps } from '../types'
import { useState } from 'react'
import Logo from '../assets/logo/biscotteLogo.png'

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<'Login'>) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	console.log(username, password)

	const onLogin = () => {
		navigation.navigate('Projects')
	}

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={Logo} />
			<TextInput
				placeholder='Username'
				value={username}
				onChangeText={setUsername}
				style={styles.input}
			/>
			<TextInput
				placeholder='Password'
				value={password}
				onChangeText={setPassword}
				style={styles.input}
			/>
			<Pressable style={styles.button} onPress={onLogin}>
				<Text style={styles.buttonText}>Log In</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#F50D51',
	},
	buttonText: { color: 'white' },
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		flex: 1,
		resizeMode: 'contain',
		width: '80%',
	},
	input: {
		borderWidth: 0.5,
		borderRadius: 5,
		height: 40,
		width: 200,
		padding: 10,
		marginBottom: 8,
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 40,
	},
})
