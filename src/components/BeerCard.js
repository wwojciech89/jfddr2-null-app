import React from "react";
import "./BeerCard.css";
import firebase from "firebase/app";

import { useParams } from "react-router-dom";

function forEachArticle() {
  firebase
    .firestore()
    .collection("Beers")
    .orderBy("time", "desc")
    .onSnapshot((articles) => {
      articleDIV.innerHTML = "";
      console.log(articles);
      articles.forEach((article) => {
        createArticleContent(article);
      });
    });
}

const BeerCard = ({ beers }) => {
  const { beerName } = useParams();
  const foundBeer = beers.find((beer) => beer.name === beerName);
  const { name, type, foto } = foundBeer;

  return (
    <div className="BeerCard">
      <div className="left">
        {/* <button>POWRÓT</button> */}
        <img alt="beer picture" scr={foto} />
      </div>
      <div className="right">
        <div className="product_name">
          <h1>{name}</h1>
          <h2>
            AleBrowar
            {/* {brewery} */}
          </h2>
        </div>
        <div className="product_info">
          <p>
            <strong>Informacje:</strong>
            {/* {description} */}
            "Miks ananasa, pomarańczy i mango plus zestaw ultra aromatycznych
            gatunków chmielu. Więcej nie trzeba – łap butelkę, pij na chłodno i
            poczuj się jak w raju!"
          </p>
          <table>
            <tbody>
              <tr>
                <td>Rodzaj:</td>
                <td>{type}</td>
              </tr>
              <tr>
                <td>Alkohol%:</td>
                <td>{/* {alcohol} */}8</td>
              </tr>
              <tr>
                <td>Pochodzenie:</td>
                <td>
                  {/* {origin} */}
                  Polska
                </td>
              </tr>
              <tr>
                <td>Ekstrakt:</td>
                <td>
                  {/* {extract} */}
                  20
                </td>
              </tr>
              <tr>
                <td>Pojemność:</td>
                <td>
                  {/* {volume} */}
                  500
                </td>
              </tr>
              <tr>
                <td>Gorycz:</td>
                {/* <td>{bitterness}</td> */}
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Składniki:</strong>
            {/* {ingredients} */}
            woda; słody: Pale Ale, Pszeniczny, Wiedeński, Carapils,
            Zakwaszający; chmiel: Cascade, Citra, Chinook, Centennial, Columbus;
            dodatki: Candi White Sugar; drożdże: US-05.
          </p>
        </div>
      </div>
    </div>
  );
};
export default BeerCard;
