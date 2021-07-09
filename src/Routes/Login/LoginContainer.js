import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const Container = styled.div`
    max-width: 720px;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    background: #fff;
`;

const LoginContainer = ({onClick}) => {
    return (
        <Container>
            <Login
                onClick={onClick}
            />
        </Container>
    );
};

export default LoginContainer;