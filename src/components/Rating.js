import React from "react";
// import { useState } from "react";

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
      <p className="Rating_number">
        {Math.round(isNaN(rate) ? 0 : Math.round(rate))}/5
      </p>
    </div>
  );
};

export default Rating;
