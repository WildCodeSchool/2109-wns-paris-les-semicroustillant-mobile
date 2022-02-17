import { StyleSheet, SafeAreaView, SectionList, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

export default function UserEditScreen({
  route,
}: RootTabScreenProps<'Users'>) {
  const colorScheme = useColorScheme();

  const fakeData: any = [
    {
      data: [ route.params === 1
        ?
        {
          _id: 1,
          firstname: 'Bobby',
          lastname: 'Billy',
          email: 'bobi@email.com',
          hash: 'myhashbob',
          role: 'user',
          position: 'Developer',
        }
        :
        {
          _id: 2,
          firstname: 'Jane',
          lastname: 'Fixme',
          email: 'jfix@email.com',
          hash: 'myhashfix',
          role: 'user',
          position: 'Developer',
        }
      ],
    },
  ];

  const UserItem = (user: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.names}>{user.item.firstname}</Text>
        <Text style={styles.names}>{user.item.lastname}</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Text style={styles.position}>{user.item.email}</Text>
        <Text style={styles.position}>{user.item.position}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={fakeData}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }: any) => <UserItem item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 2,
  },
  item: {
    backgroundColor: '#c5d1fc',
    padding: 20,
    marginVertical: 8,
    borderRadius: 15,

    borderColor: 'red',
    borderWidth: 10,
  },
  names: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
