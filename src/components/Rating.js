import React from "react";
import { FaStar } from "react-icons/fa";
// import { useState } from "react";

const Rating = () => {
  //example array
  const RateArray = [4, 3, 3, 5];

  function average(nums) {
    return nums.reduce((a, b) => a + b, 0) / nums.length;
  }
  let Rate = average(RateArray);
  console.log(Rate);
  return (
    <div className="Rating_stars">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} highlighted={index <= average} />
      ))}
      <p className="Rating_number">{Math.round(Rate)}/5</p>
    </div>
  );
};

export default Rating;
