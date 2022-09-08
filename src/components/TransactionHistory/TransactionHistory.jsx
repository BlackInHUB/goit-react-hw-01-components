import { Table, TableHead, TableBody, TR, TH, TD } from "./TransactionHistory.styled"

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