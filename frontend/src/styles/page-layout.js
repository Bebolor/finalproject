import styled from 'styled-components';

export const PageContainer = styled.div`
    min-height: 100vh;
    min-width: 100%;
    width: fit-content;
    height: fit-content;
    display: grid;
    grid-template-rows: 1fr auto;
    padding: 5vw;
    background: ${props => props.theme.backgroundDarkNavy };
`;

export const PageContent = styled.div`
    min-height: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme.backgroundDarkNavy };
    box-shadow: ${props => props.theme.boxShadowDark};
    //border: solid red 2px;
`;
