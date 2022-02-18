import { StyleSheet, Image } from 'react-native';

import { View } from '../components/Themed';
import { TextInput, Button } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useState } from 'react';
import Logo from '../assets/logo/biscotteLogo.png';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'Login'>) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(username, password);

  const onLogin = () => {
    navigation.navigate('Projects');
  };

  return (
    <View style={styles.container}>
      <Image
			style={styles.image}
        source={Logo}
      />
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
			<Button title='Login' onPress={onLogin} />
		</View>
	)
}

const styles = StyleSheet.create({
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
})
