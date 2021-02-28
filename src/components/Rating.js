import React from "react";
// import { useState } from "react";

const Rating = ({ beers, id }) => {
  let filteredBeers;
  let filterdRating = [];

  filteredBeers = beers.filter((el) => {
    return el.id === id;
  });
  console.log(filteredBeers[0].rating);
  const RateArray = filteredBeers[0].rating;

  function average(nums) {
    return nums.reduce((a, b) => a + b, 0) / nums.length;
  }
  let Rate = average(RateArray);

  return (
    <div className="Rating_stars">
      {/* {Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} highlighted={index <= average} />
      ))} */}
      <p className="Rating_number">{Math.round(Rate)}/5</p>
    </div>
  );
};

export default Rating;
