import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import FindId from './FindId';
import FindPw from './FindPw';

const Container = styled.div`
    max-width: 720px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: #fff;
`;

const FindPassIdContainer = ({ history }) => {
    return (
        <Container>
            {
                history.location.pathname === '/FindId' &&
                <FindId />
            }
            {
                history.location.pathname === '/FindPw' &&
                <FindPw />
            }
        </Container>
    );
};

export default withRouter(FindPassIdContainer);