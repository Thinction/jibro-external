import React from 'react';
import styled from 'styled-components';
import { LogoSymbol, TypoLogo } from '../Components/IconPack';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${ props => props.theme.themeColor };
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SplashText = styled.div`
    font-weight: 400;
    font-size: 32px;
    letter-spacing: -0.02em;
    color: #fff;
    width: 343px;
    height: 236px;
    padding-left: 40px;
    padding-top: 48px;
    display: flex;
    flex-direction: column;
    line-height: 47px;
`;

const SplashEmphasis = styled.span`
    font-weight: 700;
`;

const LogoWrapper = styled.div`
    margin-top: 33px;
`;

const TypoWrapper = styled.div`
    margin-top: 24px;
`;

const Splash = () => {
    return (
        <Container>
            <SplashText>
                <p>
                    <SplashEmphasis>
                        방문 서비스
                    </SplashEmphasis>
                    의
                </p>
                <p>모든것</p>
            </SplashText>
            <LogoWrapper>
                <LogoSymbol
                    color={'#fff'}
                    size={'130px'}
                />
            </LogoWrapper>
            <TypoWrapper>
                <TypoLogo
                    color={'#fff'}
                    width={'200px'}
                    height={'50px'}
                />
            </TypoWrapper>
        </Container>
    );
}

export default Splash;