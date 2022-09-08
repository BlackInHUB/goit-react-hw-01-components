import styled from "styled-components";

export const Table = styled.table`
    margin-top: ${p => p.theme.space[5]}px;
    border-collapse: collapse;
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal}px;
`

export const TableHead = styled.thead`
`

export const TableBody = styled.tbody`
    
`

export const TR = styled.tr`
    border: ${p => p.theme.borders.border} ${p => p.theme.colors.darkGrey};

    &:nth-child(2n) {
        background-color: ${p => p.theme.colors.lightGrey}
    }
`

export const TH = styled.th`
    width: 300px;
    border: ${p => p.theme.borders.border};
    color: ${p => p.theme.colors.white};
    text-transform: uppercase;
    background-color: ${p => p.theme.colors.docx};
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
`

export const TD = styled.td`
    border: ${p => p.theme.borders.border} ${p => p.theme.colors.darkGrey};
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
`