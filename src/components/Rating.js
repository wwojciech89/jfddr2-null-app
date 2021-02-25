import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Rating = () => {
  //average
  //average to setrate
  const RateArray = [4, 3, 3, 5];

  function average(nums) {
    return (nums.reduce((a, b) => a + b) / nums.length).toFixed(0);
  }
  let Rate = average(RateArray);
  // // setRating(Rate);
  console.log(Rate);
  return (
    <div className="Rating_stars">
      {/* {[...Array(5)].map((star, i) => {
        return (
          <label>
            <FaStar size={20} color={Rate > 0 ? "grey" : "red"} />
          </label>
        );
      })} */}
      <p className="Rating_number">{Rate}/5</p>
    </div>
  );
};

export default Rating;
