import React from 'react';
import styled from 'styled-components';
import SignUp from './SignUp';

const Container = styled.div`
    max-width: 720px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    padding-bottom: 72px;
`;

const SignUpContainer = () => {
    return (
        <Container>
            <SignUp />
        </Container>
    );
}

export default SignUpContainer;