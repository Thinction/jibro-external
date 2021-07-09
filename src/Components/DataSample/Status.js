import theme from "../../Styles/theme"

const statusList = {
    pay : {
        wait: {
            type: 'payWait',
            text: '결제 대기',
            color: 'rgba(0, 0, 0, .38)',
        },
        end: {
            type: 'payEnd',
            text: '결제 완료',
            color: theme.themeColorSecondary,
        },
        endViolet: {
            type: 'payEndViolet',
            text: '결제 완료',
            color: theme.themeColor,
        },
    }
    ,
    reservation : {
        wait: {
            type: 'reserveWait',
            text: '예약 중',
            color: 'rgba(0, 0, 0, .38)',
        },
        end: {
            type: 'reserveEnd',
            text: '예약 확정',
            color: theme.themeColorSecondary,
        },
        cancel: {
            type: 'reserveCancel',
            text: '예약 취소',
            color: theme.themeColorError,
        },
    },
    refund : {
        wait: {
            type: 'refundWait',
            text: '환불 요청',
            color: theme.themeColorError
        },
        waitGray: {
            type: 'refundWait',
            text: '환불 요청',
            color: 'rgba(0, 0, 0, .38)'
        },
        end: {
            type: 'refundEnd',
            text: '환불 완료',
            color: theme.themeColorSecondary,
        },
    },
    sale : {
        stopSale: {
            type: 'stopSale',
            text: '판매 중지',
            color: 'rgba(0, 0, 0, .38)',
        },
        onSale: {
            type: 'onSale',
            text: '판매 중',
            color: theme.themeColorSecondary,
        },
    },
    onProgress: {
        type: 'onProgress',
        text: '처리 중',
        color: theme.themeColorSecondary,
    },
    account: {
        end: {
            type: 'payEnd',
            text: '입금 완료',
            color: theme.themeColor,
        },
        refund: {
            type: 'refundEndRed',
            text: '환불 완료',
            color: theme.themeColorError,
        },
    },
};

export default statusList;