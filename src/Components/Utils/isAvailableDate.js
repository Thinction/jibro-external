const dayArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat", "sun"];
export const isAvailableDate = (availableDate, date) => {
  const day = dayArray[date.getDay()];
  return availableDate[day];
};
