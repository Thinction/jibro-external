import AlarmSetting from "../../Routes/MyPage/GeneralSetting/AlarmSetting";
import EditProfileStep from "../../Routes/MyPage/Tutor/Business/EditProfile/EditProfileStep";
import AddEditStep from "../../Routes/MyPage/Tutor/Business/MyService/AddEditStep";
import MyService from "../../Routes/MyPage/Tutor/Business/MyService/MyService";
import EditAccount from "../../Routes/MyPage/Tutor/Business/ProfitsInfo/EditAccount";
import ProfitsRoutes from "../../Routes/MyPage/Tutor/Business/ProfitsInfo/ProfitsRoutes";
import ReservingService from "../../Routes/MyPage/Tutor/Business/ReservingService/ReservingService";
import ReviewWrite from "../../Routes/MyPage/Tutor/Business/TransactionalInfo/ReviewWrite";
import TransactionalInfo from "../../Routes/MyPage/Tutor/Business/TransactionalInfo/TransactionalInfo";
import EditTutorInfo from "../../Routes/MyPage/Tutor/General/EditTutorInfo";
import Notices from "../../Routes/MyPage/GeneralSetting/Notices";
import TermsAndPolicy from "../../Routes/MyPage/GeneralSetting/TermsAndPolicy";
import Policy from "../../Routes/MyPage/GeneralSetting/Policy";
import Terms from "../../Routes/MyPage/GeneralSetting/Terms";
import Inquiry from "../../Routes/MyPage/GeneralSetting/Inquiry";
import AppVersion from "../../Routes/MyPage/GeneralSetting/AppVersion";
import EditUserInfo from "../../Routes/MyPage/User/General/EditUserInfo";
import ChargeCash from "../../Routes/MyPage/User/myJibro/ChargeCash";
import ReservingServiceUser from "../../Routes/MyPage/User/myJibro/Reservation/ReservingServiceUser";
import Purchase from "../../Routes/MyPage/User/myJibro/Reservation/Purchase";
import TransactionalInfoUser from "../../Routes/MyPage/User/myJibro/TransactionalInfo/TransactionalInfoUser";
import FavoriteList from "../../Routes/MyPage/User/myJibro/FavoriteList";
import ReviewWriteUser from "../../Routes/MyPage/User/myJibro/TransactionalInfo/ReviewWriteUser";

export const tutorBusinessMenuList = [
  {
    component: EditProfileStep,
    path: "profileSetting",
    text: "전문가 프로필 관리",
  },
  {
    component: ReservingService,
    path: "reservation",
    text: "예약 중인 서비스 관리",
  },
  {
    component: TransactionalInfo,
    path: "saleHistory",
    text: "거래 내역",
  },
  {
    component: MyService,
    path: "myService",
    text: "나의 서비스 관리",
  },
  {
    component: ProfitsRoutes,
    path: "profits",
    text: "수익금 관리",
  },
  {
    component: EditAccount,
    path: "editAccount",
    text: "출금정보 등록",
  },
  {
    component: ReviewWrite,
    path: "review",
    text: "리뷰 작성",
  },
  {
    component: AddEditStep,
    path: "setService",
    text: "서비스 등록/수정",
  },
];

export const tutorSettingMenuList = [
  {
    component: EditTutorInfo,
    path: "edit",
    text: "회원정보 수정",
  },
  {
    component: AlarmSetting,
    path: "alarmSetting",
    text: "알람 설정",
  },
  {
    component: Notices,
    path: "notice",
    text: "공지사항",
  },
  {
    component: TermsAndPolicy,
    path: "information",
    text: "지브로 안내",
  },
  {
    component: Inquiry,
    path: "contact",
    text: "문의하기",
  },
  {
    component: AppVersion,
    path: "versionInfo",
    text: "앱 버전",
  },
  {
    path: "logout",
    text: "로그아웃",
  },
  {
    component: Policy,
    path: "policy",
    text: "이용약관",
  },
  {
    component: Terms,
    path: "terms",
    text: "개인정보 처리방침",
  },
];

export const myJibroList = [
  {
    component: ReservingServiceUser,
    path: "reservation",
    text: "예약 중인 서비스 관리",
  },
  {
    component: TransactionalInfoUser,
    path: "saleHistory",
    text: "거래 내역",
  },
  {
    component: FavoriteList,
    path: "favoriteList",
    text: "찜 리스트",
  },
  {
    component: ChargeCash,
    path: "chargeCash",
    text: "지브로 캐쉬 충전",
  },
  {
    component: Purchase,
    path: "purchase",
    text: "구매하기",
  },
  {
    component: ReviewWriteUser,
    path: "review",
    text: "리뷰 작성",
  },
];

export const userSettingMenuList = [
  {
    component: EditUserInfo,
    path: "edit",
    text: "회원정보 수정",
  },
  {
    component: AlarmSetting,
    path: "alarmSetting",
    text: "알람 설정",
  },
  {
    component: Notices,
    path: "notice",
    text: "공지사항",
  },
  {
    component: TermsAndPolicy,
    path: "information",
    text: "지브로 안내",
  },
  {
    component: Inquiry,
    path: "contact",
    text: "문의하기",
  },
  {
    component: AppVersion,
    path: "versionInfo",
    text: "앱 버전",
  },
  {
    path: "logout",
    text: "로그아웃",
  },
  {
    component: Policy,
    path: "policy",
    text: "이용약관",
  },
  {
    component: Terms,
    path: "terms",
    text: "개인정보 처리방침",
  },
];
