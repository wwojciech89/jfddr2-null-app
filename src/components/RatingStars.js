import React from "react";
import { FaStar } from "react-icons/fa";
const RatingStars = () => {
  return (
    <div>
      {[...Array(5)].map((star) => {
        return <FaStar />;
      })}
    </div>
  );
};

export default RatingStars;
