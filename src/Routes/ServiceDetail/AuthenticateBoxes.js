import React from "react";
import styled from "styled-components";
import {
  AuthenticateIDCardIcon,
  AuthenticateLicenseIcon,
  AuthenticateMeIcon,
} from "../../Components/IconPack";

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

export const AuthenticateLicenseBox = () => {
  return (
    <Authentication>
      <AuthenticationIconWarp>
        <AuthenticateLicenseIcon />
      </AuthenticationIconWarp>
      <AuthenticationTextWrap>
        <AuthenticationTheme>자격증 인증 완료</AuthenticationTheme>
        <AuthenticationText>
          지브로 고객안전관리팀에서 전문가가 해당 서비스를 전문적으로 운영
          가능함을 확인했습니다.
        </AuthenticationText>
      </AuthenticationTextWrap>
    </Authentication>
  );
};

const PurpleInfoWrap = styled.div`
  width: 100%;
  height: fit-content;
  padding: 12px;
  margin-bottom: 16px;
  border: 2px solid #4708ae;
  border-radius: 8px;
`;

const PurpleInfoTheme = styled.div`
  ${(p) => p.theme.subTitle3}
  margin-bottom: 12px;
`;

const PurpleInfoText = styled.div`
  ${(p) => p.theme.body2}
  white-space: pre-line;
  word-break: break-all;
`;

export const PurpleInfoBox = ({ title, contents }) => {
  return (
    <PurpleInfoWrap>
      <PurpleInfoTheme>{title}</PurpleInfoTheme>
      <PurpleInfoText>{contents}</PurpleInfoText>
    </PurpleInfoWrap>
  );
};
