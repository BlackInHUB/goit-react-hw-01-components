import { StatSection, StatTitle } from "./Statistics.styled"
import { StatList } from "./StatList"
import data from '../../data.json'

export const Statistics = ({title}) => {
    return (
    <StatSection title={title}>
        <StatTitle>{title}</StatTitle>
        <StatList data={data}></StatList>
    </StatSection>
 )
}