import styled from "styled-components";

export const StatSection = styled.section `
    margin-top: ${p => p.theme.space[5]}px;
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.normal}px;
    overflow: hidden;
    padding-top: ${p => p.theme.space[5]}px;
`

export const StatTitle = styled.h2`
    text-transform: uppercase;
    color: ${p => p.theme.colors.darkGrey};
    margin-bottom: ${p => p.theme.space[5]}px;  
`
