import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const Container = styled.div`
    max-width: 720px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: #fff;
`;

const LoginContainer = () => {
    return (
        <Container>
            <Login />
        </Container>
    );
};

export default LoginContainer;