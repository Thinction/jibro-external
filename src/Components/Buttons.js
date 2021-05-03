import React, { useState } from 'react';
import styled from 'styled-components';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { MdFileUpload, MdCancel } from 'react-icons/md';

const Type1Button = styled.button`
    ${ props => props.theme.subTitle1 };
    border: none;
    width: 100%;
    height: 48px;
    border-radius: 8px;
    background: ${ props => props.theme.themeColor };
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin-top: ${ p => p.marginTop ? p.marginTop : 'unset'};
    margin-bottom: ${ p => p.marginBottom ? p.marginBottom : 'unset'};
`;

const Type2Button = styled.button`
    ${ props => props.theme.headLine6 };
    border: none;
    width: 100vw;
    max-width: 720px;
    height: 48px;
    background: ${ p => p.allWritten ? p.theme.themeColor : p.theme.themeBackgroundGray };
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    margin-top: ${ p => p.marginTop ? p.marginTop : 'unset'};
    margin-bottom: ${ p => p.marginBottom ? p.marginBottom : 'unset'};
    position: fixed;
    bottom: 0;
`;

const AsBtnWrapper = styled.button`
    width: 100%;
    height: 80px;
    border-radius: 8px;
    border: 2px solid;
    padding-left: 16px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    border-color: ${ p => p.isClick ? p.theme.themeColor : 'rgba(0, 0, 0, .38)'};
    >svg {
        stroke: ${ p => p.isClick ? p.theme.themeColor : 'rgba(0, 0, 0, .38)' };
    }
`;

const AsTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
`;

const AsText = styled.div`
    ${ props => props.theme.headLine6 };
`;

const AsDescription = styled.div`
    ${ props => props.theme.body2 };
`;

const BtnWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BtnLabel = styled.label`
    ${ props => props.theme.subTitle2 };
    margin-bottom: 8px;
`;

const UploadFile = styled.button`
    ${ props => props.theme.subTitle2 };
    width: 149px;
    height: 40px;
    border-radius: 20px;
    background: #fff;
    border: 1px solid;
    border-color: ${ props => props.theme.themeColor };
    color: ${ props => props.theme.themeColor };
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        color: ${ props => props.theme.themeColor };
        margin-right: 8px;
    }
`;

const UploadComplete = styled.button`
    ${ props => props.theme.subTitle2 };
    width: 149px;
    height: 40px;
    border-radius: 20px;
    background: #fff;
    border: 1px solid;
    border-color: rgba(0, 0, 0, .12);
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        color: rgba(0, 0, 0, .6);
        margin-left: 8px;
    }
`;

export const BtnType1 = ({ children, onSubmit, marginTop, marginBottom }) => {
    return (
        <Type1Button
            onSubmit={onSubmit}
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            {children}
        </Type1Button>
    );
};

export const AsSomeBtn = ({isClick, text, description, onClick}) => {

    return (
        <AsBtnWrapper
            onClick={(e) => {
                e.preventDefault();
                onClick()
            }}
            isClick={isClick}
        >
            <IoCheckmarkCircleOutline
                size={24}
            />
            <AsTextWrapper>
                <AsText>{text}</AsText>
                <AsDescription>{description}</AsDescription>
            </AsTextWrapper>
        </AsBtnWrapper>
    );
};

export const BtnType2 = ({ children, marginTop, marginBottom, disabled, type, allWritten, onClick }) => {
    return (
        <Type2Button
            type={type}
            marginTop={marginTop}
            marginBottom={marginBottom}
            disabled={disabled}
            allWritten={allWritten}
            onClick={e => {
                e.preventDefault();
                onClick && onClick();
            }}
        >
            {children}
        </Type2Button>
    );
};

export const AuthenticateFileUpload = ({title}) => {
    const [ complete, setComplete ] = useState(false);
    const isSetComplete = () => {
        setComplete(!complete);
    }

    return (
        <BtnWrapper
            onClick={isSetComplete}
        >
            <BtnLabel>{title}</BtnLabel>
            {
                complete ?
                <UploadComplete
                    onClick={e => e.preventDefault()}
                >
                    파일 첨부완료
                    <MdCancel
                        size={24}
                    />
                </UploadComplete>
                :
                <UploadFile
                    onClick={e => e.preventDefault()}
                >
                    <MdFileUpload
                        size={24}
                    />
                    파일 첨부하기
                </UploadFile>
            }
        </BtnWrapper>
    );
};