import React from 'react';
import styled from 'styled-components';
import { AuthenticateIDCardIcon, AuthenticateLicenseIcon, AuthenticateMeIcon } from '../../../Components/IconPack';

const Authentication = styled.div`
  width: 100%;
  min-height: 86px;
  height: fit-content;
  margin-top: 16px;
  padding: 12px;
  border: 2px solid #4708ae;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const AuthenticationIconWarp = styled.div``;
const AuthenticationTextWrap = styled.div`
  margin-left: 12px;
`;

const AuthenticationTheme = styled.div`
  ${(p) => p.theme.subTitle2};
  color: #4708ae;
  margin-bottom: 4px;
`;

const AuthenticationText = styled.div`
  ${(p) => p.theme.caption};
`;

export const AuthenticateMeBox = () => {
  return (
    <Authentication>
      <AuthenticationIconWarp>
        <AuthenticateMeIcon />
      </AuthenticationIconWarp>
      <AuthenticationTextWrap>
        <AuthenticationTheme>본인 인증 완료</AuthenticationTheme>
        <AuthenticationText>
          지브로 고객안전관리팀에서 실물, 거주지 주소, 연락처를 확인
          인증하였습니다.
        </AuthenticationText>
      </AuthenticationTextWrap>
    </Authentication>
  );
};

export const AuthenticateIDBox = () => {
  return (
    <Authentication>
      <AuthenticationIconWarp>
        <AuthenticateIDCardIcon />
      </AuthenticationIconWarp>
      <AuthenticationTextWrap>
        <AuthenticationTheme>신분증 인증 완료</AuthenticationTheme>
        <AuthenticationText>
          지브로 고객안전관리팀에서 주민등록증으로 전문가의 등록소재지를
          확인했습니다.
        </AuthenticationText>
      </AuthenticationTextWrap>
    </Authentication>
  );
};

export const AuthenticateHomeBox = () => {
  return (
    <Authentication>
      <AuthenticationIconWarp>
        <AuthenticateLicenseIcon />
      </AuthenticationIconWarp>
      <AuthenticationTextWrap>
        <AuthenticationTheme>
          거주지 인증 완료
        </AuthenticationTheme>
        <AuthenticationText>
            지브로 고객안전관리팀에서 유저가 해당 서비스를 받을 수 있는 거주지를 확인했습니다.
        </AuthenticationText>
      </AuthenticationTextWrap>
    </Authentication>
  );
};