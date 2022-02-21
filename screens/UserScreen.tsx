import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Pressable,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Card, SearchBar } from 'react-native-elements';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import useColorScheme from '../hooks/useColorScheme';
import AvatarComponent from '../components/AvatarComponent';
interface IUser {
  _id: number;
  firstname: string;
  lastname: string;
  email: string;
  hash: string;
  role: string;
  position: string;
}

const fakeData: any = [
  {
    _id: 1,
    firstname: 'Bobby',
    lastname: 'Billy',
    email: 'bobi@email.com',
    hash: 'myhashbob',
    role: 'user',
    position: 'Product Owner',
  },
  {
    _id: 2,
    firstname: 'Jane',
    lastname: 'Fixme',
    email: 'jfix@email.com',
    hash: 'myhashfix',
    role: 'user',
    position: 'Developer',
  },
  {
    _id: 3,
    firstname: 'Joe',
    lastname: '',
    email: 'jdal@email.com',
    hash: 'myhashfix',
    role: 'user',
    position: 'Product Owner',
  },
  {
    _id: 4,
    firstname: 'Pete',
    lastname: 'Do De La Vega',
    email: 'pd@email.com',
    hash: 'myhashfix',
    role: 'user',
    position: 'Developer',
  },
  {
    _id: 5,
    firstname: 'Bubu',
    lastname: 'de More',
    email: 'bb@email.com',
    hash: 'myhashfix',
    role: 'user',
    position: 'Product Owner',
  },
];

export default function UserScreen({
  navigation,
}: RootTabScreenProps<'Users'>) {
  const colorScheme = useColorScheme();

  const [search, setSearch] = useState('');
  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const UserItem = ({ user }: IUser) => {
    return (
      <>
        <View style={styles.userItem}>
          <AvatarComponent
            size={64}
            position={user.position}
            lastname={user.lastname}
            firstname={user.firstname}
          />
          <View style={styles.innerItem}>
            <View style={styles.userText}>
              <Text style={styles.names}>
                {user.firstname} {user.lastname}
              </Text>
              <Text style={styles.position}>{user.position}</Text>
            </View>
            <Pressable
              onPress={() => navigation.navigate('UserEdit', user._id)}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Ionicons
                name="ios-chevron-forward"
                size={25}
                color={'#F50D51'}
                style={{ fontSize: 40 }}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={styles.separator}
          lightColor="lightgrey"
          darkColor="rgba(255,255,255,0.1)"
        />
      </>
    );
  };

  const renderItem: ListRenderItem<IUser> = ({ item }) => {
    return <UserItem user={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        platform="ios"
        placeholder="Search"
        containerStyle={styles.searchbarContainer}
        // @ts-ignore
        onChangeText={updateSearch}
        value={search}
      />
      <Card containerStyle={styles.card}>
        <FlatList
          style={{ height: '100%' }}
          data={fakeData}
          keyExtractor={(item: any) => item._id}
          renderItem={renderItem}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '100%',
    shadowOpacity: 0,
    flex: 1,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  userItem: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  userText: {
    flexWrap: 'nowrap',
    flex: 1,
  },
  names: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  position: {
    flex: 1,
    fontSize: 15,
    color: 'grey',
  },
  separator: {
    height: 1,
    width: '97%',
    alignSelf: 'center',
  },
  searchbarContainer: {
    backgroundColor: 'transparent',
  },
});
