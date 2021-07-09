import statusList from "./Status"

const sampleTutor = {
    id: 'afj30jq239jafw3j',
    name: '오연정',
    email: 'abc@jibro.com',
    phoneNumber: '010-1234-5678',
    profileImg: '/img/profileSample1.png',
    introduceText: `
    안녕하세요 :)
    강남구에서 요가를 가르치고 있는 전문가입니다.
    `,
    mainCategory: '요가',
    homeTown: '서울특별시 강남구 테헤란 5로',
    homeDetail: '706호',
    jobHistory: [
        {
            company: 'S&S 휘트니스',
            grade: '트레이너',
            role: '퍼스널 트레이닝',
            year: 3,
            month: 2,
        },
        {
            company: 'S&M 필라테스',
            grade: '트레이너',
            role: '퍼스널 트레이닝',
            year: 1,
            month: 2,
        },
        {
            company: '굿바이 요가',
            grade: '트레이너',
            role: '퍼스널 트레이닝',
            year: 5,
            month: 2,
        },
    ],
    licenseList: [
        {
            certification: '스포츠지도사 2급 보디빌딩',
            issuingAgency: '국민체육진흥공단',
            issuingDate: '2011년 8월',
        },
        {
            certification: 'SMT(연부조직가동술)',
            issuingAgency: '척추안정화연구소',
            issuingDate: '2012년 12월',
        },
    ],
    reviewCount: 521,
    workRegion: {
        sido: 11,
        sigugun: 680,
    },
    certCount: 3,
    certType: {
        phone: true,
        idCard: true,
        certificateCard: true
    },
    ratingCount: 4,
    account: {
        holder: '오연정',
        bank: '국민은행',
        accountNumber: '12312231323',
    },
    service: [
        {
            id: '2jqwv8nr6e9qwp3v',
            category: '요가',
            title: '집에서 받는 재활 요가 교실🧘‍♀️',
            type: '정규 클래스',
            recruitType: '개인 레슨',
            images: [
                '/img/twoGirls.png',
                '/img/yogaSample2.png',
            ],
            program: {
                period: 2,
                periodUnit: '개월',
                count: 16,
                price: 350000,
                perTime: 2,
                perTimeUnit: '시간',
                supplies: true,
                disposable: 35000,
                description: '서비스가 진행되는 프로그램 관련 설명을 적는 부분입니다. 해당 칸의 경우 100글자 이상 작성되어야만 정확하게 입력된 것으로 처리하도록 작업해둔 상태이므로, 이에 맞게 100글자 이상 반드시 작성되어야만 합니다.',
                guide: '- 요가 매트는 고객께서 직접 준비해주셔야합니다.\r\n- 수업 시간은 전문가와 채팅을 통해 별도 상의 가능합니다.\r\n-해당 내용은 수정한 가이드입니다.'
            },
            onSale: true,
            serviceNumber: 305344,
            revenue: 332550,
            saleCount: 10,
            saleHistory: [
                {
                    price: 350000,
                    date: '21.03.30',
                    time: '23:06',
                    status: statusList.account.end,
                    commission: 17500,
                },
                {
                    price: 350000,
                    date: '21.03.30',
                    time: '23:06',
                    status: statusList.account.refund,
                    commission: 17500,
                },
                {
                    price: 350000,
                    date: '21.03.30',
                    time: '23:06',
                    status: statusList.onProgress,
                    commission: 17500,
                },
            ],
        },
        {
            id: 'afwje89a234ansv',
            category: '요가',
            title: '집에서 받는 재활 요가 교실🧘‍♀️',
            type: '정규 클래스',
            recruitType: '그룹 레슨',
            images: [
                '/img/twoGirls.png',
                '/img/yogaSample2.png',
            ],
            program: {
                period: 1,
                periodUnit: '개월',
                count: 10,
                price: 260000,
                perTime: 1,
                perTimeUnit: '시간',
                supplies: true,
                disposable: 26000,
                description: '서비스가 진행되는 프로그램 관련 설명을 적는 부분입니다. 해당 칸의 경우 100글자 이상 작성되어야만 정확하게 입력된 것으로 처리하도록 작업해둔 상태이므로, 이에 맞게 100글자 이상 반드시 작성되어야만 합니다.',
            },
            onSale: false,
            serviceNumber: 30534,
            revenue: 330250,
            saleCount: 9,
            saleHistory: [
                {
                    price: 350000,
                    date: '21.03.30',
                    time: '23:06',
                    status: statusList.account.end,
                    commission: 17500,
                },
                {
                    price: 350000,
                    date: '21.03.30',
                    time: '23:06',
                    status: statusList.account.refund,
                    commission: 17500,
                },
                {
                    price: 350000,
                    date: '21.03.30',
                    time: '23:06',
                    status: statusList.onProgress,
                    commission: 17500,
                },
            ],
        },
        {
            id: 'qc3p43nvo3hvn',
            category: '요가',
            title: '집에서 받는 재활 요가 교실🧘‍♀️',
            type: '정규 클래스',
            recruitType: '온라인/화상 레슨',
            images: [
                '/img/twoGirls.png',
                '/img/yogaSample2.png',
            ],
            program: {
                period: 1,
                periodUnit: '개월',
                count: 8,
                price: 180000,
                perTime: 30,
                perTimeUnit: '분',
                supplies: false,
                disposable: 18000,
                description: '서비스가 진행되는 프로그램 관련 설명을 적는 부분입니다. 해당 칸의 경우 100글자 이상 작성되어야만 정확하게 입력된 것으로 처리하도록 작업해둔 상태이므로, 이에 맞게 100글자 이상 반드시 작성되어야만 합니다.',
            },
            onSale: true,
            serviceNumber: 548392,
            revenue: 830000,
            saleCount: 3,
            saleHistory: [
                {
                    price: 350000,
                    date: '21.03.30',
                    time: '23:06',
                    status: statusList.account.end,
                    commission: 17500,
                },
                {
                    price: 350000,
                    date: '21.03.30',
                    time: '23:06',
                    status: statusList.account.refund,
                    commission: 17500,
                },
                {
                    price: 350000,
                    date: '21.03.30',
                    time: '23:06',
                    status: statusList.onProgress,
                    commission: 17500,
                },
            ],
        },
    ]
};

export default sampleTutor;