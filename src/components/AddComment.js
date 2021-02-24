import "./AddComments.css";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const AddComments = () => {
  const [state, setState] = useState("");
  const [rate, setRate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rate, state);
  };

  return (
    <div className="Input_box">
      <form className="Input_form" onSubmit={handleSubmit}>
        <div>
          <h3>Oceń i skomentuj</h3>
          {[...Array(5)].map((star, i) => {
            const starValue = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={starValue}
                  onClick={(e) => setRate(starValue)}
                  required
                />
                <FaStar size={20} color={starValue <= rate ? "red" : "grey"} />
              </label>
            );
          })}
          <p className="Rating_number">{rate}/5</p>
        </div>
        <input
          type="text"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></input>
        <input
          id="name"
          className="Input_submit"
          type="submit"
          value="Dodaj"
        ></input>
      </form>
    </div>
  );
};

export default AddComments;
