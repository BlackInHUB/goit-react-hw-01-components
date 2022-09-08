import { StatListItem, ItemLable, ItemPercentage } from "./StatListItem.styled";

export const ListItem = ({ id, label, percentage}) => {
    return (
        <StatListItem key={id}>
            <ItemLable>{label}</ItemLable>
            <ItemPercentage>{percentage}</ItemPercentage>
        </StatListItem>
    )
}