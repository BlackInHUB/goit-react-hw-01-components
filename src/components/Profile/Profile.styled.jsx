import styled from "styled-components";

export const ProfileCard = styled.div`
    width: 30%;
    margin-top: ${p => p.theme.space[5]}px;
    border-radius: ${p => p.theme.radii.normal}px;
    overflow: hidden;
    box-shadow: 0px 0px 6px 1px ${p => p.theme.colors.darkGrey};
`

export const ProfileDescription = styled.div`
    background-color: ${p => p.theme.colors.white};
    /* padding: ${p => p.theme.space[5]}px */
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
`

export const UserAvatar = styled.img`
    width: 50%;
    margin: 0 auto;
    border-radius: ${p => p.theme.borders.circle};
    padding-bottom: ${p => p.theme.space[5]}px;
`

export const UserName = styled.p`
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.title}px;
    font-weight: ${p => p.theme.fontWeights.heading};
`

export const UserTag = styled.p`
    color: ${p => p.theme.colors.darkGrey};
    font-size: ${p => p.theme.fontSizes.text}px;
    font-weight: ${p => p.theme.fontWeights.middle};
    margin-bottom: ${p => p.theme.space[4]}px;    
`

export const UserLocation = styled.p`
    color: ${p => p.theme.colors.darkGrey};
    font-size: ${p => p.theme.fontSizes.text}px;
    font-weight: ${p => p.theme.fontWeights.middle};    
`

export const StatsList = styled.ul`
    background-color: ${p => p.theme.colors.lightGray};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: ${p => p.theme.borders.border} ${p => p.theme.colors.darkGrey};
`

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;

    &:not(:last-child) {
        border-right: ${p => p.theme.borders.border} ${p => p.theme.colors.darkGrey};
    }
`

export const ListItemLabel = styled.span`
    color: ${p => p.theme.colors.darkGrey};
    margin-bottom: ${p => p.theme.space[3]}px;
`

export const ListItemQuantity = styled.span`
    font-size: ${p => p.theme.fontSizes.title}px;
    font-weight: ${p => p.theme.fontWeights.heading};
`