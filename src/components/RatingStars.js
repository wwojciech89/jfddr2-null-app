import React from "react";
import { FaStar } from "react-icons/fa";
import "./RatingStars.css";
import { useState } from "react";

const RatingStars = () => {
  const [rate, setRate] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const starValue = i + 1;
        return (
          <label className="Rating_stars">
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={(e) => setRate(starValue)}
            />
            <FaStar color={starValue <= rate ? "grey" : "red"} />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStars;
