import React from "react";
import { MdStar } from "react-icons/md";

const StarRating = (props) => {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;
  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return "#FFEE21";
    } else if (!hoverRating && rating >= index) {
      return "#FFEE21";
    }
    return "rgba(0, 0, 0, .38)";
  }, [rating, hoverRating, index]);
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <MdStar color={fill} size={40} />
    </div>
  );
};

export default StarRating;
