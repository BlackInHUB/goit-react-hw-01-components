import styled from "styled-components";

export const List = styled.ul`
    margin-top: ${p => p.theme.space[5]}px;   
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    width: 500px;
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: 0px 3px 3px 1px ${p => p.theme.colors.darkGrey};

    &:not(:last-child) {
        margin-bottom: ${p => p.theme.space[3]}px;
    }
`

export const ItemStatus = styled.span`
    width: 20px;
    height: 20px;
    border-radius: ${p => p.theme.radii.circle};
    background-color: ${p => p.status ? 'green' : 'red'};
    margin-right: ${p => p.theme.space[4]}px;
`

export const ItemAvatar = styled.img`
    height: 128px;
    width: auto;
    border-radius: ${p => p.theme.radii.normal}px;
    margin-right: ${p => p.theme.space[4]}px;
`

export const ItemName = styled.p`
    font-size: ${p => p.theme.fontSizes.title}px;
    font-weight: ${p => p.theme.fontWeights.heading};
`