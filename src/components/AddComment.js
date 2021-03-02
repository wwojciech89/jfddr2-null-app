import "./AddComments.css";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import firebase from "../Firebase/firebase.js";
import { Link } from "react-router-dom";

const AddComments = ({ id, token, fetchBeers, isLoggedIn }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(null);

  const handleSubmit = (e) => {
    firebase
      .firestore()
      .collection("Beers")
      .doc(id)
      .get()
      .then((elements) => {
        const previousRating = elements.data().rating;
        previousRating.push(rate);

        firebase
          .firestore()
          .collection("Beers")
          .doc(id)
          .update({
            commentary: firebase.firestore.FieldValue.arrayUnion({
              login: token.email.split("@")[0],
              text: comment,
            }),
            rating: previousRating,
          })

          .then(fetchBeers);
      });
    e.preventDefault();
    setComment("");
    setRate(null);
  };
  //Gdy robię input radio display:none, input przestaje jakby działać.
  //Nie moge ustawic walidacji na dwa inputy. Komentarz wystawia bez oceny ale oceny bez komentarza nie.
  //Jeśli jest required w input="radio" wywala błąd "An invalid form control with name='rating' is not focusable."
  //Jak to ogarnąć żeby required był na dwa inputy.
  //Po stronie Firebasa?
  //AddComments.css
  if (isLoggedIn) {
    return (
      <div className="Input_box">
        <form className="Input_form" onSubmit={handleSubmit}>
          <div>
            <h3>Oceń i skomentuj</h3>
            {[...Array(5)].map((star, i) => {
              const starValue = i + 1;
              return (
                <label key={i}>
                  <input
                    type="radio"
                    name="rating"
                    value={starValue}
                    onClick={(e) => setRate(starValue)}
                    required
                  />
                  <FaStar
                    size={20}
                    color={starValue <= rate ? "red" : "grey"}
                  />
                </label>
              );
            })}
            <p className="Rating_number">{rate}/5</p>
          </div>
          <input
            type="text"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
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
  }
  return (
    <Link to={`/login`}>
      <p className="blueText">ZALOGUJ SIĘ ABY DODAWAĆ KOMENTARZE</p>
    </Link>
  );
};

export default AddComments;
