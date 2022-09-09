import { List, ListItem, ItemStatus, ItemAvatar, ItemName } from './FriendList.styled'
import PropTypes from 'prop-types'

export const FriendList = ({ friends }) => {
    return (
        <List>{friends.map(({ avatar, name, id, isOnline }) => (
            <ListItem key={id}>
                <ItemStatus status={isOnline}></ItemStatus>
                <ItemAvatar src={avatar} />
                <ItemName>{name}</ItemName>
            </ListItem>
        ))}</List>
    )
}

FriendList.protoTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
}