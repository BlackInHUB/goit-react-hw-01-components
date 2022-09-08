import { List, ListItem, ItemLable, ItemPercentage } from './StatList.styled'
import data from '../../data.json'

export const StatList = () => {
    return (
    <List>{data.map(({ id, label, percentage }) => (
        <ListItem key={id} statLabel={label}>
            <ItemLable>{label}</ItemLable>
            <ItemPercentage>{percentage}%</ItemPercentage>
        </ListItem>))}
    </List>
    )
}