import { List, ListItem, ItemStatus, ItemAvatar, ItemName } from './FriendList.styled'

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