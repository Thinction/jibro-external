const getDate = (milSec) => {
  const today = new Date(milSec);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const now = `${year}년 ${month}월 ${date}일`;
  return now;
};

export default getDate;
