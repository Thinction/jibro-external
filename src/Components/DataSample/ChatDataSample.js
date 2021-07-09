import statusList from "./Status";

const chatDataSample = [
    {
        id: 'aef3490j2fqw34',
        name: '오○정',
        date: '2021년 04월 10일',
        lastDate: '3분 전',
        src: '/img/profileSample1.png',
        isRead: false,
        status: statusList.pay.end,
        message: [
            {
                isMe: false,
                text: '안녕하세요 서비스를 이용해주셔서 감사합니다 :)',
                date: '13:00',
            },
            {
                isMe: true,
                text: '클래스는 언제부터 시작 가능하신가요?',
                date: '13:01',
            },
            {
                isMe: false,
                text: '내일 오후 2시에 회원님 집에서 바로 진행 가능합니다! 확인 후 답장 부탁드립니다 :)',
                date: '13:01',
            }
        ]
    },
    {
        id: 'aef3490j2qv2v34253fqw34',
        name: '최○주',
        date: '2021년 04월 5일',
        lastDate: '04.05',
        src: '/img/profileSample4.png',
        isRead: true,
        status: statusList.reservation.wait,
        message: [
            {
                isMe: false,
                text: '안녕하세요 서비스를 이용해주셔서 감사합니다 :)',
                date: '14:00',
            },
        ]
    },
    {
        id: 'aef3490j2qv253143v5243vfqw34',
        name: '한○영',
        date: '2021년 04월 5일',
        lastDate: '04.05',
        src: '/img/profileSample2.png',
        isRead: true,
        message: [
            {
                isMe: true,
                text: '안녕하세요. 요가 정기 클래스 문의드리고자합니다.',
                date: '11:00',
            },
        ]
    },
];

export default chatDataSample;