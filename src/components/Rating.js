import React from "react";
// import { useState } from "react";
import { FaStar } from "react-icons/fa";
const Rating = ({ beers, id }) => {
  let filteredBeers;

  filteredBeers = beers.filter((el) => {
    return el.id === id;
  });
  const RateArray = filteredBeers[0].rating;

  function average(nums) {
    return nums.reduce((a, b) => a + b, 0) / nums.length;
  }
  let rate = average(RateArray);

  return (
    <div className="Rating_stars">
      <div>
        {[1, 2, 3, 4, 5].map((score) => (
          <FaStar
            key={score}
            name="star"
            color={Math.round(rate) >= score ? "red" : "grey"}
            type="solid"
            size={20}
          />
        ))}
      </div>
      <p className="Rating_number">
        {Math.round(isNaN(rate) ? 0 : Math.round(rate))}/5
      </p>
    </div>
  );
};

export default Rating;
