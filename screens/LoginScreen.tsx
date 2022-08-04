import {
	StyleSheet,
	Image,
	TextInput,
	Text,
	Pressable,
	TouchableHighlight,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useLazyQuery, gql } from '@apollo/client'

import { View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import { useState } from 'react'
import Logo from '../assets/logo/biscotteLogo.png'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<'Login'>) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordVisible, setPasswordVisible] = useState(false)

	const LOGIN = gql`
		query login($email: String!, $password: String!) {
			login(email: $email, password: $password)
		}
	`
	const [getToken, { loading }] = useLazyQuery(LOGIN, {
		onCompleted: async (data) => {
			await AsyncStorage.setItem('@token', data.login)
			const value = await AsyncStorage.getItem('@token')
			if (value !== null) {
				navigation.navigate('Projects')
			}
		},
		onError: (err) => {
			console.log(err.message)
		},
		notifyOnNetworkStatusChange: true,
	})

	const handleSubmit = () => {
		getToken({ variables: { email, password } })
	}

	return (
		<View style={styles.container}>
			<Image style={styles.image} source={Logo} />
			<Text style={styles.title}>Login</Text>
			<TextInput
				placeholder='Email'
				value={email}
				onChangeText={setEmail}
				style={styles.input}
				textContentType='emailAddress'
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
				<TouchableHighlight style={styles.button} onPress={handleSubmit}>
					<Text style={styles.buttonText}>Log In</Text>
				</TouchableHighlight>
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
