import React from "react";
import { FaStar } from "react-icons/fa";
import "./RatingStars.css";
import { useState } from "react";

const RatingStars = () => {
  //average
  //average to setrate
  const [state, setState] = useState("");
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
              onClick={(e) => setState(starValue)}
              required
            />
            <FaStar size={20} color={starValue <= state ? "red" : "grey"} />
          </label>
        );
      })}
      <p className="Rating_number">{state}/5</p>
    </div>
  );
};

export default RatingStars;
