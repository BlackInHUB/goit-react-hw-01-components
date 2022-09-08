import { StatSection, StatTitle } from "./Statistics.styled"
import { StatList } from "./StatList"

export const Statistics = ({title, data}) => {
    return (
    <StatSection title={title}>
        <StatTitle>{title}</StatTitle>
        <StatList data={data}></StatList>
    </StatSection>
 )
}