import isNumeric from "./isNumeric";

const dateConverter = (str) => {
  let date;
  if (isNumeric(str)) {
    date = new Date(parseInt(str));
  } else {
    date = new Date(str);
  }
  return date;
};

export default dateConverter;
