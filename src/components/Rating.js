import React from "react";
import { FaStar } from "react-icons/fa";
import "./RatingStars.css";
import { useState } from "react";

const Rating = ({ beers }) => {
  //average
  //average to setrate
  const [rating, setRating] = useState(null);

  const RateArray = [1, 2, 4, 5];
  function average(nums) {
    return (nums.reduce((a, b) => a + b) / nums.length).toFixed(0);
  }

  let Rate = average(RateArray);
  // setRating(Rate);
  console.log(Rate);
  return (
    <div className="Rating_stars">
      {[...Array(5)].map((star, i) => {
        const rateValue = 3;
        return (
          <label>
            <FaStar size={20} />
          </label>
        );
      })}
      <p className="Rating_number">{Rate}/5</p>
    </div>
  );
};

export default Rating;
