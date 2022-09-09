import { StatSection, StatTitle, StatList, ListItem, ItemLable, ItemPercentage } from "./Statistics.styled"
import PropTypes from 'prop-types'

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

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}