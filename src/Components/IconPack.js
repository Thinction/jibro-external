import * as React from "react"
import styled from "styled-components";

export const LogoSymbol = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox='0 0 130 130'
    >
      <path
        data-name="\uD328\uC2A4 56"
        d="M109.818 54.253a2.621 2.621 0 01-2.646 2.646H93.94v39.694a7.928 7.928 0 01-7.939 7.939H27.785a7.928 7.928 0 01-7.939-7.939V56.899H6.615a2.621 2.621 0 01-2.646-2.646 2.678 2.678 0 01.847-1.958l52.077-48.32 21.17 19.635V9.267H93.94v29.056l6.086 5.663 8.943 8.309a2.679 2.679 0 01.847 1.958z"
        fill="none"
      />
      <path
        data-name="\uD328\uC2A4 61"
        d="M94.276 130a3.989 3.989 0 01-2.376-.789c-3.414-2.545-33.348-25.45-33.348-44.826a20.545 20.545 0 0135.724-13.84 20.545 20.545 0 0135.726 13.84c0 19.376-29.934 42.276-33.348 44.827a3.989 3.989 0 01-2.378.788zM79.087 71.784a12.61 12.61 0 00-12.6 12.6c0 11.993 18.269 29.034 27.785 36.629 9.516-7.6 27.785-24.657 27.785-36.629a12.6 12.6 0 00-24.144-5.049c-1.26 2.895-6.023 2.895-7.282 0a12.565 12.565 0 00-11.544-7.551z"
        fill={color}
      />
      <path
        data-name="\uD328\uC2A4 62"
        d="M51.756 108.5H27.869a11.94 11.94 0 01-11.944-11.908V60.868h-9.29a6.627 6.627 0 01-4.464-11.532L54.357 1.064a3.984 3.984 0 015.42 0l14.545 13.448V9.267a3.977 3.977 0 013.981-3.969h15.925a3.977 3.977 0 013.981 3.969v27.325l13.807 12.792-5.42 5.822-15.075-13.973a4 4 0 01-1.271-2.911V13.236h-7.96V23.61a3.981 3.981 0 01-6.688 2.911L57.065 9.389 9.996 52.93h9.911a3.977 3.977 0 013.981 3.969v39.693a3.98 3.98 0 003.981 3.969h23.887zM7.575 55.174l-.037.032.037-.032z"
        fill={color}
      />
    </svg>
  )
};

export const TypoLogo = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 200 50"
      fill={color}
    >
      <g data-name="\uADF8\uB8F9 519">
        <path
          data-name="\uD328\uC2A4 349"
          d="M23.711 32.787c-.068 6.762-3.4 8.47-7.212 8.607-2.994.137-6.055-.683-8.913-4.235-3.538-4.372-10.07 1.639-6.6 5.806 4.218 5.464 9.049 7.036 14.833 7.036 11.771 0 16.874-6.489 16.874-17.213V5.805c0-5.738-8.981-5.738-8.981 0zm18.03 12.018c0 5.806 8.981 5.669 8.981 0v-39c0-5.806-8.981-5.6-8.981 0zm45.655-30.051c0 3.62-1.837 5.464-4.763 5.464H68.277V10.041h14.356a4.766 4.766 0 014.763 4.713zm-2.518 34.221c10.206 0 15.513-6.421 15.513-14.276a11.456 11.456 0 00-7.756-11.339 10.851 10.851 0 003.742-8.607c0-6.967-4.831-13.046-13.744-13.046H63.514a4.028 4.028 0 00-4.15 4.235v38.8a4.066 4.066 0 004.15 4.235zm-16.6-20.423h16.6c7.893 0 7.893 12.09 0 12.09h-16.6zm47.831 3.62h10.682l10.271 14.754c4.082 5.191 11.158.137 7.62-5.123l-9.049-11.066c14.424-5.806 10.886-29.03-6.4-29.03h-18.1a4.075 4.075 0 00-4.082 4.167v38.8c0 6.011 9.049 5.806 9.049-.137zm0-22.2h13.132c9.389 0 8.845 14.344 0 14.344h-13.133zm83.892 15.1c0-16.189-12.451-24.454-24.358-25.068-12.587 0-25.651 8.265-25.651 25.068 0 16.733 13.063 25.133 25.65 24.586 11.907 0 24.358-8.401 24.358-24.59zm-8.913 0c0 10.724-8.369 16.189-16.193 16.189-7.62 0-15.921-5.464-15.921-16.189 0-10.792 8.3-16.189 15.921-16.189 7.823-.003 16.192 5.393 16.192 16.185z"
        />
      </g>
    </svg>
  )
};

const ProfileCircleContainer = styled.div`
  width: ${ p => p.size };
  height: ${ p => p.size };
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const ProfileCircle = ({size, src}) => {
  return (
    <ProfileCircleContainer
      size={size}
    >
      <ProfileImg
        src={
          src ? src : './img/defaultProfile.png'
        }
      />
    </ProfileCircleContainer>
  );
};

export const IconCustomSignIn = (props, {width, height}) => {
  return (
    <svg
      data-name="icon / Custom / sign-in"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 11"
      {...props}
    >
      <g data-name="\uADF8\uB8F9 490" fill="#c699f6">
        <path data-name="\uD328\uC2A4 478" d="M4 6a1 1 0 111-1 1 1 0 01-1 1z" />
        <path
          data-name="\uD328\uC2A4 479"
          d="M5.626 8.5h-3.25a.375.375 0 01-.375-.375v-.25A1.376 1.376 0 013.376 6.5h1.25a1.376 1.376 0 011.375 1.375v.25a.374.374 0 01-.374.375z"
        />
        <path
          data-name="\uD328\uC2A4 480"
          d="M10.41 6.006l-.75-.875a.375.375 0 00-.66.245v.375H7.5a.5.5 0 100 1H9v.375a.375.375 0 00.66.244l.75-.875a.375.375 0 000-.489z"
        />
      </g>
      <path
        data-name="\uD328\uC2A4 481"
        d="M10.5 0h-9A1.5 1.5 0 000 1.5v8A1.5 1.5 0 001.5 11h9A1.5 1.5 0 0012 9.5v-8A1.5 1.5 0 0010.5 0zm0 10h-9a.5.5 0 01-.5-.5v-7h10v7a.5.5 0 01-.5.5z"
        fill="#793bce"
      />
    </svg>
  )
}