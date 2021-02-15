import React from "react";
import "./BeerCard.css";
import "firebase/firestore";
import firebase from "../Firebase/firebase";

import { useParams } from "react-router-dom";

function renderMappedBeer() {
  firebase
    .firestore()
    .collection("Beers")
    .onSnapshot((Beers) => {
      Beers.docs.forEach((beer) => {});
    });
}
renderMappedBeer();

// function createArticleContent(beer) {
//   return console.log(beer.data());
// }

function BeerCard(beer) {
  // const { beerName } = useParams();
  // const foundBeer = beers.find((beer) => beer.name === beerName);
  // const { name, type, picture } = foundBeer;

  return (
    <div className="BeerCard">
      <div className="left">
        {/* <button>POWRÓT</button> */}
        <img alt="beer picture" scr={beer.picture} />
      </div>
      <div className="right">
        <div className="product_name">
          <h1>{beer.name}</h1>
          <h2>{beer.brewery}</h2>
        </div>
        <div className="product_info">
          <p>
            <strong>Informacje:</strong>
            {beer.description}
          </p>
          <table>
            <tbody>
              <tr>
                <td>Rodzaj:</td>
                <td>{beer.type}</td>
              </tr>
              <tr>
                <td>Alkohol%:</td>
                <td>{beer.alcohol}</td>
              </tr>
              <tr>
                <td>Pochodzenie:</td>
                <td>
                  {beer.origin}
                  Polska
                </td>
              </tr>
              <tr>
                <td>Ekstrakt:</td>
                <td>
                  {beer.extract}
                  20
                </td>
              </tr>
              <tr>
                <td>Pojemność:</td>
                <td>
                  {beer.volume}
                  500
                </td>
              </tr>
              <tr>
                <td>Gorycz:</td>
                {beer.bitterness}
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Składniki:</strong>
            {beer.ingedients}
          </p>
        </div>
      </div>
    </div>
  );
}
export default BeerCard;
