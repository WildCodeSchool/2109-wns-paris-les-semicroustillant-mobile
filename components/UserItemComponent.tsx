import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import AvatarComponent from './AvatarComponent';
import { IUserWithAvatarAndNavigation } from '../types';

const UserItem = ({
  _id,
  firstname,
  lastname,
  position,
  avatarSize,
  navigation,
}: IUserWithAvatarAndNavigation) => {
  return (
    <>
      <View style={styles.userItem}>
        <AvatarComponent
          avatarSize={avatarSize}
          position={position}
          lastname={lastname}
          firstname={firstname}
        />
        <View style={styles.innerItem}>
          <View style={styles.userText}>
            <Text style={styles.names}>
              {firstname} {lastname}
            </Text>
            <Text style={styles.position}>{position}</Text>
          </View>
          <Pressable
            onPress={() => navigation?.navigate('UserEdit', { _id })}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Ionicons
              name="ios-chevron-forward"
              size={40}
              color={'#F50D51'}
            />
          </Pressable>
        </View>
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  userItem: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
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
});

export default UserItem;
