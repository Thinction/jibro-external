import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0%;
    z-index: 991;
    background: rgba(0, 0, 0, .06);
`;

const Popup1Container = styled.div`
    width: 280px;
    height: 136px;
    border-radius: 4px;
    background: #fff;
    position: fixed;
    top: calc(50vh - 68px);
    left: calc(50vw - 140px);
    z-index: 992;
    box-shadow: 0 6px 10px rgba(0, 0, 0, .4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const PopupText = styled.div`
    ${ props => props.theme.body2 };
    margin: 24px 24px 0 24px;
    word-break: keep-all;
`;

const BtnWrapper = styled.div`
    width: 100%;
    height: 52px;
    display: flex;
    padding-right: 8px;
    justify-content: flex-end;
    align-items: center;
`;

const EnterBtn = styled.button`
    ${ props => props.theme.btnText };
    color: ${ props => props.theme.themeColor };
    width: 41px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PopupType1 = ({ children, onClick, onClickRemove }) => {
    return (
        <>
            <Overlay
                onClick={e => {
                    e.preventDefault();
                    onClickRemove && onClickRemove();
                }}
            />
            <Popup1Container>
                <PopupText>{children}</PopupText>
                <BtnWrapper>
                    <EnterBtn
                        onClick={e => {
                            e.preventDefault();
                            onClick && onClick();
                        }}
                    >
                        확인
                    </EnterBtn>
                </BtnWrapper>
            </Popup1Container>  
        </>
    );
}