import classCardSample from "./ClassCardSampleData";
import statusList from "./Status";

const reservationSample = [
    {
        orderNumber: '#2030107',
        client: '손○희',
        hopeDate: '3월 30일',
        status: statusList.reservation.wait,
        title: classCardSample[0].title,
        src: classCardSample[0].img,
    },
    {
        orderNumber: '#2030107',
        client: '손○희',
        hopeDate: '3월 30일',
        status: statusList.pay.wait,
        title: classCardSample[0].title,
        src: classCardSample[0].img,
    },
    {
        orderNumber: '#2030107',
        client: '손○희',
        hopeDate: '3월 30일',
        status: statusList.reservation.cancel,
        title: classCardSample[0].title,
        src: classCardSample[0].img,
    }
];

export default reservationSample;