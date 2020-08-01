import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled, { css } from 'styled-components';

const Main = styled.main`
    background-color: var(--blackSoft);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll })=> css`
        padding: ${paddingAll}
    `}
`;

function Template({children, paddingAll}){
    return (
        <>
            <Menu />
                {/* conteudo que vai mudar */}
                <Main paddingAll={paddingAll}>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default Template;