import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { withRouter } from 'react-router';

const Container = styled.header`
    width: 100vw;
    max-width: 720px;
    height: 56px;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 990;
`;

const Title = styled.div`
    ${ props => props.theme.headLine6 };
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderType1 = withRouter(({children, history}) => {
    return (
        <Container>
            <MdKeyboardArrowLeft
                onClick={() => history.go(-1)}
                size={24}
                style={{position: 'relative', zIndex: 1}}
            />
            <Title>
                {children}
            </Title>
        </Container>
    );
});