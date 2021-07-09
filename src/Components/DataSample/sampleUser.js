import classCardSample from "./ClassCardSampleData";
import sampleTutor from "./sampleTutor";
import statusList from "./Status";

const sampleUser = {
    id: 'ajw4fjwnp9fpaw384w345a',
    name: '손정희',
    profileImg: '/img/sampleUserProfile.png',
    email: 'sampleUser@jibro.com',
    phoneNumber: '010-4321-8765',
    ratings: 4,
    reviewCount: 5,
    homeTown: '서울특별시 강남구 테헤란로 114길 23',
    homeDetail: '206호',
    certCount: 3,
    certType: {
        phone: true,
        idCard: true,
        home: true
    },
    cashPoint: 500000,
    reservationHistory: [
        {
            orderNumber: 2030107,
            tutor: sampleTutor.name,
            hopeDate: {
                month: 3,
                day: 30
            },
            status: statusList.reservation.wait,
            title: sampleTutor.service[0].title,
            aboutService: sampleTutor.service[0].program,
            classType: sampleTutor.service[0].type,
            src: sampleTutor.profileImg,
        },
        {
            orderNumber: 2030107,
            tutor: sampleTutor.name,
            hopeDate: {
                month: 3,
                day: 30
            },
            status: statusList.reservation.end,
            title: sampleTutor.service[1].title,
            aboutService: sampleTutor.service[1].program,
            classType: sampleTutor.service[1].type,
            src: sampleTutor.profileImg,
        },
        {
            orderNumber: 2030107,
            tutor: sampleTutor.name,
            hopeDate: {
                month: 3,
                day: 30
            },
            status: statusList.reservation.cancel,
            title: sampleTutor.service[1].title,
            aboutService: sampleTutor.service[1].program,
            classType: sampleTutor.service[1].type,
            src: sampleTutor.profileImg,
        },
    ],
    transactionalHistory: [
        {
            title: sampleTutor.service[0].title,
            orderNumber: 2030107,
            status: statusList.pay.endViolet,
            tutor: sampleTutor.name,
            hopeDate: {
                month: 3,
                day: 30,
            },
            aboutService: sampleTutor.service[0].program,
            classType: sampleTutor.service[1].type,
            src: sampleTutor.profileImg,
            paymentPrice: 350000,
        },
        {
            title: sampleTutor.service[1].title,
            orderNumber: 2030107,
            status: statusList.refund.waitGray,
            tutor: sampleTutor.name,
            hopeDate: {
                month: 3,
                day: 30,
            },
            aboutService: sampleTutor.service[1].program,
            classType: sampleTutor.service[1].type,
            src: sampleTutor.profileImg,
            paymentPrice: 350000,
        },
        {
            title: sampleTutor.service[1].title,
            orderNumber: 2030107,
            status: statusList.refund.end,
            tutor: sampleTutor.name,
            hopeDate: {
                month: 3,
                day: 30,
            },
            aboutService: sampleTutor.service[1].program,
            classType: sampleTutor.service[1].type,
            src: sampleTutor.profileImg,
            paymentPrice: 350000,
        },
    ],
    favoriteList: classCardSample,
};

export default sampleUser;