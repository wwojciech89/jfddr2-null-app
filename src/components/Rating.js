import React from "react";
import { FaStar } from "react-icons/fa";
import "./RatingStars.css";
import { useState } from "react";

const Rating = () => {
  //average
  //average to setrate
  const [rate, setRate] = useState(null);

  const getAverage = (grades) => {
    const avarge = grades.reduce((total, amount) => total + amount);
    return avarge / grades.length;
  };
  return (
    <div className="Rating_stars">
      {[...Array(5)].map((star, i) => {
        const starValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={starValue}
              onClick={(e) => setRate(starValue)}
            />
            <FaStar size={20} color={starValue <= rate ? "red" : "grey"} />
          </label>
        );
      })}
      <p className="Rating_number">{rate}/5</p>
    </div>
  );
};

export default Rating;
