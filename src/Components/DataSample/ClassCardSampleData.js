import statusList from "./Status";

const classCardSample = [
    {
        id: 'afj30jq239jafw3j',
        name: '오연정',
        email: 'abc@jibro.com',
        phoneNumber: '010-1234-5678',
        profileImg: '/img/profileSample1.png',
        biggerImg: '/img/detailImg.png',
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
                    description: `겨울동안 집콕하지말고, 움츠려있지 말고, 피치쌤과 함께
                    운동해요!
                    피치홈트에서 바디프로필까지 남긴 수강생 3년간 총 100명
                    달성성공!
                    운동 등록 시작부터 바디프로필 촬영까지 평균기간 3개월!
                    지금 내 모습이 과체중이어도, 체력이 한 없이 부족해도, 운동이
                    처음이라도..! 다 괜찮아요 :)
                    
                    안녕하세요. "피치홈트" 대표이자 홈트레이닝 강사 피치쌤 입니다.
                    
                    _ 수업방식은 크게 그룹레슨 or 1:1 개인레슨 으로 진행되고 있습니다.
                    
                    1) 그룹레슨은 활기찬 분위기 속에서 체력 상승과 체지방 감량 효과에 뛰어난 레슨입니다.
                    *수업시간:
                    화목 ( 낮12시 / 저녁 7시 / 저녁 8시 )
                    수금 ( 낮12시 / 저녁 7시 / 저녁 8시 )
                    타임 당 40분 *수업인원: 최대 정원 8명
                    화목class or 수금class 중 택1로 고정시간으로 진행
                    *수업료: 16회 40만원 ( 회당 25000원 : 장소비 포함 )
                    
                    -이런 분들에게 추천해요 !
                    * 여러 사람들과 화이팅 넘치는 분위기를 선호하시는 분들에게 추천해요
                    * 단기간에 체지방 감량 & 체력상승을 기대하시는 분들에게 추천해요
                    * 매번 다양한 부위 운동을 배우고 싶은 분들에게 추천해요
                    * 가성비 효과가 뛰어난 운동을 선호하시는 분들에게 추천해요
                     
                    2) 개인레슨은 프라이빗한 1:1 개인룸 공간 속에서 개인별 맞춤형
                    레슨입니다.
                    *수업시간: 월~금 / 11:00~22:00 까지 운영 ( 수업 시간 문의 )
                    주 2회 회원님 별 고정시간으로 진행
                    *수업료: 10회 50만원 ( 회당 50000원 : 장소비 포함 )
                    타임당 50분
                    
                    -이런 분들에게 추천해요!
                    * 운동을 처음 하시는 분들에게 추천해요.
                    * 부위별 자극 위주의 운동을 선호하시는 분들에게 추천해요.
                    * 과거에 수술을 하셨거나 , 특정 부위가 불편하신 분들에게 추천해요.
                    * 프라이빗한 공간을 선호하시는 분들에게 추천해요. ( 1:1 개인룸 완비 )
                    * 오로지 나에게 맞춤 형식의 레슨을 선호하시는 분들에게 추천해요.
                    
                    " ...... "
                    겨울동안 집콕하지말고, 움츠려있지 말고, 피치쌤과 함께
                    운동해요!
                    피치홈트에서 바디프로필까지 남긴 수강생 3년간 총 100명
                    달성성공!
                    운동 등록 시작부터 바디프로필 촬영까지 평균기간 3개월!
                    지금 내 모습이 과체중이어도, 체력이 한 없이 부족해도, 운동이
                    처음이라도..! 다 괜찮아요 :)
                    
                    안녕하세요. "피치홈트" 대표이자 홈트레이닝 강사 피치쌤 입니다.
                    
                    _ 수업방식은 크게 그룹레슨 or 1:1 개인레슨 으로 진행되고 있습니다.
                    
                    1) 그룹레슨은 활기찬 분위기 속에서 체력 상승과 체지방 감량 효과에 뛰어난 레슨입니다.
                    *수업시간:
                    화목 ( 낮12시 / 저녁 7시 / 저녁 8시 )
                    수금 ( 낮12시 / 저녁 7시 / 저녁 8시 )
                    타임 당 40분 *수업인원: 최대 정원 8명
                    화목class or 수금class 중 택1로 고정시간으로 진행
                    *수업료: 16회 40만원 ( 회당 25000원 : 장소비 포함 )
                    
                    -이런 분들에게 추천해요 !
                    * 여러 사람들과 화이팅 넘치는 분위기를 선호하시는 분들에게 추천해요
                    * 단기간에 체지방 감량 & 체력상승을 기대하시는 분들에게 추천해요
                    * 매번 다양한 부위 운동을 배우고 싶은 분들에게 추천해요
                    * 가성비 효과가 뛰어난 운동을 선호하시는 분들에게 추천해요
                     
                    2) 개인레슨은 프라이빗한 1:1 개인룸 공간 속에서 개인별 맞춤형
                    레슨입니다.
                    *수업시간: 월~금 / 11:00~22:00 까지 운영 ( 수업 시간 문의 )
                    주 2회 회원님 별 고정시간으로 진행
                    *수업료: 10회 50만원 ( 회당 50000원 : 장소비 포함 )
                    타임당 50분
                    
                    -이런 분들에게 추천해요!
                    * 운동을 처음 하시는 분들에게 추천해요.
                    * 부위별 자극 위주의 운동을 선호하시는 분들에게 추천해요.
                    * 과거에 수술을 하셨거나 , 특정 부위가 불편하신 분들에게 추천해요.
                    * 프라이빗한 공간을 선호하시는 분들에게 추천해요. ( 1:1 개인룸 완비 )
                    * 오로지 나에게 맞춤 형식의 레슨을 선호하시는 분들에게 추천해요.`,
                    guide: '- 요가 매트는 고객께서 직접 준비해주셔야합니다.\r\n- 수업 시간은 전문가와 채팅을 통해 별도 상의 가능합니다.\r\n-해당 내용은 수정한 가이드입니다.',
                    curriculums: [
                        {
                            contents:
                                "회원마다 타고난 체형을 분석후 본인에게 알맞는 식단&운동 설계 및 설명, 건강한 식단과 생활습관지도와 함께 운동 시작!",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                    ],
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
                    guide: '- 요가 매트는 고객께서 직접 준비해주셔야합니다.\r\n- 수업 시간은 전문가와 채팅을 통해 별도 상의 가능합니다.\r\n-해당 내용은 수정한 가이드입니다.',
                    curriculums: [
                        {
                            contents:
                                "회원마다 타고난 체형을 분석후 본인에게 알맞는 식단&운동 설계 및 설명, 건강한 식단과 생활습관지도와 함께 운동 시작!",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                    ],
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
                    guide: '- 요가 매트는 고객께서 직접 준비해주셔야합니다.\r\n- 수업 시간은 전문가와 채팅을 통해 별도 상의 가능합니다.\r\n-해당 내용은 수정한 가이드입니다.',
                    curriculums: [
                        {
                            contents:
                                "회원마다 타고난 체형을 분석후 본인에게 알맞는 식단&운동 설계 및 설명, 건강한 식단과 생활습관지도와 함께 운동 시작!",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                    ],
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
        ],
    },
    {
        id: '2jqwv8dmstjqwp3v',
        name: '한채영',
        email: 'def@jibro.com',
        phoneNumber: '010-2345-6789',
        profileImg: '/img/profileSample2.png',
        biggerImg: '/img/detailImg.png',
        introduceText: `안녕하세요 :) 강남구 요가 주치의 영이쌤입니다!`,
        mainCategory: '요가',
        homeTown: '서울특별시 강남구 테헤란 5로',
        homeDetail: '810호',
        jobHistory: [
            {
                company: 'Q&S 휘트니스',
                grade: '트레이너',
                role: '퍼스널 트레이닝',
                year: 3,
                month: 2,
            },
            {
                company: 'T&M 필라테스',
                grade: '트레이너',
                role: '퍼스널 트레이닝',
                year: 1,
                month: 2,
            },
            {
                company: 'HELLO 요가',
                grade: '트레이너',
                role: '퍼스널 트레이닝',
                year: 2,
                month: 11,
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
        reviewCount: 325,
        workRegion: {
            sido: 11,
            sigugun: 680,
        },
        certCount: 2,
        certType: {
            phone: true,
            idCard: true,
            certificateCard: false
        },
        ratingCount: 3,
        account: {
            holder: '한채영',
            bank: '우리은행',
            acccountNumber: '21542412312',
        },
        service: [
            {
                id: '1984avnw3prawer',
                category: '요가',
                title: '[단체수업] 이웃들과 함께 듣는 요가 수업',
                type: '원데이 클래스',
                recruitType: '개인 레슨',
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
                    guide: '- 요가 매트는 고객께서 직접 준비해주셔야합니다.\r\n- 수업 시간은 전문가와 채팅을 통해 별도 상의 가능합니다.\r\n-해당 내용은 수정한 가이드입니다.',
                    curriculums: [
                        {
                            contents:
                                "회원마다 타고난 체형을 분석후 본인에게 알맞는 식단&운동 설계 및 설명, 건강한 식단과 생활습관지도와 함께 운동 시작!",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                        {
                            contents:
                                "몸 안쪽의 코어근육과 몸 바깥쪽에 있는 큰 근육들을 연결하며 사용하는 근력과 체력증진 운동 프로그램으로 체력향상과 다이어트 와 체중증진을 위해서 좀 더 힘들고 효과적인 운동이 진행됩니다.",
                        },
                    ],
                },
                onSale: true,
                serviceNumber: 89326,
                revenue: 523500,
                saleCount: 30,
                saleHistory: [
                    {
                        price: 231000,
                        date: '21.03.30',
                        time: '23:06',
                        status: statusList.account.end,
                        commission: 17500,
                    },
                    {
                        price: 231000,
                        date: '21.03.30',
                        time: '23:06',
                        status: statusList.account.refund,
                        commission: 17500,
                    },
                    {
                        price: 231000,
                        date: '21.03.30',
                        time: '23:06',
                        status: statusList.onProgress,
                        commission: 17500,
                    },
                ],
            },
        ],
    },
    {
        id: '2jqa324vwv8qwp3v',
        name: '김미경',
        email: 'ghi@jibro.com',
        phoneNumber: '010-7234-3459',
        profileImg: '/img/profileSample3.png',
        biggerImg: '/img/detailImg.png',
        mainCategory: '헤어',
        homeTown: '서울특별시 강남구 테헤란 3로',
        homeDetail: '1010호',
        jobHistory: [
            {
                company: 'Q&S 헤어',
                grade: '디자이너',
                role: '헤어 디자인',
                year: 3,
                month: 2,
            },
            {
                company: 'T&M 뷰티',
                grade: '디자이너',
                role: '헤어 디자인',
                year: 1,
                month: 2,
            },
            {
                company: 'HELLS 뷰티',
                grade: '디자이너',
                role: '스타일 가이딩',
                year: 2,
                month: 11,
            },
        ],
        licenseList: [
            {
                certification: '미용사 자격증',
                issuingAgency: '한국 미용협회',
                issuingDate: '2011년 8월',
            },
        ],
        reviewCount: 754,
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
        ratingCount: 3,
        account: {
            holder: '김미경',
            bank: '신한은행',
            acccountNumber: '21542412312',
        },
        service: [
            {
                id: 'jqf23jv5af4jfw',
                category: '헤어',
                title: '연예인 메이크업 & 헤어 디자인을 집에서!',
                type: '정규 클래스',
                recruitType: '개인 레슨',
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
                    curriculums: [
                        {
                            contents:
                                "무엇이든 물어보살! 어울리는 헤어스타일은 뭘까?",
                        },
                        {
                            contents:
                                "딱 맞는 컬러와 딱 맞는 스타일 찾기",
                        },
                    ],
                },
                onSale: true,
                serviceNumber: 54261,
                revenue: 523500,
                saleCount: 40,
                saleHistory: [
                    {
                        price: 231000,
                        date: '21.03.30',
                        time: '23:06',
                        status: statusList.account.end,
                        commission: 17500,
                    },
                    {
                        price: 231000,
                        date: '21.03.30',
                        time: '23:06',
                        status: statusList.account.refund,
                        commission: 17500,
                    },
                    {
                        price: 231000,
                        date: '21.03.30',
                        time: '23:06',
                        status: statusList.onProgress,
                        commission: 17500,
                    },
                ],
            },
        ],
    },
    {
        id: '2jqwv8qq23cq2DQWFwp3v',
        name: '박은지',
        email: 'eunnn@jibro.com',
        phoneNumber: '010-3825-3987',
        profileImg: '/img/profileSample4.png',
        biggerImg: '/img/detailImg.png',
        mainCategory: '헤어',
        homeTown: '서울특별시 강남구 테헤란 3로',
        homeDetail: '310호',
        jobHistory: [
            {
                company: 'E&O 헤어',
                grade: '부점장',
                role: '헤어 디자인',
                year: 6,
                month: 7,
            },
        ],
        licenseList: [
            {
                certification: '미용사 자격증',
                issuingAgency: '한국 미용협회',
                issuingDate: '2011년 8월',
            },
        ],
        reviewCount: 54,
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
            holder: '박은지',
            bank: '기업은행',
            acccountNumber: '25542412312',
        },
        service: [
            {
                id: 'jqf23jv5af4qw34jfw',
                category: '헤어',
                title: '데일리부터 촬영까지 만족스러운 서비스',
                type: '정규 클래스',
                recruitType: '개인 레슨',
                program: {
                    period: 1,
                    periodUnit: '개월',
                    count: 10,
                    price: 120000,
                    perTime: 120,
                    perTimeUnit: '분',
                    supplies: true,
                    disposable: 12000,
                    description: '서비스가 진행되는 프로그램 관련 설명을 적는 부분입니다. 해당 칸의 경우 100글자 이상 작성되어야만 정확하게 입력된 것으로 처리하도록 작업해둔 상태이므로, 이에 맞게 100글자 이상 반드시 작성되어야만 합니다.',
                    curriculums: [
                        {
                            contents:
                                "무엇이든 물어보살! 어울리는 헤어스타일은 뭘까?",
                        },
                        {
                            contents:
                                "딱 맞는 컬러와 딱 맞는 스타일 찾기",
                        },
                    ],
                },
                onSale: true,
                serviceNumber: 54261,
                revenue: 523500,
                saleCount: 40,
                saleHistory: [
                    {
                        price: 231000,
                        date: '21.03.30',
                        time: '23:06',
                        status: statusList.account.end,
                        commission: 17500,
                    },
                ],
            },
            {
                id: 'jqf23ja34f3w4qwwu4ga3434jfw',
                category: '헤어',
                title: '데일리부터 촬영까지 만족스러운 서비스',
                type: '정규 클래스',
                recruitType: '개인 레슨',
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
                    curriculums: [
                        {
                            contents:
                                "무엇이든 물어보살! 어울리는 헤어스타일은 뭘까?",
                        },
                        {
                            contents:
                                "딱 맞는 컬러와 딱 맞는 스타일 찾기",
                        },
                    ],
                },
                onSale: true,
                serviceNumber: 54261,
                revenue: 523500,
                saleCount: 40,
                saleHistory: [
                    {
                        price: 231000,
                        date: '21.03.30',
                        time: '23:06',
                        status: statusList.account.end,
                        commission: 17500,
                    },
                ],
            },
        ],
    },
    {
        id: '2jqwv8qwp3r6m8v',
        name: '이규진',
        email: 'veritas@jibro.com',
        phoneNumber: '010-5483-9083',
        profileImg: '/img/profileSample5.png',
        biggerImg: '/img/detailImg.png',
        mainCategory: '차량 정비',
        homeTown: '서울특별시 강남구 테헤란 9로',
        homeDetail: 'B102호',
        jobHistory: [
            {
                company: 'Themorone Car Care',
                grade: '센터장',
                role: '차량 정비 총괄',
                year: 16,
                month: 7,
            },
        ],
        licenseList: [
            {
                certification: '차량 정비사 자격증',
                issuingAgency: '한국 자동차 협회',
                issuingDate: '1996년 8월',
            },
        ],
        reviewCount: 727,
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
            holder: '이규진',
            bank: '하나은행',
            acccountNumber: '22362412312',
        },
        service: [
            {
                id: '2f08jfn23423iu',
                category: '차량 정비',
                title: '독일 수입차 소모품 정비 싸고 쉽게 도와드립니다.',
                type: '원데이 클래스',
                recruitType: '개인 레슨',
                program: {
                    period: 3,
                    periodUnit: '개월',
                    count: 18,
                    price: 650000,
                    perTime: 90,
                    perTimeUnit: '분',
                    supplies: true,
                    disposable: 15000,
                    description: '서비스가 진행되는 프로그램 관련 설명을 적는 부분입니다. 해당 칸의 경우 100글자 이상 작성되어야만 정확하게 입력된 것으로 처리하도록 작업해둔 상태이므로, 이에 맞게 100글자 이상 반드시 작성되어야만 합니다.',
                    curriculums: [
                        {
                            contents:
                                "차를 알아야 관리가 보인다, 내 차 올바로 알기",
                        },
                        {
                            contents:
                                "차량 전문가 되기 프로젝트",
                        },
                    ],
                    onSale: true,
                    serviceNumber: 54261,
                    revenue: 523500,
                    saleCount: 40,
                    saleHistory: [
                        {
                            price: 231000,
                            date: '21.03.30',
                            time: '23:06',
                            status: statusList.account.end,
                            commission: 17500,
                        },
                    ],
                },
            },
        ],
    },
    {
        id: '2jqwv8qwp3vf345q',
        name: '신규리',
        email: 'Leeshin@jibro.com',
        phoneNumber: '010-5182-7253',
        profileImg: '/img/profileSample6.png',
        biggerImg: '/img/detailImg.png',
        mainCategory: '피부 관리',
        homeTown: '서울특별시 강남구 테헤란 3로',
        homeDetail: '2102호',
        jobHistory: [
            {
                company: 'Bros Care',
                grade: '원장',
                role: '피부 관리',
                year: 4,
                month: 9,
            },
        ],
        licenseList: [
            {
                certification: '피부 관리사 자격증',
                issuingAgency: '한국 미용 협회',
                issuingDate: '2017년 8월',
            },
        ],
        reviewCount: 912,
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
        ratingCount: 3,
        account: {
            holder: '신규리',
            bank: 'NH은행',
            acccountNumber: '983622312',
        },
        service: [
            {
                id: 's45bl9salhafw',
                category: '피부 관리',
                title: '화장품 선택, 각종 피부고민 속 시원하게 해결해 드립니다.',
                type: '정규 클래스',
                recruitType: '개인 레슨',
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
                    curriculums: [
                        {
                            contents:
                                "참지 마세요, 피부 좀 챙겨주세요.",
                        },
                        {
                            contents:
                                "오늘부터 나는 그루밍족!",
                        },
                    ],
                    onSale: true,
                    serviceNumber: 54261,
                    revenue: 523500,
                    saleCount: 40,
                    saleHistory: [
                        {
                            price: 231000,
                            date: '21.03.30',
                            time: '23:06',
                            status: statusList.account.end,
                            commission: 17500,
                        },
                    ],
                },
            },
        ],
    },
];

export default classCardSample;