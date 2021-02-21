import "./adminPanel.css";
import { useEffect, useState } from "react";
import firebase from "firebase/app";

const AdminPanel = () => {
  const [name, setName] = useState("");
  const [alcohol, setAlcohol] = useState("");

  const addNewBear = () => {
    firebase.firestore().collection("Beers").add({
      name: name,
      alcohol: alcohol,
    });
  };

  // bitterness: "mid",
  // brewery: "Lech",
  // description: "lorem",
  // extract,
  // ingredients,
  // origin,
  // picture,
  // price,
  // type,
  // volume,

  return (
    <div className="wrapper">
      <form
        onSubmit={(e) => {
          addNewBear();
          e.preventDefault();
        }}
      >
        <label>
          name:
          <input
            className="adder__text"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </label>

        <label>
          alcohol:
          <input
            className="adder__text"
            type="text"
            value={alcohol}
            onChange={(e) => {
              setAlcohol(e.target.value);
            }}
          ></input>
        </label>

        {/* <label>bitterness:</label>
        <input className="adder__text"></input>
        <label>brewery:</label>
        <input className="adder__text"></input>
        <label>description:</label>
        <input className="adder__text"></input>
        <label>wpisz nowe piwo</label>
        <input className="adder__text"></input>
        <label>wpisz nowe piwo</label>
        <input className="adder__text"></input>
        <label>wpisz nowe piwo</label>
        <input className="adder__text"></input>
        <label>wpisz nowe piwo</label>
        <input className="adder__text"></input>
        <label>wpisz nowe piwo</label>
        <input className="adder__text"></input>
        <label>wpisz nowe piwo</label>
        <input className="adder__text"></input>
        <label>wpisz nowe piwo</label> */}
        {/* <input className="adder__text"></input> */}
        <input type="submit" value="Wyślij" />
        <button
          onClick={(e) => {
            addNewBear();
            e.preventDefault();
          }}
        >
          kliknij
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
