import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import AvatarComponent from './AvatarComponent';
import { IUserItem } from '../types';

const UserItem = ({
  _id,
  firstname,
  lastname,
  position,
  navigation,
}: IUserItem) => {
  return (
    <>
      <View style={styles.userItem}>
        <AvatarComponent
          size={64}
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

const styles = StyleSheet.create({
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
});

export default UserItem;
