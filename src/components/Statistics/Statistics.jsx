import { StatSection, StatTitle } from "./Statistics.styled"
import { StatList } from "./StatList"

export const Statistics = ({title}) => {
    return (
    <StatSection title={title}>
        <StatTitle>{title}</StatTitle>
        <StatList></StatList>
    </StatSection>
 )
}