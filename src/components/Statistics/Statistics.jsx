import { StatSection, StatTitle, StatList, ListItem, ItemLable, ItemPercentage } from "./Statistics.styled"

export const Statistics = ({title, data}) => {
    return (
    <StatSection title={title}>
        <StatTitle>{title}</StatTitle>
        <StatList>{data.map(({ id, label, percentage }) => (
            <ListItem key={id} statLabel={label}>
                <ItemLable>{label}</ItemLable>
                <ItemPercentage>{percentage}%</ItemPercentage>
            </ListItem>))}
        </StatList>
    </StatSection>
 )
}