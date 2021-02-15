import React from "react";
import "./BeerCard.css";

const BeerCard = ({
  name,
  brewery,
  description,
  type,
  alcohol,
  origin,
  extract,
  volume,
  picture,
  bitterness,
  ingredients,
}) => {
  return (
    <div className="BeerCard">
      <div className="left">
        <button>POWRÓT</button>
        <img alt="picture" scr={picture}></img>
      </div>
      <div className="right">
        <div className="product_name">
          <h1>Crazy Mike{name}</h1>
          <h2>AleBrowar{brewery}</h2>
        </div>
        <div className="product_info">
          <p>
            <strong>Informacje:</strong>
            {description}"Miks ananasa, pomarańczy i mango plus zestaw ultra
            aromatycznych gatunków chmielu. Więcej nie trzeba – łap butelkę, pij
            na chłodno i poczuj się jak w raju!"
          </p>
          <table>
            <tbody>
              <tr>
                <td>Rodzaj:</td>
                <td>{type}IPA</td>
              </tr>
              <tr>
                <td>Alkohol%:</td>
                <td>{alcohol}8</td>
              </tr>
              <tr>
                <td>Pochodzenie:</td>
                <td>{origin}Polska</td>
              </tr>
              <tr>
                <td>Ekstrakt:</td>
                <td>{extract}20</td>
              </tr>
              <tr>
                <td>Pojemność:</td>
                <td>{volume}500</td>
              </tr>
              <tr>
                <td>Gorycz:</td>
                <td>{bitterness}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Składniki:</strong>
            {ingredients}woda; słody: Pale Ale, Pszeniczny, Wiedeński, Carapils,
            Zakwaszający; chmiel: Cascade, Citra, Chinook, Centennial, Columbus;
            dodatki: Candi White Sugar; drożdże: US-05.
          </p>
        </div>
      </div>
    </div>
  );
};
export default BeerCard;
