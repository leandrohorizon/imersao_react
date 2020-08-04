import styled from 'styled-components';

export const Title = styled.span`
    background-color: ${props => props.color};
    padding: 5px 20px;
    width: 100%;
    display: flex;
    height: 0;
    transition: 0.3s;
    opacity: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
`