import React from "react";
import { FaStar } from "react-icons/fa";
const RatingStars = () => {
  return (
    <div>
      <label>
        <input type="radio" name="rating" value="1" />
        <FaStar />
        <input type="radio" name="rating" value="2" />
        <FaStar />
        <input type="radio" name="rating" value="3" />
        <FaStar />
        <input type="radio" name="rating" value="4" />
        <FaStar />
        <input type="radio" name="rating" value="5" />
        <FaStar />
      </label>
    </div>
  );
};

export default RatingStars;
