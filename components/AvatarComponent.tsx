import React from 'react';
import { Avatar } from 'react-native-elements';

type AvatarData = {
  position: string;
  lastname: string;
  firstname: string;
  avatarSize: number;
};

const AvatarComponent = ({ position, lastname, firstname, avatarSize }: AvatarData) => {
  const split = lastname.split(' ');
  const initials = (firstname.charAt(0)+lastname.split(' ')[split.length -1].charAt(0)).toUpperCase();
  
  const avatarColor = (position: string) => {
    if (position === 'Developer') {
      return 'orange';
    }
    if (position === 'Product Owner') {
      return '#3d4db7';
    }
  };

  return (
    <Avatar
      size={avatarSize}
      rounded
      title={initials}
      containerStyle={{
        backgroundColor: avatarColor(position),
        marginRight: 20,
      }}
    />
  );
};

export default AvatarComponent;
