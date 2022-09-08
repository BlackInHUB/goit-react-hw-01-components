import { List, ListItem, ItemLable, ItemPercentage } from './StatList.styled'


export const StatList = ({data}) => {
    return (
    <List>{data.map(({ id, label, percentage }) => (
        <ListItem key={id} statLabel={label}>
            <ItemLable>{label}</ItemLable>
            <ItemPercentage>{percentage}%</ItemPercentage>
        </ListItem>))}
    </List>
    )
}