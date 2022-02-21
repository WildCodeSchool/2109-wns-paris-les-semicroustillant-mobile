import { StyleSheet, Image, TextInput, Text, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import { useState } from 'react'
import Logo from '../assets/logo/biscotteLogo.png'

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<'Login'>) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [passwordVisible, setPasswordVisible] = useState(false)

	const onLogin = () => {
		navigation.navigate('Projects')
	}

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={Logo} />
			<Text style={styles.title}>Login</Text>
			<TextInput
				placeholder='Username'
				value={username}
				onChangeText={setUsername}
				style={styles.input}
				textContentType='username'
			/>
			<View style={styles.passwordInput}>
				<TextInput
					placeholder='Password'
					value={password}
					onChangeText={setPassword}
					textContentType='password'
					secureTextEntry={!passwordVisible && true}
					style={styles.inputText}
				/>
				{passwordVisible ? (
					<FontAwesome
						onPress={() => setPasswordVisible(!passwordVisible)}
						name='eye-slash'
						size={25}
						style={styles.icon}
					/>
				) : (
					<FontAwesome
						onPress={() => setPasswordVisible(!passwordVisible)}
						name='eye'
						size={25}
						style={styles.icon}
					/>
				)}
			</View>
			<View style={styles.container}>
				<Pressable style={styles.button} onPress={onLogin}>
					<Text style={styles.buttonText}>Log In</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#F50D51',
		width: 250,
		flex: 0.25,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		marginTop: 50,
	},
	buttonText: {
		color: 'white',
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		color: 'grey',
		justifyContent: 'flex-end',
		fontSize: 20,
		position: 'absolute',
		left: 220,
		top: 10,
	},
	image: {
		flex: 1,
		resizeMode: 'contain',
		width: '80%',
		marginBottom: 0,
	},
	input: {
		borderWidth: 0.5,
		borderRadius: 5,
		height: 40,
		width: 250,
		padding: 10,
		marginBottom: 20,
	},
	inputText: {
		width: '70%',
	},
	passwordInput: {
		flexDirection: 'row',
		borderWidth: 0.5,
		borderRadius: 5,
		height: 40,
		width: 250,
		padding: 10,
		marginBottom: 20,
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 40,
	},
})
