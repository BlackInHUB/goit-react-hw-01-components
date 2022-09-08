import styled from "styled-components";

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const setItemBgColor = ({ statLabel, theme }) => {
    switch (statLabel) {
      case '.docx':
        return theme.colors.docs;
    case '.pdf':
        return theme.colors.pdf;
    case '.mp3':
        return theme.colors.mp3;
    case '.psd':
        return theme.colors.psd;
    default:
        return theme.colors.black;
  }
};

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
    color: ${p => p.theme.colors.white};
    background-color: ${setItemBgColor};
    box-shadow: inset 0px 0px 6px 1px ${p => p.theme.colors.darkGrey};
`

export const ItemLable = styled.span`

`

export const ItemPercentage = styled.span`
    font-size: ${p => p.theme.fontSizes.title}px;
`

