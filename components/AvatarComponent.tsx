import React from 'react'
import { Avatar } from 'react-native-elements'

type AvatarData = {
	position: string
	lastname: string
	firstname: string
	avatarSize?: number
}

const AvatarComponent = ({
	position,
	lastname,
	firstname,
	avatarSize,
}: AvatarData) => {
	const split = lastname.split(' ')
	const initials = (
		firstname.charAt(0) + lastname.split(' ')[split.length - 1].charAt(0)
	).toUpperCase()

	const avatarColor = (position: string) => {
    switch (position) {
      case 'Developer':
        return 'orange';
      case 'Product Owner':
        return '#3d4db7';
      case 'Scrum Master':
        return 'red';
      case 'Team Lead':
        return 'darkgreen';
      case 'Test Engineer':
        return 'purple';
      default:
        return 'grey';
    }
	}

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
	)
}

export default AvatarComponent
