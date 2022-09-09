import { Table, TableHead, TableBody, TR, TH, TD } from "./TransactionHistory.styled"
import PropTypes from 'prop-types'

export const TransactionHistory = ({ items }) => {
    return (
<Table>
    <TableHead>
        <TR>
            <TH>Type</TH>
            <TH>Amount</TH>        
            <TH>Currency</TH>        
        </TR>            
    </TableHead>
        <TableBody>{items.map(({ id, type, amount, currency }) => (
        <TR key={id}>
            <TD>{type}</TD>
            <TD>{amount}</TD>
            <TD>{currency}</TD>
        </TR>
    ))}
    </TableBody>
</Table>
    )
}

Table.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}