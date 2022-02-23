import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Card, SearchBar } from 'react-native-elements';
import { gql, useQuery } from '@apollo/client';
import UserItemComponent from '../components/UserItemComponent';
import {
  RootTabScreenProps,
  IUser,
  IUserWithAvatarAndNavigation,
} from '../types';

const USERS_QUERY = gql`
  query GetAllUsers {
    allUsers {
      _id
      firstname
      lastname
      position
      email
    }
  }
`;

export default function UserScreen({
  navigation,
}: RootTabScreenProps<'Users'>) {
  const { data } = useQuery<{ allUsers: IUser[] }>(USERS_QUERY);
  const [search, setSearch] = useState('');
  const updateSearch = (search: string) => {
    setSearch(search);
  };

  console.log('DATA', data)
  const renderItem = ({ item }: { item: IUserWithAvatarAndNavigation }) => {
    return (
      <UserItemComponent
        _id={item._id}
        firstname={item.firstname}
        lastname={item.lastname}
        position={item.position}
        avatarSize={64}
        navigation={navigation}
      />
    );
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
      <ScrollView style={styles.scrollContainer}>
        <Card containerStyle={styles.card}>
          { data?.allUsers.map((item: IUserWithAvatarAndNavigation) => (
          <UserItemComponent
            key={item._id}
            _id={item._id}
            firstname={item.firstname}
            lastname={item.lastname}
            position={item.position}
            avatarSize={64}
            navigation={navigation}
          />
        ))}
        </Card>
      </ScrollView>
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
    flex: 1,
    padding: 0,
    margin: 0,
    borderWidth: 0,
  },
  searchbarContainer: {
    backgroundColor: 'transparent',
  },
  scrollContainer: {
    width: '100%',
  },
});
