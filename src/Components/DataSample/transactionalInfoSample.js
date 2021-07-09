import classCardSample from "./ClassCardSampleData";
import statusList from "./Status";

const transactionalInfoSample = [
    {
        orderNumber: '#2030107',
        client: '손정희',
        hopeDate: '3월 30일',
        status: statusList.pay.endViolet,
        title: classCardSample[0].title,
        src: classCardSample[0].img,
        minus: {
            category: '서비스 이용료 (5%)',
            cost: 17500
        },
        totalProfit: 322250,
    },
    {
        orderNumber: '#2030107',
        client: '손정희',
        hopeDate: '3월 30일',
        status: statusList.refund.wait,
        title: classCardSample[0].title,
        src: classCardSample[0].img,
        totalProfit: undefined,
    },
    {
        orderNumber: '#2030107',
        client: '손정희',
        hopeDate: '3월 30일',
        status: statusList.refund.end,
        title: classCardSample[0].title,
        src: classCardSample[0].img,
        totalProfit: undefined,
    }
];

export default transactionalInfoSample;