const dateBefore = (started) => {
  const nowDate = Date.now();
  const startedDate = !isNaN(Number(started))
    ? new Date(parseInt(started)).getTime()
    : new Date(started).getTime();
  const dateGap = nowDate - startedDate;
  if (dateGap <= 1000 * 60) {
    return parseInt(dateGap / 1000) + "초 전";
  } else if (dateGap <= 1000 * 60 * 60) {
    return parseInt(dateGap / (1000 * 60)) + "분 전";
  } else if (dateGap <= 1000 * 60 * 60 * 24) {
    return parseInt(dateGap / (1000 * 60 * 60)) + "시간 전";
  } else if (dateGap <= 1000 * 60 * 60 * 24 * 7) {
    return parseInt(dateGap / (1000 * 60 * 60 * 24)) + "일 전";
    //   } else if (dateGap <= 1000 * 60 * 60 * 24 * 30) {
    //     return parseInt(dateGap / (1000 * 60 * 60 * 24 * 7)) + "주 전";
    //   } else if (dateGap <= 1000 * 60 * 60 * 24 * 365) {
    //     return parseInt(dateGap / (1000 * 60 * 60 * 24 * 30)) + "개월 전";
    //   } else if (1000 * 60 * 60 * 24 * 365 < dateGap) {
    //     return parseInt(dateGap / (1000 * 60 * 60 * 24 * 365)) + "년 전";
    //   }
  } else {
    const newDate = new Date(startedDate);
    return (
      ("0" + (newDate.getMonth() + 1).toString()).slice(-2) +
      ("0" + newDate.getDate().toString()).slice(-2)
    );
  }
};

export default dateBefore;
