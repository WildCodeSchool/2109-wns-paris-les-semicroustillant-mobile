import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { Card } from 'react-native-elements';
import { gql, useQuery } from '@apollo/client';
import { Text, View } from '../components/Themed';
import UserItemComponent from '../components/UserItemComponent';
import { RootTabScreenProps, IUser } from '../types';

const ONE_USER_QUERY = gql`
  query getOneUser($userId: String!) {
    getOneUser(userId: $userId) {
      _id
      firstname
      lastname
      email
      position
    }
  }
`;

export default function UserEditScreen({ route }: RootTabScreenProps<'Users'>) {
  const { data } = useQuery<{ getOneUser: IUser }>(ONE_USER_QUERY, {
    variables: { userId: route.params?.['_id'] },
  });
  const user = data && data.getOneUser;

  return (
    <SafeAreaView style={styles.container}>
      <Card containerStyle={styles.card}>
        {user && (
          <View style={styles.item}>
            <Text style={styles.names}>{user.firstname}</Text>
            <Text style={styles.names}>{user.lastname}</Text>
            <View
              style={styles.separator}
              lightColor="#eee"
              darkColor="rgba(255,255,255,0.1)"
            />
            <Text style={styles.position}>{user.email}</Text>
            <Text style={styles.position}>{user.position}</Text>
          </View>
        )}
      </Card>
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
  card: {
    width: '100%',
    shadowOpacity: 0,
    flex: 1,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
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
