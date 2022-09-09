import PropTypes from 'prop-types'
import {ProfileCard, ProfileDescription, UserName, UserAvatar, UserLocation, StatsList, ListItem, UserTag, ListItemLabel, ListItemQuantity} from './Profile.styled'

export const Profile = ({ user }) => {
    const { username, avatar, tag, location, stats } = user;
    return (
        <ProfileCard>
            <ProfileDescription>
                <UserAvatar src={avatar} alt={username} />
                <UserName>{username}</UserName>
                <UserTag>@{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </ProfileDescription>
            <StatsList>
                <ListItem>
                    <ListItemLabel>Followers</ListItemLabel>
                    <ListItemQuantity>{stats.followers}</ListItemQuantity>
                </ListItem>
                <ListItem>
                    <ListItemLabel>Views</ListItemLabel>
                    <ListItemQuantity>{stats.views}</ListItemQuantity>
                </ListItem>
                <ListItem>
                    <ListItemLabel>Likes</ListItemLabel>
                    <ListItemQuantity>{stats.likes}</ListItemQuantity>
                </ListItem>
            </StatsList>
        </ProfileCard>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.objectOf(PropTypes.number.isRequired)
    })
}