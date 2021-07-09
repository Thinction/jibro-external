import * as React from "react";
import styled from "styled-components";

export const LogoSymbol = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 130 130"
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
  );
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
  );
};

const ProfileCircleContainer = styled.div`
  width: ${(p) => p.size + "px"};
  height: ${(p) => p.size + "px"};
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const ProfileCircle = ({ size, src, id, history }) => {
  return (
    <ProfileCircleContainer size={size}>
      <ProfileImg src={src ? src : "/img/defaultProfile.png"} />
    </ProfileCircleContainer>
  );
};

const ProfileSquareContainer = styled.div`
  width: ${(p) => p.size + "px"};
  height: ${(p) => p.size + "px"};
  border-radius: 16px;
  overflow: hidden;
`;

export const ProfileSquare = ({ size, src }) => {
  return (
    <ProfileSquareContainer size={size}>
      <ProfileImg src={src ? src : "/img/defaultProfile.png"} />
    </ProfileSquareContainer>
  );
};

export const IconCustomSignIn = (props, { width, height }) => {
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
  );
};

export const MainHeadingContent = (props, { width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 360 130"
      {...props}
    >
      <g data-name="Component / Main / Top">
        <path fill="#fff" d="M0 0h360v130H0z" />
        <g data-name="\uADF8\uB8F9 91">
          <g data-name="\uADF8\uB8F9 72">
            <g data-name="\uADF8\uB8F9 71" fill="#f7a59c">
              <path
                data-name="\uD328\uC2A4 172"
                d="M202.747 71.323l5-9.791-5.887-8.773 5.591-2.908 4.409 7.509c1.546 2.657 2.107 4.525.578 6.308l-7.56 9.509z"
              />
              <path
                data-name="\uD328\uC2A4 173"
                d="M203.468 70.892s-1.151-.127-1.334 2.623-.874 4.561 1.013 4.691 5.109-1.45 2.911-3.667l-.818-2.333z"
              />
            </g>
            <path
              data-name="\uD328\uC2A4 174"
              d="M201.255 42.84s4.99.48 7.9 8.231l-8.076 6.009-1.387-4.75z"
              fill="#fdc75b"
            />
          </g>
          <g data-name="\uADF8\uB8F9 80">
            <g data-name="\uADF8\uB8F9 75">
              <g data-name="\uADF8\uB8F9 74">
                <path
                  data-name="\uD328\uC2A4 175"
                  d="M183.387 121.267l.141-10.175 4.265-.217-.606 10.638z"
                  fill="#fff"
                />
                <g data-name="\uADF8\uB8F9 73">
                  <path
                    data-name="\uD328\uC2A4 176"
                    d="M187.664 119.516s-3.258 1.41-4.787-.81l-7.913 4.288 13.712-.093z"
                    fill="#09090b"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 44"
                    fill="#fff"
                    d="M188.684 124.108l-13.713.092-.008-1.21 13.713-.092z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 177"
                d="M187.486 116.246l-.056 1-3.972-1.038z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 78">
              <g data-name="\uADF8\uB8F9 77">
                <path
                  data-name="\uD328\uC2A4 178"
                  d="M205.709 121.284l-1.258-10.175-4.265-.217 1.729 10.638z"
                  fill="#fff"
                />
                <g data-name="\uADF8\uB8F9 76">
                  <path
                    data-name="\uD328\uC2A4 179"
                    d="M201.199 119.516s3.258 1.41 4.787-.81l7.913 4.288-13.712-.093z"
                    fill="#09090b"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 45"
                    fill="#fff"
                    d="M200.189 122.905l13.713.092-.008 1.21-13.713-.092z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 180"
                d="M200.866 115.078l4.161.674-.133-1.078z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 79">
              <path
                data-name="\uD328\uC2A4 181"
                d="M184.27 68.753l-3.165 47.44 9.388.076 3.3-40.178 3.583 39.341 10.226-1.027-4.877-45.652z"
                fill="#123c5e"
              />
              <path
                data-name="\uC120 4"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M193.791 76.09l3.32-1.193"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 84">
            <g data-name="\uADF8\uB8F9 82">
              <g data-name="\uADF8\uB8F9 81" fill="#ffb1a5">
                <path
                  data-name="\uD328\uC2A4 182"
                  d="M180.208 50.508l-2.228 2.858-3.061-10.286-3.272.367 1.554 13.05a3.731 3.731 0 006.119 2.88l6.023-5.3z"
                />
                <path
                  data-name="\uD328\uC2A4 183"
                  d="M168.324 37.805a.365.365 0 01.542-.039l1.85 2.118-.787-3.622a.385.385 0 01.739-.212l1.151 3.258-.6-4.045a.346.346 0 01.677-.138l.973 3.681-.22-3.213a.411.411 0 01.44-.415c.245-.014.4.243.429.434l.564 4.505.581-1.4a.507.507 0 011 .093c.152 3.272-.886 4.5-.886 4.5l-2.829.764a5.859 5.859 0 01-1.983-3.207l-1.644-2.633a.356.356 0 01.003-.429z"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 184"
                d="M186.808 42.536a6.141 6.141 0 00-3.608 2.3 58.937 58.937 0 00-3.636 5.721l5.354 5.509 2.449-2.034z"
                fill="#fdc75b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 83">
              <path
                data-name="\uD328\uC2A4 185"
                d="M186.816 42.536l-.474 3.176s-1.176 3.526-.948 4.426l-1.464 18.6 19.665 2.265-1.286-25.408a5.615 5.615 0 00.034-1.639 1.3 1.3 0 00-1.216-1.137l-3.944-.2z"
                fill="#fdc75b"
              />
              <path
                data-name="\uC120 5"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M202.53 49.851l.26 5.791"
              />
              <path
                data-name="\uC120 6"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M184.922 56.065l.468-5.927"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 90">
            <g data-name="\uADF8\uB8F9 85">
              <path
                data-name="\uD328\uC2A4 186"
                d="M197.303 42.459l-.217-5.36-4.22-.118-.257 6.285c-.028.688.57.564 1.255.528l2.327-.118a1.168 1.168 0 001.112-1.217z"
                fill="#ffb1a5"
              />
            </g>
            <path
              data-name="\uD328\uC2A4 187"
              d="M193.018 38.217l4.214 2.48-.147-3.6z"
              fill="#4a280d"
            />
            <g data-name="\uADF8\uB8F9 86">
              <path
                data-name="\uD328\uC2A4 188"
                d="M202.121 33.286a1.58 1.58 0 11-1.58-1.58 1.581 1.581 0 011.58 1.58z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 189"
                d="M199.656 33.627a1.312 1.312 0 011.388-.858"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <g
              data-name="\uADF8\uB8F9 87"
              transform="translate(188.056 31.706)"
            >
              <circle
                data-name="\uD0C0\uC6D0 7"
                cx={1.58}
                cy={1.58}
                r={1.58}
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 190"
                d="M2.466 1.921a1.312 1.312 0 00-1.388-.858"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <path
              data-name="\uD328\uC2A4 191"
              d="M200.002 30.462a21.946 21.946 0 01-.581 4.985 4.351 4.351 0 01-2.217 2.731l-.2.121a3.945 3.945 0 01-3.961.045 4.357 4.357 0 01-2.347-2.914 32.23 32.23 0 01-.533-4.968s-.457-5.083 4.852-4.985a4.675 4.675 0 014.987 4.985z"
              fill="#ffb1a5"
            />
            <g data-name="\uADF8\uB8F9 88" fill="#4a280d">
              <path
                data-name="\uD328\uC2A4 192"
                d="M190.438 32.527s1.12-3.611.31-5.946c.002-.003-3.129.897-.31 5.946z"
              />
              <path
                data-name="\uD328\uC2A4 193"
                d="M199.803 32.527s-1.413-3.611-.6-5.947c-.004-.002 2.918.72.6 5.947z"
              />
            </g>
            <g data-name="\uADF8\uB8F9 89">
              <path
                data-name="\uD328\uC2A4 194"
                d="M194.747 33.455v.657a.255.255 0 00.3.257l.35-.073"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
              <path
                data-name="\uD328\uC2A4 195"
                d="M194.271 30.437l-2.968.355a1.565 1.565 0 011.45-.917c1.213-.135 1.518.562 1.518.562z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 196"
                d="M195.856 30.437l2.968.355a1.565 1.565 0 00-1.45-.917c-1.218-.135-1.518.562-1.518.562z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 197"
                d="M193.328 35.142h3.114s-.245.8-1.557.8a1.812 1.812 0 01-1.557-.8z"
                fill="#fff"
              />
              <path
                data-name="\uD328\uC2A4 198"
                d="M196.527 32.601a.823.823 0 011.227 0"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.5}
              />
              <path
                data-name="\uD328\uC2A4 199"
                d="M192.172 32.601a.823.823 0 011.227 0"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.5}
              />
            </g>
            <path
              data-name="\uD328\uC2A4 200"
              d="M190.978 28.2a1.808 1.808 0 012.508-.722 7.326 7.326 0 006.073 1.041l-.381-1.949a5.768 5.768 0 00-8.449 0z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 201"
              d="M190.727 26.572s.257-2.948 4.415-3.2 5.394 1.963 5.394 1.963l-.756.135a5.353 5.353 0 011.834 1.233l-.818.285 1.078.959s-3.391 1.317-5.272.612l-1.557-2.355z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 202"
              d="M192.64 42.536l-2.494.031s-.268 2.528 4.6 2.652 4.948-2.488 4.948-2.488l-2.632-.192h-4.423z"
              fill="#ffb1a5"
            />
          </g>
        </g>
        <g data-name="\uADF8\uB8F9 108">
          <g data-name="\uADF8\uB8F9 99">
            <g data-name="\uADF8\uB8F9 94">
              <g data-name="\uADF8\uB8F9 93">
                <g data-name="\uADF8\uB8F9 92">
                  <path
                    data-name="\uD328\uC2A4 203"
                    d="M208.482 121.426l-2.906 1.433a.723.723 0 00-.4.829c.076.26.322.5.968.513 1.436.025 7.794-.965 7.794-.965v.666l2.951-.333s.206-3.374-.691-3.867z"
                    fill="#20120c"
                  />
                  <path
                    data-name="\uD328\uC2A4 204"
                    d="M213.167 118.053l-4.683 3.377s.5 1.289 2.719.429 5-2.152 5-2.152l-.406-2.017z"
                    fill="#ffb1a5"
                  />
                </g>
                <path
                  data-name="\uD328\uC2A4 205"
                  d="M216.2 119.706l1.93-12.511-4.68.446-.8 11.619z"
                  fill="#ffb1a5"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 206"
                d="M212.933 115.161l3.834.858.133-.858z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 97">
              <g data-name="\uADF8\uB8F9 96">
                <g data-name="\uADF8\uB8F9 95">
                  <path
                    data-name="\uD328\uC2A4 207"
                    d="M241.756 121.433l2.906 1.433a.723.723 0 01.4.829c-.076.26-.324.46-.97.471-1.436.025-7.794-.925-7.794-.925v.666l-2.951-.333s-.206-3.374.691-3.867z"
                    fill="#20120c"
                  />
                  <path
                    data-name="\uD328\uC2A4 208"
                    d="M237.078 118.053l4.683 3.377s-.5 1.289-2.719.429-5-2.152-5-2.152l.406-2.017z"
                    fill="#ffb1a5"
                  />
                </g>
                <path
                  data-name="\uD328\uC2A4 209"
                  d="M234.042 119.706l-1.93-12.511 4.677.446.8 11.619z"
                  fill="#ffb1a5"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 210"
                d="M233.302 114.91l3.992.028.065.979z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 98">
              <path
                data-name="\uD328\uC2A4 211"
                d="M221.015 57.51s-4.014 1.3-6.979 14.9-4.011 32.647-4.533 42.745h10.734l5.619-42.085 2.654 41.8 10.776.073s-.623-52.858-9.016-57.44h-9.255z"
                fill="#3a2c32"
              />
              <path
                data-name="\uC120 7"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M225.856 73.076l2.832-1.075"
              />
              <path
                data-name="\uC120 8"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M209.754 110.43h10.956"
              />
              <path
                data-name="\uC120 9"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M228.344 110.43h10.784"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 104">
            <path
              d="M229.819 41.013a6.222 6.222 0 014.677 2.81c1.74 2.708 7.047 6.92 15.239 9.758l.875 5.061s-13.938-3.49-19.442-9.2z"
              fill="#f7a59c"
            />
            <g data-name="\uADF8\uB8F9 100">
              <path
                data-name="\uD328\uC2A4 212"
                d="M216.919 42.624s-1.456 3.433 1.639 8.347l2.652-2.731-1.1-5.089z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 213"
                d="M220.194 41.752l-3.275.872a9.885 9.885 0 011.639 8.347l2.457 5.157 9.315.025 1.994-6.158c.547-1.693.968-3.484.135-5.055l-2.13-3.9-2.045-.087z"
                fill="#fff"
              />
              <path
                data-name="\uD328\uC2A4 214"
                d="M221.015 56.125v1.388s9.416.214 9.255 0 .059-1.363.059-1.363z"
                fill="#ffb1a5"
              />
            </g>
            <g data-name="\uADF8\uB8F9 103">
              <g data-name="\uADF8\uB8F9 102" fill="#ffb1a5">
                <path
                  data-name="\uD328\uC2A4 215"
                  d="M216.919 42.624s-3.659-.034-6.045 4.471l-6.8 8.4a2.915 2.915 0 002.014 4.392 1.87 1.87 0 002.223-1.148l9.526-9.724z"
                />
                <g data-name="\uADF8\uB8F9 101">
                  <path
                    data-name="\uD328\uC2A4 216"
                    d="M217.842 65.964l-12.274-6.2a2.824 2.824 0 01-1.856-3.281 2.565 2.565 0 013.867-1.839l11.7 8.26z"
                  />
                  <path
                    data-name="\uD328\uC2A4 217"
                    d="M218.409 62.709l2.364-.615-2.316 4.513-2.268-1.4z"
                  />
                </g>
              </g>
              <path
                data-name="\uC120 10"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M221.305 61.039l-3.529 6.9"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 107">
            <path
              data-name="\uD328\uC2A4 218"
              d="M226.632 25.442a4.514 4.514 0 014.152 4.358c.271 3.111-.33 4.505 2.037 6.993 0 0-6.925 4.088-16.858 1.08a14.278 14.278 0 001.817-6.279c-.051-3.058.824-4.4 2.418-5.563s4.837-1.839 6.434-.589z"
              fill="#fb6045"
            />
            <path
              data-name="\uD328\uC2A4 219"
              d="M227.904 32.97a1.762 1.762 0 101.788-1.735 1.761 1.761 0 00-1.788 1.735z"
              fill="#ef968f"
            />
            <path
              data-name="\uD328\uC2A4 220"
              d="M226.386 37.428l-.031 3.82c-.008 1.188-.745 1.035-1.915 1.018-1-.014-2.223.26-2.333-.733l.307-5.78z"
              fill="#ffb1a5"
            />
            <path
              data-name="\uD328\uC2A4 221"
              d="M226.366 39.644l-3.732-3.131 3.76.567z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 222"
              d="M226.271 38.108a4.292 4.292 0 004-4.011l-.093-3.992a4.279 4.279 0 00-4.212-4.2c-2.361-.037-4.72 1.842-4.756 4.206l.121 3.492a4.7 4.7 0 004.94 4.505z"
              fill="#ffb1a5"
            />
            <g data-name="\uADF8\uB8F9 105">
              <path
                data-name="\uD328\uC2A4 223"
                d="M227.901 33.439l.1.556a.229.229 0 01-.206.268l-.31.028"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
              <path
                data-name="\uD328\uC2A4 224"
                d="M225.49 30.784s.956-.13.987.26c0 0 .014.265-.821.361s-1.3.09-1.394-.155.779-.44 1.228-.466z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 225"
                d="M229.264 30.72s-.8-.039-.841.333c0 0-.025.251.671.268s.917-.082.973-.285c.063-.232-.425-.33-.803-.316z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 226"
                d="M228.81 32.463a.4.4 0 10.395-.412.4.4 0 00-.395.412z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 227"
                d="M225.273 32.535a.4.4 0 10.395-.412.4.4 0 00-.395.412z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 228"
                d="M228.573 35.01l-2.4-.161a2.063 2.063 0 001.506.443c.71 0 .894-.282.894-.282z"
                fill="#fd5269"
              />
            </g>
            <path
              data-name="\uD328\uC2A4 229"
              d="M225.857 40.621l2.75.372s-1.21 3.921-8.945.934l2.733-.852z"
              fill="#ffb1a5"
            />
            <path
              data-name="\uD328\uC2A4 230"
              d="M227.066 25.512s2 .838 1.472 2.189c-.646 1.664-4.107 3.958-7.588 4.587 0 0-1.893-2.976 0-4.8a6.986 6.986 0 013.36-2.037z"
              fill="#fb6045"
            />
            <path
              data-name="\uD328\uC2A4 231"
              d="M230.175 30.102s-2.931-2.04-2.846-3.859c0 0-.728-.7.97-.1a3.312 3.312 0 011.876 3.959z"
              fill="#fb6045"
            />
            <path
              data-name="\uD328\uC2A4 232"
              d="M223.45 30.55c0 .093-1.049 3.2-1.049 3.2l-.776-2.855z"
              fill="#fb6045"
            />
            <g data-name="\uADF8\uB8F9 106">
              <path
                data-name="\uD328\uC2A4 233"
                d="M219.239 33.3a1.775 1.775 0 101.8-1.746 1.778 1.778 0 00-1.8 1.746z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 234"
                d="M221.625 33.864s.02-1.286-1.213-1.1"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
          </g>
        </g>
        <g data-name="\uADF8\uB8F9 127">
          <g data-name="\uADF8\uB8F9 116">
            <g data-name="\uADF8\uB8F9 109" transform="translate(247.35 16)">
              <ellipse
                data-name="\uD0C0\uC6D0 8"
                cx={4.248}
                cy={4.288}
                rx={4.248}
                ry={4.288}
                transform="matrix(.841 -.54 .54 .841 0 4.59)"
                fill="#1f120c"
              />
              <ellipse
                data-name="\uD0C0\uC6D0 9"
                cx={3.512}
                cy={3.543}
                rx={3.512}
                ry={3.543}
                transform="rotate(-32.7 17.164 5.014)"
                fill="#fdbfb2"
              />
            </g>
            <g data-name="\uADF8\uB8F9 111">
              <g data-name="\uADF8\uB8F9 110">
                <path
                  data-name="\uD328\uC2A4 235"
                  d="M250.194 37.029l.031 5.594c.008 1.19.748 1.035 1.916 1.018 1-.014 1.929-.195 2.039-1.188l-.307-7.1z"
                  fill="#db8d7c"
                />
                <path
                  data-name="\uD328\uC2A4 236"
                  d="M254.108 39.43l-4.011-2.226 3.831-.905z"
                  fill="#4a280d"
                />
              </g>
            </g>
            <g data-name="\uADF8\uB8F9 112">
              <path
                data-name="\uD328\uC2A4 237"
                d="M257.762 29.571a5.61 5.61 0 11-11.21 0 5.608 5.608 0 0111.21 0z"
                fill="#1f120c"
              />
            </g>
            <g data-name="\uADF8\uB8F9 113">
              <path
                data-name="\uD328\uC2A4 238"
                d="M258.731 32.483a1.532 1.532 0 11-1.532-1.532 1.531 1.531 0 011.532 1.532z"
                fill="#db8d7c"
              />
              <path
                data-name="\uD328\uC2A4 239"
                d="M256.341 32.813a1.273 1.273 0 011.346-.832"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.4}
              />
            </g>
            <g
              data-name="\uADF8\uB8F9 114"
              transform="translate(245.41 30.951)"
            >
              <circle
                data-name="\uD0C0\uC6D0 10"
                cx={1.532}
                cy={1.532}
                r={1.532}
                fill="#db8d7c"
              />
              <path
                data-name="\uD328\uC2A4 240"
                d="M2.39 1.862a1.273 1.273 0 00-1.346-.832"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.4}
              />
            </g>
            <path
              data-name="\uD328\uC2A4 241"
              d="M256.789 29.664a20.886 20.886 0 01-.559 4.767 4.167 4.167 0 01-2.13 2.612l-.2.118a3.833 3.833 0 01-3.805.042 4.177 4.177 0 01-2.257-2.787 30.485 30.485 0 01-.513-4.75s-.44-4.863 4.663-4.767a4.476 4.476 0 014.801 4.765z"
              fill="#db8d7c"
            />
            <path
              data-name="\uD328\uC2A4 242"
              d="M255.244 25.489s-1.222 5.432-8.387 4.942c0 0 .282-5.363 3.755-5.808 0-.002 3.399-.488 4.632.866z"
              fill="#1f120c"
            />
            <path
              data-name="\uD328\uC2A4 243"
              d="M253.45 24.894a8.487 8.487 0 003.306 5.9l.44-1.783s.491-3.736-3.746-4.117z"
              fill="#1f120c"
            />
            <path
              data-name="\uD328\uC2A4 244"
              d="M248.318 29.571l-.829 2.327-.361-2.327z"
              fill="#1f120c"
            />
            <path
              data-name="\uD328\uC2A4 245"
              d="M255.777 29.571l.863 2.133.33-2.133z"
              fill="#1f120c"
            />
            <g data-name="\uADF8\uB8F9 115">
              <path
                data-name="\uD328\uC2A4 246"
                d="M251.814 32.691v.618a.241.241 0 00.288.24l.33-.068"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.4}
              />
              <path
                data-name="\uD328\uC2A4 247"
                d="M249.814 29.96s.968-.133 1 .262c0 0 .014.268-.832.367s-1.41.048-1.5-.2.878-.404 1.332-.429z"
                fill="#1f120c"
              />
              <path
                data-name="\uD328\uC2A4 248"
                d="M254.149 29.895s-1.013-.138-1.047.276c0 0-.014.279.872.384s1.478.051 1.574-.209-.919-.42-1.399-.451z"
                fill="#1f120c"
              />
              <path
                data-name="\uD328\uC2A4 249"
                d="M250.395 34.287a3.437 3.437 0 003.278-.127"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.4}
              />
              <path
                data-name="\uD328\uC2A4 250"
                d="M250.336 31.878a.429.429 0 11-.429-.426.426.426 0 01.429.426z"
                fill="#1f120c"
              />
              <path
                data-name="\uD328\uC2A4 251"
                d="M254.418 31.878a.429.429 0 11-.429-.426.426.426 0 01.429.426z"
                fill="#1f120c"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 122">
            <g data-name="\uADF8\uB8F9 118">
              <path
                data-name="\uD328\uC2A4 252"
                d="M245.904 121.559l-.141-8.11 3.845-.195-.282 8.525z"
                fill="#af5e4c"
              />
              <path
                data-name="\uD328\uC2A4 253"
                d="M245.78 114.436l3.788.02v.959z"
                fill="#09090b"
              />
              <path
                data-name="\uD328\uC2A4 254"
                d="M245.78 114.436l3.788.02v.959z"
                fill="#09090b"
              />
              <g data-name="\uADF8\uB8F9 117">
                <path
                  data-name="\uD328\uC2A4 255"
                  d="M250.064 119.979s-2.937 1.272-4.316-.731l-6.592 3.865 11.822-.082z"
                  fill="#3a2c32"
                />
                <path
                  data-name="\uC0AC\uAC01\uD615 46"
                  fill="#fff"
                  d="M250.983 124.12l-11.822.083-.007-1.092 11.821-.083z"
                />
              </g>
            </g>
            <g data-name="\uADF8\uB8F9 120">
              <path
                data-name="\uD328\uC2A4 256"
                d="M271.298 121.559l-1.636-8.11-3.845-.195 2.056 8.525z"
                fill="#af5e4c"
              />
              <g data-name="\uADF8\uB8F9 119">
                <path
                  data-name="\uD328\uC2A4 257"
                  d="M267.134 119.979s2.937 1.272 4.316-.731l6.593 3.865-11.822-.082z"
                  fill="#3a2c32"
                />
                <path
                  data-name="\uC0AC\uAC01\uD615 47"
                  fill="#fff"
                  d="M266.225 123.032l11.822.083-.008 1.092-11.822-.083z"
                />
              </g>
            </g>
            <g data-name="\uADF8\uB8F9 121">
              <path
                data-name="\uD328\uC2A4 258"
                d="M249.713 56.531s-6.8 7.681-6.663 15.82 1.549 42.085 1.549 42.085h6.186l2.251-45.789.818-.051 10.883 45.86 5.774-.612-6.9-44.105s-2.079-7.837-5.9-12.553z"
                fill="#3a2c32"
              />
              <path
                data-name="\uC120 11"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M254.864 68.884l-3.741-.652"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 126">
            <g data-name="\uADF8\uB8F9 124" fill="#db8d7c">
              <path
                data-name="\uD328\uC2A4 259"
                d="M243.591 45.781l-3.633 13.727a1.844 1.844 0 001.475 2.341 2.161 2.161 0 002.217-1.19l4.677-13.239a2.513 2.513 0 00-1.475-3.286 2.508 2.508 0 00-3.261 1.647z"
              />
              <g data-name="\uADF8\uB8F9 123">
                <path
                  data-name="\uD328\uC2A4 260"
                  d="M239.853 60.046l-1.551 14.1 2.756-.127 2.638-13.476a2.224 2.224 0 00-1.63-2.533 2.163 2.163 0 00-2.213 2.036z"
                />
                <path
                  data-name="\uD328\uC2A4 261"
                  d="M238.679 73.156s-3.845 4.849.062 7.425a.655.655 0 00.824-.09l.028-.031a.663.663 0 00.031-.894 2.41 2.41 0 01.172-3.45s.64.214.42 1.521a.534.534 0 00.533.632.548.548 0 00.5-.378c.288-.849.824-2.97-.448-4.22z"
                />
              </g>
            </g>
            <path
              data-name="\uD328\uC2A4 262"
              d="M256.863 43.964l18.847 17.459 2.209-2.683-17.53-17.346a2.679 2.679 0 00-3.484-.474l.11-.1a2.167 2.167 0 00-.152 3.144z"
              fill="#db8d7c"
            />
            <g data-name="\uADF8\uB8F9 125">
              <path
                data-name="\uD328\uC2A4 263"
                d="M250.705 40.993l-5.14 3.526 4.147 12.011 8 .654 1.063-11.016-.417-5.783z"
                fill="#db8d7c"
              />
              <path
                data-name="\uD328\uC2A4 264"
                d="M248.426 42.401s1.049 3.247 4.087 2.559 3.154-4.412 3.154-4.412l3.944-.3-1.582 14.655h-10.063l-2.979-10.863z"
                fill="#fdc75b"
              />
            </g>
          </g>
        </g>
        <g data-name="\uADF8\uB8F9 152">
          <g data-name="\uADF8\uB8F9 135">
            <g data-name="\uADF8\uB8F9 130">
              <g data-name="\uADF8\uB8F9 129">
                <path
                  data-name="\uD328\uC2A4 265"
                  d="M321.797 121.152l-.138-10.175-4.2-.22.6 10.638z"
                  fill="#faaeb0"
                />
                <g data-name="\uADF8\uB8F9 128">
                  <path
                    data-name="\uD328\uC2A4 266"
                    d="M317.59 119.398s3.207 1.41 4.717-.81l7.794 4.288-13.507-.093z"
                    fill="#3a2c32"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 48"
                    fill="#fff"
                    d="M316.592 122.788l13.507.092-.009 1.21-13.506-.092z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 267"
                d="M317.761 116.128l3.98 1-.011-1.035z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 133">
              <g data-name="\uADF8\uB8F9 132">
                <path
                  data-name="\uD328\uC2A4 268"
                  d="M290.33 121.341l3.913-10.172 4.2-.22-4.372 10.638z"
                  fill="#faaeb0"
                />
                <g data-name="\uADF8\uB8F9 131">
                  <path
                    data-name="\uD328\uC2A4 269"
                    d="M295.462 119.517s-3.207 1.41-4.717-.81l-7.794 4.288 13.507-.093z"
                    fill="#3a2c32"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 49"
                    fill="#fff"
                    d="M296.463 124.11l-13.507.092-.008-1.21 13.507-.092z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 270"
                d="M292.849 114.791l3.439 1.4.415-1.013z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 134">
              <path
                data-name="\uD328\uC2A4 271"
                d="M320.928 68.635l3.117 47.439-9.247.076-3.247-40.176-13.43 39.338-10.073-1.027 14.705-45.651z"
                fill="#f4cda6"
              />
              <path
                data-name="\uC120 12"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M311.552 75.975l-3.272-1.193"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 142">
            <g data-name="\uADF8\uB8F9 137">
              <g data-name="\uADF8\uB8F9 136" fill="#f7a59c">
                <path
                  data-name="\uD328\uC2A4 272"
                  d="M304.099 55.018a123.794 123.794 0 00-7.346 22.672l-2.536-.511s1.427-14.2 4.827-24.762z"
                />
                <path
                  data-name="\uD328\uC2A4 273"
                  d="M294.469 76.22s-4.288 5.47.135 8.426a.728.728 0 00.925-.1l.034-.034a.756.756 0 00.028-1.013 2.748 2.748 0 01.164-3.913s.725.248.488 1.729a.616.616 0 00.607.722.611.611 0 00.567-.423c.316-.962.9-3.365-.542-4.793z"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 274"
                d="M304.045 44.197s-3.442.97-6.09 7.724l6.415 3.924 1.365-3.633z"
                fill="#fff"
              />
            </g>
            <g data-name="\uADF8\uB8F9 140">
              <g data-name="\uADF8\uB8F9 139" fill="#ffb1a5">
                <path
                  data-name="\uD328\uC2A4 275"
                  d="M316.299 41.724l21.67-17.335 3.128.677c.792-.773-12.215 13.634-21.543 21.089z"
                />
                <g data-name="\uADF8\uB8F9 138">
                  <path
                    data-name="\uD328\uC2A4 276"
                    d="M342.556 25.315a2.707 2.707 0 01-3.814.618 2.8 2.8 0 01-.607-3.87 2.707 2.707 0 013.814-.618 2.8 2.8 0 01.607 3.87z"
                  />
                  <path
                    data-name="\uD328\uC2A4 277"
                    d="M339.848 20.962s-.747-1.01-1.676.1a3.247 3.247 0 00.57 4.869z"
                  />
                </g>
                <path
                  data-name="\uD328\uC2A4 278"
                  d="M338.773 22.146l2.358-4.265a.519.519 0 01.646-.206.469.469 0 01.217.643l-1.024 2.6 2.361-1.851a.38.38 0 01.53-.034.393.393 0 01.062.528l-2.515 2.959z"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 279"
                d="M324.271 45.168l-2.3-8.209-5.377 3.357a9.016 9.016 0 01-2.1.683v1.385l1.805.288 1.76 9.664z"
                fill="#fff"
              />
            </g>
            <g data-name="\uADF8\uB8F9 141">
              <path
                data-name="\uD328\uC2A4 280"
                d="M315.389 40.784l2.229 3.453a3.574 3.574 0 011.715 3.063l1.935 21.323-19.368 2.265 1.266-25.408a.869.869 0 01.612-1.179l4.437-1.794z"
                fill="#fff"
              />
              <path
                data-name="\uC120 13"
                fill="none"
                stroke="#ccc"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="M302.968 49.196l-.251 5.639"
              />
              <path
                data-name="\uC120 14"
                fill="none"
                stroke="#ccc"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="M319.628 50.493l-.296-3.193"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 151">
            <g data-name="\uADF8\uB8F9 143">
              <path
                data-name="\uD328\uC2A4 281"
                d="M312.457 42.346l-.214-5.36-4.155-.118-.254 6.285c-.028.688.561.564 1.238.527l2.291-.118a1.165 1.165 0 001.094-1.216z"
                fill="#ffb1a5"
              />
            </g>
            <path
              data-name="\uD328\uC2A4 282"
              d="M308.238 38.101l4.15 2.477-.144-3.594z"
              fill="#4a280d"
            />
            <g data-name="\uADF8\uB8F9 144">
              <path
                data-name="\uD328\uC2A4 283"
                d="M317.202 33.168a1.557 1.557 0 11-1.557-1.58 1.569 1.569 0 011.557 1.58z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 284"
                d="M314.773 33.512a1.3 1.3 0 011.368-.858"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <g data-name="\uADF8\uB8F9 145">
              <path
                data-name="\uD328\uC2A4 285"
                d="M303.349 33.168a1.557 1.557 0 101.557-1.58 1.569 1.569 0 00-1.557 1.58z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 286"
                d="M305.775 33.512a1.3 1.3 0 00-1.368-.858"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <path
              data-name="\uD328\uC2A4 287"
              d="M315.116 30.344a22.344 22.344 0 01-.573 4.985 4.334 4.334 0 01-2.184 2.731l-.2.121a3.835 3.835 0 01-3.9.045 4.354 4.354 0 01-2.313-2.914 32.452 32.452 0 01-.525-4.968s-.451-5.083 4.779-4.985a4.657 4.657 0 014.916 4.985z"
              fill="#ffb1a5"
            />
            <g data-name="\uADF8\uB8F9 147" fill="#4a280d">
              <path
                data-name="\uD328\uC2A4 288"
                d="M305.696 32.409s1.1-3.611.3-5.947c.005 0-2.49 1.26-.3 5.947z"
              />
              <path
                data-name="\uD328\uC2A4 289"
                d="M314.917 32.409s-1.394-3.611-.592-5.947c0 0 2.511.968.592 5.947z"
              />
              <g data-name="\uADF8\uB8F9 146">
                <path
                  data-name="\uD328\uC2A4 290"
                  d="M305.636 27.001s6.911 3.6 9.591.748c0 0 2.195-2.243-.22-3.98s-7.955 1.317-7.955 1.317a2.077 2.077 0 00-1.416 1.915z"
                />
                <path
                  data-name="\uD328\uC2A4 291"
                  d="M305.636 27.001s-1.289-2.322 2.381-3.464c0 0 .892.931-.386 2.152a4.247 4.247 0 01-1.995 1.312z"
                />
              </g>
            </g>
            <g data-name="\uADF8\uB8F9 150">
              <g
                data-name="\uADF8\uB8F9 148"
                transform="translate(307.468 31.921)"
                fill="#4a280d"
              >
                <path
                  data-name="\uD328\uC2A4 292"
                  d="M.965.488A.482.482 0 11.483 0a.487.487 0 01.482.488z"
                />
                <ellipse
                  data-name="\uD0C0\uC6D0 11"
                  cx={0.482}
                  cy={0.488}
                  rx={0.482}
                  ry={0.488}
                  transform="translate(4.463)"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 293"
                d="M309.939 33.337v.657a.254.254 0 00.3.257l.347-.073"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
              <path
                data-name="\uD328\uC2A4 294"
                d="M309.469 30.88l-2.923.355a1.545 1.545 0 011.427-.917c1.197-.135 1.496.562 1.496.562z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 295"
                d="M311.031 30.88l2.922.355a1.546 1.546 0 00-1.428-.917c-1.192-.135-1.494.562-1.494.562z"
                fill="#4a280d"
              />
              <g
                data-name="\uADF8\uB8F9 149"
                transform="translate(305.657 30.634)"
                fill="none"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              >
                <path
                  data-name="\uD328\uC2A4 296"
                  d="M3.808 1.924A1.9 1.9 0 111.908 0a1.913 1.913 0 011.9 1.924z"
                />
                <ellipse
                  data-name="\uD0C0\uC6D0 12"
                  cx={1.904}
                  cy={1.924}
                  rx={1.904}
                  ry={1.924}
                  transform="translate(5.394)"
                />
                <path
                  data-name="\uD328\uC2A4 297"
                  d="M3.808 2.084a.915.915 0 011.585 0"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 298"
                d="M308.54 35.024h3.066s-.243.8-1.534.8a1.782 1.782 0 01-1.532-.8z"
                fill="#fff"
              />
            </g>
            <path
              data-name="\uD328\uC2A4 299"
              d="M309.299 42.074l-3.563 1.441 4.939 1.36 3.82-3.876z"
              fill="#ffb1a5"
            />
          </g>
        </g>
        <g data-name="\uADF8\uB8F9 175">
          <g data-name="\uADF8\uB8F9 159">
            <g data-name="\uADF8\uB8F9 155">
              <g data-name="\uADF8\uB8F9 154" fill="#ffb1a5">
                <path
                  data-name="\uD328\uC2A4 300"
                  d="M289.4 48.618l7.4 6.446a2.888 2.888 0 01.33 4.028 2.887 2.887 0 01-4.037.395l-6.226-5.049z"
                />
                <g data-name="\uADF8\uB8F9 153">
                  <path
                    data-name="\uD328\uC2A4 301"
                    d="M298.47 43.922l-5.786 12.39a2.635 2.635 0 001.4 3.566 2.638 2.638 0 003.543-1.786l3.681-13.4z"
                  />
                  <path
                    data-name="\uD328\uC2A4 302"
                    d="M304.919 38.418a.365.365 0 00-.542-.04l-1.851 2.119.787-3.622a.385.385 0 00-.739-.212l-1.151 3.258.6-4.045a.346.346 0 00-.677-.138l-.973 3.684.22-3.213a.411.411 0 00-.44-.415c-.245-.014-.4.243-.429.434l-.564 4.505-.31-1.4a.507.507 0 00-1 .093c-.152 3.272.615 4.5.615 4.5l2.829.764a5.859 5.859 0 001.983-3.207l1.649-2.628a.364.364 0 00-.007-.437z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 303"
                d="M283.493 44.641c3.749.838 8.392 5.2 8.392 5.2l-3.19 6.189-4.762-3.9z"
                fill="#82d2f5"
              />
            </g>
            <g data-name="\uADF8\uB8F9 157">
              <g data-name="\uADF8\uB8F9 156" fill="#ffb1a5">
                <path
                  data-name="\uD328\uC2A4 304"
                  d="M272.043 69.184l-4.113-11.007 6.661-5.372-5.148-3.633-5.021 4.319c-2.062 1.842-2.99 3.9-1.422 6.172l6.688 11.069z"
                />
                <path
                  data-name="\uD328\uC2A4 305"
                  d="M271.386 68.659s1.157.028.968 2.779.251 4.638-1.636 4.511-4.866-2.124-2.389-4.025l1.126-2.2z"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 306"
                d="M275.781 44.864c-2.987.581-8.545 5.267-8.545 5.267l2.883 6.415 5.061-3.678z"
                fill="#82d2f5"
              />
            </g>
            <g data-name="\uADF8\uB8F9 158">
              <path
                data-name="\uD328\uC2A4 307"
                d="M275.786 44.861a17.256 17.256 0 00-3.721 2.307l2.516 15.233 10.688-.44 1.82-14.248a1.882 1.882 0 00-1.174-1.831l-2.42-1.244c-1.201.497-7.709.223-7.709.223z"
                fill="#82d2f5"
              />
              <path
                data-name="\uC120 15"
                fill="none"
                stroke="#61bad8"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="M273.199 54.312l-.471-2.968"
              />
              <path
                data-name="\uC120 16"
                fill="none"
                stroke="#61bad8"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="M286.404 54.153l.324-3.109"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 167">
            <g data-name="\uADF8\uB8F9 162">
              <g data-name="\uADF8\uB8F9 161">
                <path
                  data-name="\uD328\uC2A4 308"
                  d="M286.869 121.497l.372-8.291-3.932-.2.062 8.719z"
                  fill="#faaeb0"
                />
                <g data-name="\uADF8\uB8F9 160">
                  <path
                    data-name="\uD328\uC2A4 309"
                    d="M282.928 119.884s3 1.3 4.415-.747l7.295 3.952-12.641-.085z"
                    fill="#09090b"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 50"
                    fill="#fff"
                    d="M281.998 123.007l12.64.085-.007 1.117-12.64-.085z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 310"
                d="M283.332 115.917l3.746.959.042-.959z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 165">
              <g data-name="\uADF8\uB8F9 164">
                <path
                  data-name="\uD328\uC2A4 311"
                  d="M268.237 121.497l1.066-8.291 3.932-.2-1.5 8.719z"
                  fill="#faaeb0"
                />
                <g data-name="\uADF8\uB8F9 163">
                  <path
                    data-name="\uD328\uC2A4 312"
                    d="M272.494 119.884s-3 1.3-4.415-.747l-7.295 3.952 12.641-.085z"
                    fill="#09090b"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 51"
                    fill="#fff"
                    d="M273.431 124.119l-12.64.085-.008-1.117 12.64-.085z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 313"
                d="M268.999 115.596l3.574 1.281.189-1.114z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 166">
              <path
                data-name="\uD328\uC2A4 314"
                d="M274.578 62.404s-2.141 2.92-3.735 10.562c-1.678 8.042-4.454 42.514-4.454 42.514l9.9.437 4.034-38.539.037 38.539h9.543s3.879-46.035-4.64-53.953z"
                fill="#123c5e"
              />
              <path
                data-name="\uC120 17"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M276.888 75.251l3.439 2.127"
              />
              <path
                data-name="\uC120 18"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M280.361 111.339h9.899"
              />
              <path
                data-name="\uC120 19"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M266.795 111.339h9.896"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 174">
            <path
              data-name="\uD328\uC2A4 315"
              d="M288.103 37.196c-.463-1.757-.632-1.441-2.189-4.934a8.686 8.686 0 00-2.079-3.264 6.466 6.466 0 00-8.629-.085c-.409.271-1.174 1.061-2.195 3.348-1.557 3.492-1.726 3.179-2.189 4.934a4.488 4.488 0 003.746 5.628 2.7 2.7 0 01-.632-1.221s1.515 2.062 3.577 1.935h3.9c2.062.127 3.577-1.935 3.577-1.935a2.7 2.7 0 01-.632 1.221 4.489 4.489 0 003.745-5.627z"
              fill="#4a280d"
            />
            <g data-name="\uADF8\uB8F9 169">
              <g data-name="\uADF8\uB8F9 168">
                <path
                  data-name="\uD328\uC2A4 316"
                  d="M277.613 40.432l.031 3.729c.008 1.162.728 1.013 1.87.993.976-.014 1.884-.192 1.992-1.159l-.3-5.2z"
                  fill="#ffb1a5"
                />
                <path
                  data-name="\uD328\uC2A4 317"
                  d="M281.577 42.714l-4.054-2.11 3.738-.883z"
                  fill="#4a280d"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 318"
                d="M277.644 43.995l-2.282.922s4.711 2.384 8.3-.265l-2.155-.657z"
                fill="#ffb1a5"
              />
            </g>
            <g data-name="\uADF8\uB8F9 170">
              <path
                data-name="\uD328\uC2A4 319"
                d="M285.004 33.155a5.477 5.477 0 11-10.945 0 5.476 5.476 0 0110.945 0z"
                fill="#4a280d"
              />
            </g>
            <g data-name="\uADF8\uB8F9 171">
              <path
                data-name="\uD328\uC2A4 320"
                d="M285.949 35.994a1.5 1.5 0 11-1.5-1.5 1.494 1.494 0 011.5 1.5z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 321"
                d="M283.614 36.318a1.243 1.243 0 011.315-.812"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <g
              data-name="\uADF8\uB8F9 172"
              transform="translate(272.945 34.499)"
            >
              <circle
                data-name="\uD0C0\uC6D0 13"
                cx={1.495}
                cy={1.495}
                r={1.495}
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 322"
                d="M2.328 1.819a1.243 1.243 0 00-1.315-.812"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <path
              data-name="\uD328\uC2A4 323"
              d="M284.053 33.244a20.5 20.5 0 01-.544 4.655 4.067 4.067 0 01-2.079 2.55l-.195.116a3.734 3.734 0 01-3.712.039 4.077 4.077 0 01-2.2-2.722 29.668 29.668 0 01-.5-4.638s-.429-4.748 4.55-4.655a4.374 4.374 0 014.68 4.655z"
              fill="#ffb1a5"
            />
            <path
              data-name="\uD328\uC2A4 324"
              d="M282.544 29.17s-1.54 5.34-8.533 4.86c0 0 .623-5.269 4.014-5.707-.003-.002 3.315-.479 4.519.847z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 325"
              d="M280.792 28.587a8.29 8.29 0 003.23 5.76l.432-1.74s.473-3.648-3.662-4.02z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 326"
              d="M275.785 33.154l-.812 2.271-.353-2.271z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 327"
              d="M283.066 33.154l.841 2.079.322-2.079z"
              fill="#4a280d"
            />
            <g data-name="\uADF8\uB8F9 173">
              <path
                data-name="\uD328\uC2A4 328"
                d="M277.687 35.349a.449.449 0 11-.448-.446.447.447 0 01.448.446z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 329"
                d="M281.952 35.349a.449.449 0 11-.449-.446.447.447 0 01.449.446z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 330"
                d="M279.196 36.201v.6a.235.235 0 00.282.234l.322-.068"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
              <path
                data-name="\uD328\uC2A4 331"
                d="M277.244 33.532s.945-.13.976.257c0 0 .014.262-.812.358s-1.377.048-1.467-.195.857-.395 1.303-.42z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 332"
                d="M281.478 33.469s-.99-.135-1.021.268c0 0-.014.274.849.375s1.442.051 1.535-.2-.894-.414-1.363-.443z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 333"
                d="M277.67 37.885h3.532s-.279.911-1.766.911a2.049 2.049 0 01-1.766-.911z"
                fill="#fff"
              />
            </g>
          </g>
        </g>
        <path
          data-name="\uC120 20"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d="M165.378 124.205h175.058"
        />
        <text
          data-name="\uBC29\uBB38 \uC11C\uBE44\uC2A4\uC758 \uBAA8\uB4E0 \uAC83"
          transform="translate(16 44)"
          fill="#4708ae"
          fontSize={24}
          fontFamily="NotoSansKR-Bold, Noto Sans KR"
          fontWeight={700}
          letterSpacing="-.02em"
        >
          <tspan x={0} y={0}>
            {"\uBC29\uBB38 \uC11C\uBE44\uC2A4"}
          </tspan>
          <tspan
            y={0}
            fontFamily="NotoSansKR-Medium, Noto Sans KR"
            fontWeight={500}
            fill="#000"
          >
            {"\uC758"}
          </tspan>
          <tspan
            fontFamily="NotoSansKR-Medium, Noto Sans KR"
            fontWeight={500}
            fill="#000"
          >
            <tspan x={0} y={36}>
              {"\uBAA8\uB4E0 \uAC83"}
            </tspan>
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export const MainHeadingContentL = (props, { width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1280 360"
      {...props}
    >
      <g data-name="\uADF8\uB8F9 362">
        <path
          data-name="\uC0AC\uAC01\uD615 77"
          fill="#fff"
          d="M0 0h1280v360H0z"
        />
        <g data-name="\uADF8\uB8F9 228">
          <text
            data-name="\uBC29\uBB38 \uC11C\uBE44\uC2A4\uC758 \uBAA8\uB4E0 \uAC83"
            transform="translate(129 167)"
            fill="#4708ae"
            fontSize={40}
            fontFamily="NotoSansKR-Bold, Noto Sans KR"
            fontWeight={700}
            letterSpacing="-.02em"
          >
            <tspan x={0} y={0}>
              {"\uBC29\uBB38 \uC11C\uBE44\uC2A4"}
            </tspan>
            <tspan
              y={0}
              fontFamily="NotoSansKR-Medium, Noto Sans KR"
              fontWeight={500}
              fill="#000"
            >
              {"\uC758"}
            </tspan>
            <tspan
              fontFamily="NotoSansKR-Medium, Noto Sans KR"
              fontWeight={500}
              fill="#000"
            >
              <tspan x={0} y={59}>
                {"\uBAA8\uB4E0 \uAC83"}
              </tspan>
            </tspan>
          </text>
        </g>
        <g data-name="\uADF8\uB8F9 91">
          <g data-name="\uADF8\uB8F9 72">
            <g data-name="\uADF8\uB8F9 71" fill="#f7a59c">
              <path
                data-name="\uD328\uC2A4 172"
                d="M802.415 212.947l12.094-23.691-14.244-21.222 13.528-7.037 10.668 18.169c3.74 6.429 5.1 10.948 1.4 15.261l-18.292 23.008z"
              />
              <path
                data-name="\uD328\uC2A4 173"
                d="M804.162 211.907s-2.785-.307-3.228 6.347-2.116 11.036 2.45 11.35 12.361-3.508 7.044-8.873l-1.979-5.644z"
              />
            </g>
            <path
              data-name="\uD328\uC2A4 174"
              d="M798.804 144.036s12.074 1.16 19.118 19.916l-19.541 14.538-3.358-11.494z"
              fill="#fdc75b"
            />
          </g>
          <g data-name="\uADF8\uB8F9 80">
            <g data-name="\uADF8\uB8F9 75">
              <g data-name="\uADF8\uB8F9 74">
                <path
                  data-name="\uD328\uC2A4 175"
                  d="M755.573 333.792l.341-24.619 10.32-.526-1.474 25.738z"
                  fill="#fff"
                />
                <g data-name="\uADF8\uB8F9 73">
                  <path
                    data-name="\uD328\uC2A4 176"
                    d="M765.92 329.555s-7.883 3.412-11.583-1.959l-19.144 10.373 33.178-.225z"
                    fill="#09090b"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 44"
                    fill="#fff"
                    d="M768.387 340.666l-33.177.222-.02-2.928 33.177-.222z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 177"
                d="M765.494 321.644l-.137 2.423-9.61-2.512z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 78">
              <g data-name="\uADF8\uB8F9 77">
                <path
                  data-name="\uD328\uC2A4 178"
                  d="M809.581 333.833l-3.044-24.619-10.32-.525 4.184 25.738z"
                  fill="#fff"
                />
                <g data-name="\uADF8\uB8F9 76">
                  <path
                    data-name="\uD328\uC2A4 179"
                    d="M798.667 329.555s7.883 3.412 11.583-1.959l19.145 10.374-33.178-.225z"
                    fill="#09090b"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 45"
                    fill="#fff"
                    d="M796.225 337.755l33.177.222-.02 2.928-33.177-.222z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 180"
                d="M797.862 318.818l10.067 1.631-.321-2.607z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 79">
              <path
                data-name="\uD328\uC2A4 181"
                d="M757.709 206.733l-7.658 114.781 22.715.184 7.979-97.213 8.668 95.185 24.742-2.485-11.795-110.452z"
                fill="#123c5e"
              />
              <path
                data-name="\uC120 4"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M780.744 224.485l8.033-2.887"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 84">
            <g data-name="\uADF8\uB8F9 82">
              <g data-name="\uADF8\uB8F9 81" fill="#ffb1a5">
                <path
                  data-name="\uD328\uC2A4 182"
                  d="M747.881 162.587l-5.395 6.914-7.4-24.885-7.917.887 3.761 31.574a9.028 9.028 0 0014.8 6.969l14.572-12.818z"
                />
                <path
                  data-name="\uD328\uC2A4 183"
                  d="M719.126 131.852a.884.884 0 011.31-.1l4.477 5.126-1.9-8.764a.932.932 0 011.788-.512l2.785 7.883-1.461-9.787a.837.837 0 011.638-.334l2.355 8.907-.532-7.774a1 1 0 011.065-1c.594-.034.969.587 1.037 1.051l1.365 10.9 1.406-3.392a1.226 1.226 0 012.416.225c.369 7.917-2.143 10.88-2.143 10.88l-6.846 1.85a14.175 14.175 0 01-4.8-7.76l-3.965-6.348a.86.86 0 01.005-1.051z"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 184"
                d="M763.858 143.299a14.859 14.859 0 00-8.73 5.569 142.6 142.6 0 00-8.8 13.842l12.954 13.33 5.924-4.921z"
                fill="#fdc75b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 83">
              <path
                data-name="\uD328\uC2A4 185"
                d="M763.858 143.299l-1.147 7.685s-2.846 8.532-2.293 10.709l-3.542 45.013 47.579 5.481-3.112-61.475a13.585 13.585 0 00.082-3.966 3.137 3.137 0 00-2.942-2.751l-9.542-.478z"
                fill="#fdc75b"
              />
              <path
                data-name="\uC120 5"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M801.889 160.997l.628 14.012"
              />
              <path
                data-name="\uC120 6"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M759.285 176.033l1.133-14.34"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 90">
            <g data-name="\uADF8\uB8F9 85">
              <path
                data-name="\uD328\uC2A4 186"
                d="M789.241 143.115l-.526-12.968-10.211-.287-.621 15.207c-.068 1.665 1.379 1.365 3.037 1.276l5.631-.287a2.825 2.825 0 002.69-2.941z"
                fill="#ffb1a5"
              />
            </g>
            <path
              data-name="\uD328\uC2A4 187"
              d="M778.874 132.849l10.2 6-.355-8.7z"
              fill="#4a280d"
            />
            <g data-name="\uADF8\uB8F9 86">
              <path
                data-name="\uD328\uC2A4 188"
                d="M800.899 120.919a3.822 3.822 0 11-3.822-3.822 3.825 3.825 0 013.822 3.822z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 189"
                d="M794.934 121.745a3.173 3.173 0 013.358-2.075"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <g
              data-name="\uADF8\uB8F9 87"
              transform="translate(766.868 117.097)"
            >
              <circle
                data-name="\uD0C0\uC6D0 7"
                cx={3.822}
                cy={3.822}
                r={3.822}
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 190"
                d="M5.965 4.648a3.174 3.174 0 00-3.358-2.075"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <path
              data-name="\uD328\uC2A4 191"
              d="M795.773 114.087a53.1 53.1 0 01-1.406 12.06c-.69 2.921-2.628 4.962-5.365 6.607l-.491.294a9.544 9.544 0 01-9.583.109c-2.969-1.693-5.044-3.918-5.679-7.051a77.983 77.983 0 01-1.29-12.019s-1.106-12.3 11.74-12.06 12.074 12.06 12.074 12.06z"
              fill="#ffb1a5"
            />
            <g data-name="\uADF8\uB8F9 88" fill="#4a280d">
              <path
                data-name="\uD328\uC2A4 192"
                d="M772.635 119.083s2.71-8.736.751-14.388c0-.007-7.576 2.17-.751 14.388z"
              />
              <path
                data-name="\uD328\uC2A4 193"
                d="M795.289 119.083s-3.42-8.736-1.461-14.388c0-.007 7.071 1.74 1.461 14.388z"
              />
            </g>
            <g data-name="\uADF8\uB8F9 89">
              <path
                data-name="\uD328\uC2A4 194"
                d="M783.058 121.328v1.59a.618.618 0 00.737.621l.846-.177"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
              <path
                data-name="\uD328\uC2A4 195"
                d="M781.904 114.026l-7.18.86s.573-1.9 3.508-2.218 3.672 1.358 3.672 1.358z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 196"
                d="M785.74 114.026l7.18.86s-.573-1.9-3.508-2.218-3.672 1.358-3.672 1.358z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 197"
                d="M779.625 125.41h7.535s-.594 1.945-3.768 1.945a4.385 4.385 0 01-3.767-1.945z"
                fill="#fff"
              />
              <path
                data-name="\uD328\uC2A4 198"
                d="M787.364 119.26a1.991 1.991 0 012.969 0"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.5}
              />
              <path
                data-name="\uD328\uC2A4 199"
                d="M776.826 119.26a1.991 1.991 0 012.969 0"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.5}
              />
            </g>
            <path
              data-name="\uD328\uC2A4 200"
              d="M773.939 108.613s2.17-3.911 6.068-1.747 7.74 4.218 14.695 2.519l-.921-4.716s-9.658-10.279-20.442 0z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 201"
              d="M773.332 104.674s.621-7.132 10.682-7.754 13.05 4.754 13.05 4.754l-1.829.328s3.522 1.515 4.436 2.983l-1.98.689 2.607 2.321s-8.2 3.187-12.756 1.481l-3.768-5.7z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 202"
              d="M777.959 143.299l-6.034.075s-.648 6.115 11.132 6.416 11.972-6.02 11.972-6.02l-6.368-.464h-10.7z"
              fill="#ffb1a5"
            />
          </g>
        </g>
        <g data-name="\uADF8\uB8F9 108">
          <g data-name="\uADF8\uB8F9 99">
            <g data-name="\uADF8\uB8F9 94">
              <g data-name="\uADF8\uB8F9 93">
                <g data-name="\uADF8\uB8F9 92">
                  <path
                    data-name="\uD328\uC2A4 203"
                    d="M816.291 334.181l-7.03 3.467a1.748 1.748 0 00-.962 2.007c.184.628.778 1.215 2.341 1.242 3.474.061 18.858-2.334 18.858-2.334v1.61l7.139-.805s.5-8.163-1.672-9.357z"
                    fill="#20120c"
                  />
                  <path
                    data-name="\uD328\uC2A4 204"
                    d="M827.627 326.012l-11.33 8.17s1.215 3.119 6.58 1.037 12.095-5.208 12.095-5.208l-.983-4.88z"
                    fill="#ffb1a5"
                  />
                </g>
                <path
                  data-name="\uD328\uC2A4 205"
                  d="M834.964 330.011l4.669-30.27-11.323 1.078-1.932 28.113z"
                  fill="#ffb1a5"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 206"
                d="M827.061 319.016l9.276 2.075.321-2.075z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 97">
              <g data-name="\uADF8\uB8F9 96">
                <g data-name="\uADF8\uB8F9 95">
                  <path
                    data-name="\uD328\uC2A4 207"
                    d="M896.801 334.181l7.03 3.467a1.748 1.748 0 01.962 2.007c-.184.628-.785 1.113-2.348 1.14-3.474.061-18.858-2.239-18.858-2.239v1.611l-7.139-.805s-.5-8.163 1.672-9.357z"
                    fill="#20120c"
                  />
                  <path
                    data-name="\uD328\uC2A4 208"
                    d="M885.467 326.012l11.33 8.17s-1.215 3.119-6.58 1.037-12.095-5.208-12.095-5.208l.983-4.88z"
                    fill="#ffb1a5"
                  />
                </g>
                <path
                  data-name="\uD328\uC2A4 209"
                  d="M878.136 330.011l-4.669-30.27 11.316 1.078 1.938 28.113z"
                  fill="#ffb1a5"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 210"
                d="M876.346 318.408l9.658.068.157 2.368z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 98">
              <path
                data-name="\uD328\uC2A4 211"
                d="M846.615 179.534s-9.712 3.146-16.886 36.058-9.706 78.989-10.968 103.424h25.97l13.6-101.826 6.419 101.137 26.073.178s-1.509-127.894-21.814-138.978h-22.394z"
                fill="#3a2c32"
              />
              <path
                data-name="\uC120 7"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M858.327 217.188l6.853-2.6"
              />
              <path
                data-name="\uC120 8"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M819.368 307.569h26.509"
              />
              <path
                data-name="\uC120 9"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M864.347 307.569h26.093"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 104">
            <path
              d="M867.917 139.613a15.055 15.055 0 0111.316 6.8c4.211 6.552 17.05 16.742 36.87 23.609l2.116 12.245s-33.724-8.443-47.04-22.271z"
              fill="#f7a59c"
            />
            <g data-name="\uADF8\uB8F9 100">
              <path
                data-name="\uD328\uC2A4 212"
                d="M836.704 143.51s-3.522 8.306 3.966 20.2l6.416-6.607-2.655-12.313z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 213"
                d="M844.629 141.401l-7.924 2.109s6.689 7.6 3.965 20.2l5.945 12.477 22.537.061 4.825-14.9c1.324-4.1 2.341-8.429.328-12.231l-5.153-9.446-4.948-.212z"
                fill="#fff"
              />
              <path
                data-name="\uD328\uC2A4 214"
                d="M846.615 176.176v3.358s22.783.519 22.394 0 .143-3.3.143-3.3z"
                fill="#ffb1a5"
              />
            </g>
            <g data-name="\uADF8\uB8F9 103">
              <g data-name="\uADF8\uB8F9 102" fill="#ffb1a5">
                <path
                  data-name="\uD328\uC2A4 215"
                  d="M836.705 143.51s-8.852-.082-14.627 10.818l-16.455 20.312a7.052 7.052 0 004.873 10.627c2.621.437 4.511-.642 5.378-2.778l23.049-23.527z"
                />
                <g data-name="\uADF8\uB8F9 101">
                  <path
                    data-name="\uD328\uC2A4 216"
                    d="M838.937 199.981l-29.7-15.009a6.832 6.832 0 01-4.491-7.938c.99-4.5 5.365-6.75 9.357-4.45l28.311 19.984z"
                  />
                  <path
                    data-name="\uD328\uC2A4 217"
                    d="M840.308 192.106l5.72-1.488-5.6 10.921-5.487-3.4z"
                  />
                </g>
              </g>
              <path
                data-name="\uC120 10"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M847.318 188.065l-8.538 16.695"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 107">
            <path
              data-name="\uD328\uC2A4 218"
              d="M860.204 101.938s9.173.457 10.047 10.545c.655 7.528-.8 10.9 4.928 16.92 0 0-16.756 9.89-40.788 2.614 0 0 4.518-7.794 4.4-15.193s1.989-10.655 5.845-13.455 11.705-4.455 15.568-1.431z"
              fill="#fb6045"
            />
            <path
              data-name="\uD328\uC2A4 219"
              d="M863.283 120.154a4.263 4.263 0 104.327-4.2 4.262 4.262 0 00-4.327 4.2z"
              fill="#ef968f"
            />
            <path
              data-name="\uD328\uC2A4 220"
              d="M859.611 130.938l-.075 9.241c-.021 2.873-1.8 2.5-4.634 2.464-2.416-.034-5.378.628-5.644-1.775l.744-13.985z"
              fill="#ffb1a5"
            />
            <path
              data-name="\uD328\uC2A4 221"
              d="M859.563 136.303l-9.03-7.576 9.1 1.372z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 222"
              d="M859.33 132.582c5.447-.28 9.754-5.249 9.672-9.706l-.225-9.658a10.353 10.353 0 00-10.19-10.17c-5.713-.089-11.419 4.457-11.508 10.177l.293 8.45c.226 6.532 5.42 10.805 11.958 10.907z"
              fill="#ffb1a5"
            />
            <g data-name="\uADF8\uB8F9 105">
              <path
                data-name="\uD328\uC2A4 223"
                d="M863.275 121.287l.239 1.345a.553.553 0 01-.5.648l-.751.068"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
              <path
                data-name="\uD328\uC2A4 224"
                d="M857.44 114.865s2.314-.314 2.389.628c0 0 .034.642-1.986.874s-3.153.218-3.372-.375 1.883-1.064 2.969-1.127z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 225"
                d="M866.572 114.708s-1.925-.1-2.034.805c0 0-.061.607 1.624.648s2.218-.2 2.355-.689c.15-.56-1.029-.799-1.945-.764z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 226"
                d="M865.473 118.925a.976.976 0 10.956-1 .976.976 0 00-.956 1z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 227"
                d="M856.914 119.102a.976.976 0 10.955-1 .976.976 0 00-.955 1z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 228"
                d="M864.899 125.088l-5.8-.389s.976 1.072 3.645 1.072c1.712 0 2.155-.683 2.155-.683z"
                fill="#fd5269"
              />
            </g>
            <path
              data-name="\uD328\uC2A4 229"
              d="M858.343 138.664l6.655.9s-2.928 9.487-21.643 2.259l6.614-2.061z"
              fill="#ffb1a5"
            />
            <path
              data-name="\uD328\uC2A4 230"
              d="M861.256 102.107s4.832 2.027 3.563 5.3c-1.563 4.027-9.938 9.576-18.36 11.1 0 0-4.58-7.2 0-11.6s8.129-4.928 8.129-4.928z"
              fill="#fb6045"
            />
            <path
              data-name="\uD328\uC2A4 231"
              d="M868.777 113.212s-7.091-4.935-6.887-9.337c0 0-1.761-1.7 2.348-.232s5.706 6.832 4.539 9.569z"
              fill="#fb6045"
            />
            <path
              data-name="\uD328\uC2A4 232"
              d="M852.505 114.298c0 .225-2.539 7.74-2.539 7.74l-1.877-6.907z"
              fill="#fb6045"
            />
            <g data-name="\uADF8\uB8F9 106">
              <path
                data-name="\uD328\uC2A4 233"
                d="M842.316 120.953a4.294 4.294 0 104.361-4.225 4.3 4.3 0 00-4.361 4.225z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 234"
                d="M848.09 122.318s.048-3.112-2.935-2.669"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
          </g>
        </g>
        <g data-name="\uADF8\uB8F9 127">
          <g data-name="\uADF8\uB8F9 116">
            <g
              data-name="\uADF8\uB8F9 109"
              transform="translate(910.336 79.094)"
            >
              <ellipse
                data-name="\uD0C0\uC6D0 8"
                cx={10.279}
                cy={10.374}
                rx={10.279}
                ry={10.374}
                transform="matrix(.841 -.54 .54 .841 0 11.105)"
                fill="#1f120c"
              />
              <ellipse
                data-name="\uD0C0\uC6D0 9"
                cx={8.497}
                cy={8.573}
                rx={8.497}
                ry={8.573}
                transform="rotate(-32.7 41.528 12.13)"
                fill="#fdbfb2"
              />
            </g>
            <g data-name="\uADF8\uB8F9 111">
              <g data-name="\uADF8\uB8F9 110">
                <path
                  data-name="\uD328\uC2A4 235"
                  d="M917.217 129.976l.075 13.535c.021 2.88 1.809 2.5 4.635 2.464 2.416-.034 4.668-.471 4.934-2.874l-.744-17.186z"
                  fill="#db8d7c"
                />
                <path
                  data-name="\uD328\uC2A4 236"
                  d="M926.695 135.784l-9.71-5.386 9.269-2.191z"
                  fill="#4a280d"
                />
              </g>
            </g>
            <g data-name="\uADF8\uB8F9 112">
              <path
                data-name="\uD328\uC2A4 237"
                d="M935.529 111.929c0 7.8-6.074 14.128-13.562 14.128s-13.562-6.327-13.562-14.128 6.075-13.111 13.562-13.111 13.562 5.31 13.562 13.111z"
                fill="#1f120c"
              />
            </g>
            <g data-name="\uADF8\uB8F9 113">
              <path
                data-name="\uD328\uC2A4 238"
                d="M937.87 118.973a3.706 3.706 0 11-3.706-3.706 3.705 3.705 0 013.706 3.706z"
                fill="#db8d7c"
              />
              <path
                data-name="\uD328\uC2A4 239"
                d="M932.089 119.779a3.08 3.08 0 013.255-2.013"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.4}
              />
            </g>
            <g
              data-name="\uADF8\uB8F9 114"
              transform="translate(905.641 115.267)"
            >
              <circle
                data-name="\uD0C0\uC6D0 10"
                cx={3.706}
                cy={3.706}
                r={3.706}
                fill="#db8d7c"
              />
              <path
                data-name="\uD328\uC2A4 240"
                d="M5.781 4.512a3.08 3.08 0 00-3.256-2.013"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.4}
              />
            </g>
            <path
              data-name="\uD328\uC2A4 241"
              d="M933.175 112.155a50.534 50.534 0 01-1.352 11.535c-.662 2.792-2.526 4.75-5.153 6.32l-.478.287a9.274 9.274 0 01-9.207.1c-2.853-1.618-4.846-3.747-5.46-6.743a73.758 73.758 0 01-1.242-11.494s-1.065-11.765 11.282-11.531 11.61 11.526 11.61 11.526z"
              fill="#db8d7c"
            />
            <path
              data-name="\uD328\uC2A4 242"
              d="M929.434 102.054s-2.955 13.146-20.292 11.958c0 0 .682-12.975 9.084-14.053 0 0 8.225-1.181 11.208 2.095z"
              fill="#1f120c"
            />
            <path
              data-name="\uD328\uC2A4 243"
              d="M925.093 100.613s.594 9.084 8 14.272l1.065-4.314c.006 0 1.186-9.038-9.065-9.958z"
              fill="#1f120c"
            />
            <path
              data-name="\uD328\uC2A4 244"
              d="M912.677 111.93l-2.007 5.631-.874-5.631z"
              fill="#1f120c"
            />
            <path
              data-name="\uD328\uC2A4 245"
              d="M930.724 111.93l2.088 5.16.8-5.16z"
              fill="#1f120c"
            />
            <g data-name="\uADF8\uB8F9 115">
              <path
                data-name="\uD328\uC2A4 246"
                d="M921.135 119.478v1.495a.582.582 0 00.7.58l.8-.164"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.4}
              />
              <path
                data-name="\uD328\uC2A4 247"
                d="M916.296 112.872s2.341-.321 2.416.635c0 0 .034.648-2.014.887s-3.413.116-3.638-.478 2.137-.983 3.236-1.044z"
                fill="#1f120c"
              />
              <path
                data-name="\uD328\uC2A4 248"
                d="M926.786 112.714s-2.45-.334-2.532.669c0 0-.034.676 2.109.928s3.577.123 3.809-.505-2.225-1.017-3.386-1.092z"
                fill="#1f120c"
              />
              <path
                data-name="\uD328\uC2A4 249"
                d="M917.702 123.341a8.315 8.315 0 007.931-.307"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.4}
              />
              <path
                data-name="\uD328\uC2A4 250"
                d="M917.558 117.513a1.037 1.037 0 11-1.038-1.031 1.031 1.031 0 011.038 1.031z"
                fill="#1f120c"
              />
              <path
                data-name="\uD328\uC2A4 251"
                d="M927.434 117.513a1.037 1.037 0 11-1.035-1.031 1.031 1.031 0 011.035 1.031z"
                fill="#1f120c"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 122">
            <g data-name="\uADF8\uB8F9 118">
              <path
                data-name="\uD328\uC2A4 252"
                d="M906.835 334.492l-.341-19.623 9.3-.471-.683 20.626z"
                fill="#af5e4c"
              />
              <path
                data-name="\uD328\uC2A4 253"
                d="M906.535 317.262l9.166.048v2.32z"
                fill="#09090b"
              />
              <path
                data-name="\uD328\uC2A4 254"
                d="M906.535 317.262l9.166.048v2.32z"
                fill="#09090b"
              />
              <g data-name="\uADF8\uB8F9 117">
                <path
                  data-name="\uD328\uC2A4 255"
                  d="M916.902 330.674s-7.105 3.078-10.443-1.768l-15.95 9.351 28.6-.2z"
                  fill="#3a2c32"
                />
                <path
                  data-name="\uC0AC\uAC01\uD615 46"
                  fill="#fff"
                  d="M919.125 340.693l-28.604.2-.019-2.64 28.605-.2z"
                />
              </g>
            </g>
            <g data-name="\uADF8\uB8F9 120">
              <path
                data-name="\uD328\uC2A4 256"
                d="M968.277 334.492l-3.958-19.623-9.3-.471 4.976 20.626z"
                fill="#af5e4c"
              />
              <g data-name="\uADF8\uB8F9 119">
                <path
                  data-name="\uD328\uC2A4 257"
                  d="M958.202 330.674s7.105 3.078 10.443-1.768l15.951 9.351-28.6-.2z"
                  fill="#3a2c32"
                />
                <path
                  data-name="\uC0AC\uAC01\uD615 47"
                  fill="#fff"
                  d="M956.001 338.06l28.604.2-.018 2.641-28.604-.2z"
                />
              </g>
            </g>
            <g data-name="\uADF8\uB8F9 121">
              <path
                data-name="\uD328\uC2A4 258"
                d="M916.05 177.159s-16.463 18.585-16.121 38.276 3.747 101.826 3.747 101.826h14.968l5.447-110.788 1.979-.123 26.331 110.959 13.971-1.481-16.694-106.713s-5.03-18.961-14.272-30.373z"
                fill="#3a2c32"
              />
              <path
                data-name="\uC120 11"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M928.512 207.047l-9.05-1.577"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 126">
            <g data-name="\uADF8\uB8F9 124" fill="#db8d7c">
              <path
                data-name="\uD328\uC2A4 259"
                d="M901.238 151.153l-8.791 33.212a4.462 4.462 0 003.57 5.665 5.23 5.23 0 005.365-2.88l11.316-32.031a6.081 6.081 0 00-3.57-7.951 6.068 6.068 0 00-7.89 3.985z"
              />
              <g data-name="\uADF8\uB8F9 123">
                <path
                  data-name="\uD328\uC2A4 260"
                  d="M892.195 185.663l-3.754 34.106 6.668-.307 6.382-32.6c.457-2.607-1.331-5.754-3.945-6.129-2.682-.387-5.126 2.241-5.351 4.93z"
                />
                <path
                  data-name="\uD328\uC2A4 261"
                  d="M889.355 217.381s-9.3 11.733.15 17.964a1.585 1.585 0 001.993-.219l.068-.075a1.6 1.6 0 00.075-2.164c-1.29-1.543-2.928-4.662.416-8.347 0 0 1.549.519 1.017 3.679a1.293 1.293 0 001.29 1.529 1.326 1.326 0 001.222-.915c.7-2.054 1.993-7.187-1.085-10.211z"
                />
              </g>
            </g>
            <path
              data-name="\uD328\uC2A4 262"
              d="M933.352 146.752l45.6 42.242 5.344-6.491-42.413-41.968c-1.843-2.307-6.177-3.064-8.429-1.147l.266-.246a5.244 5.244 0 00-.368 7.61z"
              fill="#db8d7c"
            />
            <g data-name="\uADF8\uB8F9 125">
              <path
                data-name="\uD328\uC2A4 263"
                d="M918.452 139.565l-12.436 8.533 10.033 29.062 19.357 1.584 2.573-26.653-1.01-13.992z"
                fill="#db8d7c"
              />
              <path
                data-name="\uD328\uC2A4 264"
                d="M912.937 142.972s2.539 7.856 9.89 6.19 7.631-10.675 7.631-10.675l9.542-.73-3.829 35.457h-24.346l-7.208-26.284z"
                fill="#fdc75b"
              />
            </g>
          </g>
        </g>
        <g data-name="\uADF8\uB8F9 152">
          <g data-name="\uADF8\uB8F9 135">
            <g data-name="\uADF8\uB8F9 130">
              <g data-name="\uADF8\uB8F9 129">
                <path
                  data-name="\uD328\uC2A4 265"
                  d="M1090.461 333.512l-.335-24.619-10.169-.533 1.454 25.738z"
                  fill="#faaeb0"
                />
                <g data-name="\uADF8\uB8F9 128">
                  <path
                    data-name="\uD328\uC2A4 266"
                    d="M1080.272 329.267s7.76 3.413 11.412-1.959l18.858 10.375-32.68-.225z"
                    fill="#3a2c32"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 48"
                    fill="#fff"
                    d="M1077.867 337.47l32.678.222-.02 2.928-32.678-.222z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 267"
                d="M1080.694 321.356l9.63 2.423-.028-2.505z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 133">
              <g data-name="\uADF8\uB8F9 132">
                <path
                  data-name="\uD328\uC2A4 268"
                  d="M1014.326 333.969l9.466-24.612 10.163-.533-10.579 25.739z"
                  fill="#faaeb0"
                />
                <g data-name="\uADF8\uB8F9 131">
                  <path
                    data-name="\uD328\uC2A4 269"
                    d="M1026.741 329.555s-7.76 3.412-11.412-1.959l-18.858 10.373 32.68-.225z"
                    fill="#3a2c32"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 49"
                    fill="#fff"
                    d="M1029.163 340.667l-32.678.222-.02-2.927 32.678-.223z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 270"
                d="M1020.421 318.121l8.32 3.4 1-2.45z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 134">
              <path
                data-name="\uD328\uC2A4 271"
                d="M1088.36 206.446l7.542 114.781-22.373.184-7.857-97.205-32.5 95.179-24.373-2.484 35.585-110.455z"
                fill="#f4cda6"
              />
              <path
                data-name="\uC120 12"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M1065.672 224.205l-7.917-2.887"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 142">
            <g data-name="\uADF8\uB8F9 137">
              <g data-name="\uADF8\uB8F9 136" fill="#f7a59c">
                <path
                  data-name="\uD328\uC2A4 272"
                  d="M1047.641 173.501s-11.9 26.4-17.773 54.855l-6.136-1.235s3.453-34.352 11.678-59.912z"
                />
                <path
                  data-name="\uD328\uC2A4 273"
                  d="M1024.339 224.8s-10.374 13.234.328 20.387a1.761 1.761 0 002.239-.232l.082-.082a1.829 1.829 0 00.068-2.45c-1.461-1.761-3.344-5.31.4-9.467 0 0 1.754.6 1.181 4.184a1.491 1.491 0 001.468 1.747 1.479 1.479 0 001.372-1.024c.764-2.327 2.184-8.142-1.311-11.6z"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 274"
                d="M1047.51 147.319s-8.327 2.348-14.736 18.688l15.521 9.494 3.3-8.791z"
                fill="#fff"
              />
            </g>
            <g data-name="\uADF8\uB8F9 140">
              <g data-name="\uADF8\uB8F9 139" fill="#ffb1a5">
                <path
                  data-name="\uD328\uC2A4 275"
                  d="M1077.159 141.333l52.43-41.941 7.569 1.638c1.917-1.87-29.554 32.987-52.125 51.026z"
                />
                <g data-name="\uADF8\uB8F9 138">
                  <path
                    data-name="\uD328\uC2A4 276"
                    d="M1140.689 101.63a6.55 6.55 0 01-9.228 1.495 6.767 6.767 0 01-1.468-9.364 6.55 6.55 0 019.228-1.495 6.78 6.78 0 011.468 9.364z"
                  />
                  <path
                    data-name="\uD328\uC2A4 277"
                    d="M1134.136 91.099s-1.809-2.443-4.054.239-3.679 7.405 1.379 11.78z"
                  />
                </g>
                <path
                  data-name="\uD328\uC2A4 278"
                  d="M1131.536 93.966l5.706-10.32a1.255 1.255 0 011.563-.5 1.134 1.134 0 01.525 1.556l-2.477 6.279 5.713-4.477a.92.92 0 011.283-.082.95.95 0 01.15 1.276l-6.088 7.18z"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 279"
                d="M1096.448 149.667l-5.57-19.862-13.009 8.122a21.816 21.816 0 01-5.078 1.652v3.351l4.368.7 4.259 23.383z"
                fill="#fff"
              />
            </g>
            <g data-name="\uADF8\uB8F9 141">
              <path
                data-name="\uD328\uC2A4 280"
                d="M1074.954 139.06l5.392 8.354c2.075.771 4.7 5.235 4.15 7.412l4.682 51.592-46.862 5.481 3.064-61.475a2.1 2.1 0 011.481-2.853l10.735-4.341z"
                fill="#fff"
              />
              <path
                data-name="\uC120 13"
                fill="none"
                stroke="#ccc"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="M1044.902 159.413l-.607 13.644"
              />
              <path
                data-name="\uC120 14"
                fill="none"
                stroke="#ccc"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="M1085.213 162.552l-.717-7.726"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 151">
            <g data-name="\uADF8\uB8F9 143">
              <path
                data-name="\uD328\uC2A4 281"
                d="M1067.862 142.835l-.518-12.968-10.054-.287-.615 15.207c-.068 1.665 1.358 1.365 3 1.276l5.542-.287a2.819 2.819 0 002.645-2.941z"
                fill="#ffb1a5"
              />
            </g>
            <path
              data-name="\uD328\uC2A4 282"
              d="M1057.652 132.57l10.04 5.993-.348-8.7z"
              fill="#4a280d"
            />
            <g data-name="\uADF8\uB8F9 144">
              <path
                data-name="\uD328\uC2A4 283"
                d="M1079.343 120.632a3.768 3.768 0 11-3.768-3.822 3.8 3.8 0 013.768 3.822z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 284"
                d="M1073.466 121.465c.2-.28.942-2.43 3.31-2.075"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <g data-name="\uADF8\uB8F9 145">
              <path
                data-name="\uD328\uC2A4 285"
                d="M1045.824 120.632a3.768 3.768 0 103.767-3.822 3.8 3.8 0 00-3.767 3.822z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 286"
                d="M1051.693 121.465c-.2-.28-.942-2.43-3.31-2.075"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <path
              data-name="\uD328\uC2A4 287"
              d="M1074.292 113.801a54.06 54.06 0 01-1.385 12.06c-.676 2.921-2.587 4.962-5.283 6.607l-.485.293a9.279 9.279 0 01-9.439.109c-2.921-1.693-4.969-3.918-5.6-7.05a78.518 78.518 0 01-1.27-12.019s-1.092-12.3 11.562-12.06 11.9 12.06 11.9 12.06z"
              fill="#ffb1a5"
            />
            <g data-name="\uADF8\uB8F9 147" fill="#4a280d">
              <path
                data-name="\uD328\uC2A4 288"
                d="M1051.503 118.797s2.669-8.736.738-14.388c-.005 0-6.034 3.037-.738 14.388z"
              />
              <path
                data-name="\uD328\uC2A4 289"
                d="M1073.815 118.797s-3.372-8.736-1.433-14.388c0 0 6.074 2.341 1.433 14.388z"
              />
              <g data-name="\uADF8\uB8F9 146">
                <path
                  data-name="\uD328\uC2A4 290"
                  d="M1051.36 105.712s16.722 8.716 23.206 1.809c0 0 5.31-5.426-.532-9.63s-19.244 3.187-19.244 3.187-3.007.723-3.43 4.634z"
                />
                <path
                  data-name="\uD328\uC2A4 291"
                  d="M1051.36 105.712s-3.119-5.617 5.76-8.381c0 0 2.157 2.252-.935 5.208s-4.825 3.173-4.825 3.173z"
                />
              </g>
            </g>
            <g data-name="\uADF8\uB8F9 150">
              <g
                data-name="\uADF8\uB8F9 148"
                transform="translate(1055.789 117.616)"
                fill="#4a280d"
              >
                <path
                  data-name="\uD328\uC2A4 292"
                  d="M2.334 1.181A1.167 1.167 0 111.167 0a1.179 1.179 0 011.167 1.181z"
                />
                <ellipse
                  data-name="\uD0C0\uC6D0 11"
                  cx={1.167}
                  cy={1.181}
                  rx={1.167}
                  ry={1.181}
                  transform="translate(10.798)"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 293"
                d="M1061.768 121.042v1.59a.615.615 0 00.73.621l.839-.177"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
              <path
                data-name="\uD328\uC2A4 294"
                d="M1060.628 115.098l-7.071.86s.566-1.9 3.454-2.218 3.617 1.358 3.617 1.358z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 295"
                d="M1064.409 115.098l7.071.86s-.566-1.9-3.454-2.218-3.617 1.358-3.617 1.358z"
                fill="#4a280d"
              />
              <g
                data-name="\uADF8\uB8F9 149"
                transform="translate(1051.407 114.504)"
                fill="none"
                stroke="#fff"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              >
                <path
                  data-name="\uD328\uC2A4 296"
                  d="M9.214 4.655A4.607 4.607 0 114.607 0a4.629 4.629 0 014.607 4.655z"
                />
                <ellipse
                  data-name="\uD0C0\uC6D0 12"
                  cx={4.607}
                  cy={4.655}
                  rx={4.607}
                  ry={4.655}
                  transform="translate(13.05)"
                />
                <path
                  data-name="\uD328\uC2A4 297"
                  d="M9.214 5.046s1.624-2.525 3.836 0"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 298"
                d="M1058.382 125.124h7.419s-.587 1.945-3.713 1.945a4.312 4.312 0 01-3.706-1.945z"
                fill="#fff"
              />
            </g>
            <path
              data-name="\uD328\uC2A4 299"
              d="M1060.218 142.179l-8.62 3.488 11.951 3.29 9.241-9.378z"
              fill="#ffb1a5"
            />
          </g>
        </g>
        <g data-name="\uADF8\uB8F9 175">
          <g data-name="\uADF8\uB8F9 159">
            <g data-name="\uADF8\uB8F9 155">
              <g data-name="\uADF8\uB8F9 154" fill="#ffb1a5">
                <path
                  data-name="\uD328\uC2A4 300"
                  d="M1012.074 158.014l17.9 15.6a6.988 6.988 0 01.8 9.747 6.985 6.985 0 01-9.767.955l-15.063-12.21z"
                />
                <g data-name="\uADF8\uB8F9 153">
                  <path
                    data-name="\uD328\uC2A4 301"
                    d="M1034.017 146.65l-14.005 29.977a6.375 6.375 0 003.378 8.627 6.382 6.382 0 008.573-4.32l8.907-32.434z"
                  />
                  <path
                    data-name="\uD328\uC2A4 302"
                    d="M1049.62 133.334a.884.884 0 00-1.31-.1l-4.477 5.126 1.9-8.764a.932.932 0 00-1.788-.512l-2.785 7.883 1.461-9.788a.837.837 0 00-1.638-.334l-2.354 8.914.532-7.774a1 1 0 00-1.065-1c-.594-.034-.969.587-1.037 1.051l-1.365 10.9-.75-3.4a1.226 1.226 0 00-2.416.225c-.369 7.917 1.488 10.886 1.488 10.886l6.846 1.85a14.176 14.176 0 004.8-7.76l3.965-6.347a.88.88 0 00-.007-1.056z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 303"
                d="M997.782 148.39c9.071 2.027 20.305 12.579 20.305 12.579l-7.719 14.975-11.521-9.439z"
                fill="#82d2f5"
              />
            </g>
            <g data-name="\uADF8\uB8F9 157">
              <g data-name="\uADF8\uB8F9 156" fill="#ffb1a5">
                <path
                  data-name="\uD328\uC2A4 304"
                  d="M970.078 207.771l-9.951-26.632 16.107-13-12.456-8.791-12.149 10.454c-4.989 4.457-7.235 9.426-3.44 14.934l16.183 26.782z"
                />
                <path
                  data-name="\uD328\uC2A4 305"
                  d="M968.487 206.501s2.8.068 2.341 6.723.607 11.221-3.959 10.914-11.773-5.139-5.781-9.74l2.724-5.324z"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 306"
                d="M979.135 148.93c-7.228 1.406-20.674 12.743-20.674 12.743l6.976 15.521 12.244-8.9z"
                fill="#82d2f5"
              />
            </g>
            <g data-name="\uADF8\uB8F9 158">
              <path
                data-name="\uD328\uC2A4 307"
                d="M979.136 148.929s-6.027 2.764-9 5.583l6.088 36.857 25.861-1.065 4.4-34.475a4.553 4.553 0 00-2.839-4.43l-5.856-3.01c-2.909 1.195-18.654.54-18.654.54z"
                fill="#82d2f5"
              />
              <path
                data-name="\uC120 15"
                fill="none"
                stroke="#61bad8"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="M972.877 171.787l-1.14-7.18"
              />
              <path
                data-name="\uC120 16"
                fill="none"
                stroke="#61bad8"
                strokeMiterlimit={10}
                strokeWidth={0.5}
                d="M1004.826 171.404l.785-7.521"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 167">
            <g data-name="\uADF8\uB8F9 162">
              <g data-name="\uADF8\uB8F9 161">
                <path
                  data-name="\uD328\uC2A4 308"
                  d="M1005.952 334.345l.9-20.06-9.515-.484.15 21.1z"
                  fill="#faaeb0"
                />
                <g data-name="\uADF8\uB8F9 160">
                  <path
                    data-name="\uD328\uC2A4 309"
                    d="M996.416 330.441s7.262 3.147 10.682-1.809l17.65 9.562-30.584-.2z"
                    fill="#09090b"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 50"
                    fill="#fff"
                    d="M994.166 337.997l30.583.205-.018 2.703-30.583-.205z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 310"
                d="M997.392 320.844l9.064 2.321.1-2.321z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 165">
              <g data-name="\uADF8\uB8F9 164">
                <path
                  data-name="\uD328\uC2A4 311"
                  d="M960.871 334.345l2.58-20.06 9.515-.484-3.624 21.1z"
                  fill="#faaeb0"
                />
                <g data-name="\uADF8\uB8F9 163">
                  <path
                    data-name="\uD328\uC2A4 312"
                    d="M971.168 330.441s-7.262 3.147-10.682-1.809l-17.65 9.562 30.584-.2z"
                    fill="#09090b"
                  />
                  <path
                    data-name="\uC0AC\uAC01\uD615 51"
                    fill="#fff"
                    d="M973.438 340.689l-30.583.205-.018-2.703 30.583-.205z"
                  />
                </g>
              </g>
              <path
                data-name="\uD328\uC2A4 313"
                d="M962.714 320.067l8.648 3.1.458-2.7z"
                fill="#09090b"
              />
            </g>
            <g data-name="\uADF8\uB8F9 166">
              <path
                data-name="\uD328\uC2A4 314"
                d="M976.214 191.369s-5.18 7.064-9.037 25.554c-4.061 19.459-10.777 102.864-10.777 102.864l23.957 1.058 9.76-93.247.089 93.247h23.09s9.385-111.382-11.227-130.54z"
                fill="#123c5e"
              />
              <path
                data-name="\uC120 17"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M981.804 222.451l8.32 5.146"
              />
              <path
                data-name="\uC120 18"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M990.206 309.767h23.95"
              />
              <path
                data-name="\uC120 19"
                fill="none"
                stroke="#09090b"
                strokeMiterlimit={10}
                strokeWidth={0.35}
                d="M957.383 309.767h23.943"
              />
            </g>
          </g>
          <g data-name="\uADF8\uB8F9 174">
            <path
              data-name="\uD328\uC2A4 315"
              d="M1008.948 130.378c-1.119-4.252-1.529-3.488-5.3-11.937-2.252-5.051-3.993-7.078-5.03-7.9a15.646 15.646 0 00-20.878-.2c-.99.655-2.84 2.566-5.31 8.1-3.768 8.45-4.177 7.692-5.3 11.937s.307 12.088 9.064 13.616a6.525 6.525 0 01-1.529-2.955s3.665 4.989 8.654 4.682h9.426c4.989.307 8.654-4.682 8.654-4.682a6.524 6.524 0 01-1.529 2.955c8.771-1.528 10.198-9.375 9.078-13.616z"
              fill="#4a280d"
            />
            <g data-name="\uADF8\uB8F9 169">
              <g data-name="\uADF8\uB8F9 168">
                <path
                  data-name="\uD328\uC2A4 316"
                  d="M983.558 138.207l.075 9.023c.021 2.812 1.761 2.45 4.525 2.4 2.362-.034 4.56-.464 4.819-2.805l-.724-12.586z"
                  fill="#ffb1a5"
                />
                <path
                  data-name="\uD328\uC2A4 317"
                  d="M993.148 143.73l-9.808-5.105 9.044-2.136z"
                  fill="#4a280d"
                />
              </g>
              <path
                data-name="\uD328\uC2A4 318"
                d="M983.634 146.828l-5.522 2.232s11.4 5.767 20.08-.642l-5.215-1.59z"
                fill="#ffb1a5"
              />
            </g>
            <g data-name="\uADF8\uB8F9 170">
              <path
                data-name="\uD328\uC2A4 319"
                d="M1001.44 120.597a13.524 13.524 0 01-13.241 13.793c-7.31 0-13.241-6.177-13.241-13.794s5.924-12.8 13.241-12.8 13.241 5.184 13.241 12.801z"
                fill="#4a280d"
              />
            </g>
            <g data-name="\uADF8\uB8F9 171">
              <path
                data-name="\uD328\uC2A4 320"
                d="M1003.727 127.47a3.617 3.617 0 11-3.617-3.617 3.615 3.615 0 013.617 3.617z"
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 321"
                d="M998.075 128.256a3.007 3.007 0 013.181-1.966"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <g
              data-name="\uADF8\uB8F9 172"
              transform="translate(972.262 123.853)"
            >
              <circle
                data-name="\uD0C0\uC6D0 13"
                cx={3.617}
                cy={3.617}
                r={3.617}
                fill="#ffb1a5"
              />
              <path
                data-name="\uD328\uC2A4 322"
                d="M5.645 4.403a3.006 3.006 0 00-3.181-1.966"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
            </g>
            <path
              data-name="\uD328\uC2A4 323"
              d="M999.141 120.816a49.609 49.609 0 01-1.317 11.262c-.648 2.73-2.464 4.634-5.03 6.17l-.471.28a9.036 9.036 0 01-8.982.1c-2.784-1.577-4.73-3.658-5.33-6.586a71.786 71.786 0 01-1.208-11.221s-1.037-11.487 11.009-11.262 11.329 11.257 11.329 11.257z"
              fill="#ffb1a5"
            />
            <path
              data-name="\uD328\uC2A4 324"
              d="M995.489 110.96s-3.727 12.92-20.647 11.76c0 0 1.508-12.75 9.712-13.808-.007-.006 8.02-1.16 10.935 2.048z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 325"
              d="M991.25 109.548s.58 8.866 7.815 13.937l1.044-4.211c0-.007 1.147-8.825-8.859-9.726z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 326"
              d="M979.136 120.598l-1.966 5.494-.853-5.494z"
              fill="#4a280d"
            />
            <path
              data-name="\uD328\uC2A4 327"
              d="M996.752 120.598l2.034 5.03.778-5.03z"
              fill="#4a280d"
            />
            <g data-name="\uADF8\uB8F9 173">
              <path
                data-name="\uD328\uC2A4 328"
                d="M983.735 125.907a1.085 1.085 0 11-1.085-1.078 1.082 1.082 0 011.085 1.078z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 329"
                d="M994.055 125.907a1.085 1.085 0 11-1.085-1.078 1.082 1.082 0 011.085 1.078z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 330"
                d="M987.387 127.969v1.454a.568.568 0 00.682.566l.778-.164"
                fill="none"
                stroke="#4a280d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={0.35}
              />
              <path
                data-name="\uD328\uC2A4 331"
                d="M982.664 121.512s2.287-.314 2.362.621c0 0 .034.635-1.966.867s-3.331.116-3.549-.471 2.074-.955 3.153-1.017z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 332"
                d="M992.909 121.361s-2.4-.328-2.471.648c0 0-.034.662 2.054.908s3.488.123 3.713-.491-2.17-.996-3.296-1.065z"
                fill="#4a280d"
              />
              <path
                data-name="\uD328\uC2A4 333"
                d="M983.694 132.043h8.545s-.676 2.2-4.273 2.2a4.959 4.959 0 01-4.272-2.2z"
                fill="#fff"
              />
            </g>
          </g>
        </g>
        <path
          data-name="\uC120 20"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d="M712 340.898h423.557"
        />
      </g>
    </svg>
  );
};

const StatusWrapper = styled.div`
  ${(p) => p.theme.caption};
  width: fit-content;
  color: #fff;
  border-radius: 4px;
  background-color: ${(p) => p.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  margin-left: ${(p) => (p.marginLeft ? "auto" : "unset")};
  margin-right: ${(p) => (p.marginRight ? "auto" : "unset")};
  white-space: nowrap;
  /* position: absolute;
    right: 0; */
`;

export const StatusIcon = ({ type, marginLeft, marginRight }) => {
  return (
    <StatusWrapper
      background={type.color}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {type.text}
    </StatusWrapper>
  );
};

export const ProfitsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="160"
      viewBox="0 0 160 160"
    >
      <g id="그룹_491" data-name="그룹 491" transform="translate(-100 -202)">
        <circle
          id="타원_24"
          dataname="타원 24"
          cx="80"
          cy="80"
          r="80"
          transform="translate(100 202)"
          fill="#ede0f7"
        />
        <g
          id="icon_Custom_protect"
          dataname="icon / Custom / protect"
          transform="translate(120 222)"
        >
          <g id="BG">
            <path
              id="패스_482"
              dataname="패스 482"
              d="M97.5,120h-75A22.5,22.5,0,0,1,0,97.5v-75A22.5,22.5,0,0,1,22.5,0h75A22.5,22.5,0,0,1,120,22.5v75A22.5,22.5,0,0,1,97.5,120Z"
              fill="#ede0f7"
            />
          </g>
          <g id="solid" transform="translate(30 29.999)">
            <g id="그룹_553" dataname="그룹 553" transform="translate(24.997)">
              <path
                id="패스_483"
                dataname="패스 483"
                d="M45.93,13.288,31.556,8.109a1.9,1.9,0,0,0-1.271,0L15.907,13.288a1.877,1.877,0,0,0-1.241,1.766V26.706c0,14,14.85,20.846,15.48,21.127a1.873,1.873,0,0,0,1.537,0c.634-.285,15.48-7.129,15.48-21.127V15.054a1.87,1.87,0,0,0-1.234-1.766ZM29.97,24.876h1.9a5.306,5.306,0,0,1,.923,10.53v1.969a1.875,1.875,0,0,1-3.75,0V35.5h-2.5a1.875,1.875,0,0,1,0-3.75h5.325a1.562,1.562,0,0,0,0-3.124h-1.9a5.306,5.306,0,0,1-.923-10.53V16.127a1.875,1.875,0,1,1,3.75,0V18h2.5a1.875,1.875,0,0,1,0,3.75H29.97a1.562,1.562,0,0,0,0,3.124Z"
                transform="translate(-14.666 -8)"
                fill="#c699f6"
              />
            </g>
            <g
              id="그룹_554"
              dataname="그룹 554"
              transform="translate(0 29.999)"
            >
              <path
                id="패스_484"
                dataname="패스 484"
                d="M9.23,16A1.255,1.255,0,0,0,8,17.257v22.5A1.248,1.248,0,0,0,9.249,41h5.306a1.253,1.253,0,0,0,1.2-.908L21.29,20.6a2.5,2.5,0,0,0-1.549-3.03A29.166,29.166,0,0,0,9.23,16Z"
                transform="translate(-8 -16)"
                fill="#c699f6"
              />
            </g>
            <g
              id="그룹_555"
              dataname="그룹 555"
              transform="translate(11.88 34.557)"
            >
              <path
                id="패스_485"
                dataname="패스 485"
                d="M54.289,26.41c-5,0-15,6.33-20,6.33s-10.624-3.829-10.624-3.829A77.955,77.955,0,0,0,34.291,30.16c3.889,0,5-1.327,5-3.124,0-4.376-7.433-5.055-11.19-5.625-3.69-2.055-5.606-3.679-11.719-4.2a6.62,6.62,0,0,1-.191,1.065l-5.021,17.7c5.685,2.58,15.48,6.679,20.621,6.679,7.5,0,27.5-10,27.5-12.5S56.791,26.41,54.289,26.41Z"
                transform="translate(-11.168 -17.215)"
                fill="#793bce"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const AuthenticateMeIcon = () => {
  return (
    <svg
      id="icon_Custom_Face"
      dataname="icon / Custom / Face"
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      viewBox="0 0 62 62"
    >
      <path
        id="패스_458"
        dataname="패스 458"
        d="M50.375,62H11.625A11.624,11.624,0,0,1,0,50.375V11.625A11.624,11.624,0,0,1,11.625,0h38.75A11.624,11.624,0,0,1,62,11.625v38.75A11.624,11.624,0,0,1,50.375,62Z"
        fill="#ede0f7"
      />
      <circle
        id="타원_25"
        dataname="타원 25"
        cx="5"
        cy="5"
        r="5"
        transform="translate(26 18)"
        fill="#793bce"
      />
      <path
        id="패스_459"
        dataname="패스 459"
        d="M25.2,16H16.8a6.144,6.144,0,0,0-6.136,6.136v3.23a.969.969,0,0,0,.969.969h18.73a.969.969,0,0,0,.969-.969v-3.23A6.141,6.141,0,0,0,25.2,16Z"
        transform="translate(9.999 15)"
        fill="#793bce"
      />
      <g id="그룹_477" dataname="그룹 477" transform="translate(15.5 15.5)">
        <path
          id="패스_460"
          dataname="패스 460"
          d="M14.458,8H11.875A3.879,3.879,0,0,0,8,11.875v2.583a1.291,1.291,0,1,0,2.583,0V11.875a1.293,1.293,0,0,1,1.292-1.292h2.583a1.291,1.291,0,1,0,0-2.583Z"
          transform="translate(-8 -8)"
          fill="#c699f6"
        />
        <path
          id="패스_461"
          dataname="패스 461"
          d="M14.458,25.167H11.875a1.293,1.293,0,0,1-1.292-1.292V21.292a1.291,1.291,0,1,0-2.583,0v2.583a3.879,3.879,0,0,0,3.875,3.875h2.583a1.291,1.291,0,1,0,0-2.583Z"
          transform="translate(-8 3.25)"
          fill="#c699f6"
        />
        <path
          id="패스_462"
          dataname="패스 462"
          d="M23.875,8H21.292a1.292,1.292,0,1,0,0,2.585h2.583a1.293,1.293,0,0,1,1.292,1.292V14.46a1.291,1.291,0,1,0,2.583,0V11.875A3.879,3.879,0,0,0,23.875,8Z"
          transform="translate(3.25 -8)"
          fill="#c699f6"
        />
        <path
          id="패스_463"
          dataname="패스 463"
          d="M26.46,20a1.292,1.292,0,0,0-1.292,1.292v2.583a1.293,1.293,0,0,1-1.292,1.292H21.292a1.291,1.291,0,1,0,0,2.583h2.583a3.879,3.879,0,0,0,3.875-3.875V21.292A1.29,1.29,0,0,0,26.46,20Z"
          transform="translate(3.25 3.25)"
          fill="#c699f6"
        />
      </g>
    </svg>
  );
};

export const AuthenticateIDCardIcon = () => {
  return (
    <svg
      id="icon_Custom_Id"
      dataname="icon / Custom / Id"
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      viewBox="0 0 62 62"
    >
      <g id="BG">
        <path
          id="패스_464"
          dataname="패스 464"
          d="M50.375,62H11.625A11.624,11.624,0,0,1,0,50.375V11.625A11.624,11.624,0,0,1,11.625,0h38.75A11.624,11.624,0,0,1,62,11.625v38.75A11.624,11.624,0,0,1,50.375,62Z"
          fill="#ede0f7"
        />
      </g>
      <g id="Layer_1" transform="translate(15.5 18.083)">
        <path
          id="패스_465"
          dataname="패스 465"
          d="M35.449,11.918H28.667v-.324a2.264,2.264,0,0,0-2.261-2.261H20.594a2.264,2.264,0,0,0-2.261,2.261v.324H11.551A3.555,3.555,0,0,0,8,15.469V31.614a3.555,3.555,0,0,0,3.551,3.551h23.9A3.555,3.555,0,0,0,39,31.614V15.469A3.552,3.552,0,0,0,35.449,11.918Z"
          transform="translate(-8 -9.333)"
          fill="#793bce"
        />
        <path
          id="패스_466"
          dataname="패스 466"
          d="M14.667,10.667h5.167V13.25H14.667Z"
          transform="translate(-1.75 -8.082)"
          fill="#ede0f7"
        />
        <g
          id="그룹_478"
          dataname="그룹 478"
          transform="translate(18.083 9.688)"
        >
          <path
            id="패스_467"
            dataname="패스 467"
            d="M25.407,21.6H18.3a.969.969,0,0,1,0-1.937h7.1a.969.969,0,0,1,0,1.938Z"
            transform="translate(-17.333 -9.332)"
            fill="#c699f6"
          />
          <path
            id="패스_468"
            dataname="패스 468"
            d="M25.407,18.937H18.3A.969.969,0,0,1,18.3,17h7.1a.969.969,0,0,1,0,1.938Z"
            transform="translate(-17.333 -11.833)"
            fill="#c699f6"
          />
          <path
            id="패스_469"
            dataname="패스 469"
            d="M25.407,16.271H18.3a.969.969,0,0,1,0-1.937h7.1a.969.969,0,0,1,0,1.937Z"
            transform="translate(-17.333 -14.333)"
            fill="#c699f6"
          />
        </g>
        <circle
          id="타원_26"
          dataname="타원 26"
          cx="3.23"
          cy="3.23"
          r="3.23"
          transform="translate(6.458 9.042)"
          fill="#ede0f7"
        />
        <path
          id="패스_470"
          dataname="패스 470"
          d="M21.625,22.2a.969.969,0,0,1-.969.969H10.969A.969.969,0,0,1,10,22.2v-.645A3.555,3.555,0,0,1,13.551,18h4.52a3.555,3.555,0,0,1,3.553,3.551Z"
          transform="translate(-6.125 -1.208)"
          fill="#ede0f7"
        />
      </g>
    </svg>
  );
};

export const AuthenticateLicenseIcon = () => {
  return (
    <svg
      id="icon_Custom_certificate"
      dataname="icon / Custom / certificate"
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      viewBox="0 0 62 62"
    >
      <path
        id="패스_452"
        dataname="패스 452"
        d="M50.375,62H11.625A11.624,11.624,0,0,1,0,50.375V11.625A11.624,11.624,0,0,1,11.625,0h38.75A11.624,11.624,0,0,1,62,11.625v38.75A11.624,11.624,0,0,1,50.375,62Z"
        fill="#ede0f7"
      />
      <g id="그룹_476" dataname="그룹 476" transform="translate(15.5 15.5)">
        <path
          id="패스_453"
          dataname="패스 453"
          d="M35.125,8H11.875A3.886,3.886,0,0,0,8,11.875v15.5a3.886,3.886,0,0,0,3.875,3.875H23.8a6.23,6.23,0,0,1-.3-1.937,5.369,5.369,0,0,1,.039-.645H11.875a1.3,1.3,0,0,1-1.292-1.292v-15.5a1.3,1.3,0,0,1,1.292-1.292h23.25a1.3,1.3,0,0,1,1.292,1.292V25.244a7.026,7.026,0,0,1,1.292,4.069,5.364,5.364,0,0,1-.091,1.021A3.874,3.874,0,0,0,39,27.375v-15.5A3.886,3.886,0,0,0,35.125,8Z"
          transform="translate(-8 -8)"
          fill="#9f63e6"
        />
        <path
          id="패스_454"
          dataname="패스 454"
          d="M26.167,13.251H11.959a1.292,1.292,0,0,1,0-2.585H26.167a1.292,1.292,0,0,1,0,2.585Z"
          transform="translate(-5.5 -5.501)"
          fill="#9f63e6"
        />
        <path
          id="패스_455"
          dataname="패스 455"
          d="M31.333,15.918H11.958a1.292,1.292,0,1,1,0-2.585H31.333a1.292,1.292,0,1,1,0,2.585Z"
          transform="translate(-5.501 -3)"
          fill="#9f63e6"
        />
        <path
          id="패스_456"
          dataname="패스 456"
          d="M19.708,18.583h-7.75a1.291,1.291,0,1,1,0-2.583h7.75a1.291,1.291,0,1,1,0,2.583Z"
          transform="translate(-5.501 -0.5)"
          fill="#9f63e6"
        />
      </g>
      <path
        id="패스_457"
        dataname="패스 457"
        d="M26.375,21.187a4.521,4.521,0,0,0-9.042,0,4.472,4.472,0,0,0,.655,2.309.376.376,0,0,0,0,.047L18.629,30a.969.969,0,0,0,1.649.589l1.575-1.575,1.575,1.575A.969.969,0,0,0,25.077,30l.645-6.458c0-.016-.006-.031,0-.047a4.456,4.456,0,0,0,.657-2.309Z"
        transform="translate(16.25 15.625)"
        fill="#c699f6"
      />
    </svg>
  );
};

export const CompleteReservationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="160"
      viewBox="0 0 160 160"
    >
      <g id="그룹_492" dataname="그룹 492" transform="translate(-100 -202)">
        <circle
          id="타원_24"
          dataname="타원 24"
          cx="80"
          cy="80"
          r="80"
          transform="translate(100 202)"
          fill="#ede0f7"
        />
        <g
          id="icon_Custom_Reservation"
          dataname="icon / Custom / Reservation"
          transform="translate(120 222)"
        >
          <g id="그룹_489" dataname="그룹 489">
            <path
              id="패스_474"
              dataname="패스 474"
              d="M97.5,120h-75A22.5,22.5,0,0,1,0,97.5v-75A22.5,22.5,0,0,1,22.5,0h75A22.5,22.5,0,0,1,120,22.5v75A22.5,22.5,0,0,1,97.5,120Z"
              fill="#ede0f7"
            />
          </g>
          <path
            id="패스_475"
            dataname="패스 475"
            d="M51.751,40c-.424,0-.825,0-1.249-.026V42.4c0,4.451-4.35,5.1-6.949,5.1h-23.6a6.946,6.946,0,0,1-6.949-6.926V24.55A7.483,7.483,0,0,0,15.5,25H31.426a21.493,21.493,0,0,1-.926-6.251A20.889,20.889,0,0,1,32.4,10H15.5A7.509,7.509,0,0,0,8,17.5V40.574A11.931,11.931,0,0,0,18,52.3V60a2.5,2.5,0,1,0,5,0V52.5H40.5V60a2.5,2.5,0,1,0,5,0V52.375c6.124-.675,10-4.4,10-9.975V39.674A22.969,22.969,0,0,1,51.751,40Z"
            transform="translate(22 27.5)"
            fill="#793bce"
          />
          <path
            id="패스_476"
            dataname="패스 476"
            d="M31.583,8A16.249,16.249,0,1,0,47.831,24.249,16.28,16.28,0,0,0,31.583,8ZM40.23,21.65l-9.375,9.375a2.535,2.535,0,0,1-3.547,0l-4.376-4.376A2.511,2.511,0,0,1,26.483,23.1l2.6,2.625,7.6-7.624A2.51,2.51,0,1,1,40.23,21.65Z"
            transform="translate(42.169 22)"
            fill="#c699f6"
          />
        </g>
      </g>
    </svg>
  );
};
