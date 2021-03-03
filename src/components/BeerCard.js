import React from "react";
import "./BeerCard.css";
import "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import BeerCardComments from "./BeerCardComments";
import "./BeerCardComments.css";
import AddComments from "./AddComment";
import Rating from "./Rating";

import HomeButton from "./HomeButton";

function BeerCard({ beers, token, fetchBeers, isLoggedIn }) {
  let { id } = useParams();

  let beer = beers.find((element) => element.id === id);

  if (beer === undefined) {
    return null;
  }

  return (
    <>
      <div className="Beercard__container">
        <HomeButton />
        <div className="Beercard">
          <div className="Beercard__upper">
            <div className="Beercard__left">
              <div className="Beercard__left--rating">
                <Rating id={id} beers={beers} />
              </div>
              <img src={beer.picture} alt="Girl in a jacket" height="400px" />
            </div>
            <div className="Beercard__right">
              <div className="Beercard__right--name">
                <h1>{beer.name}</h1>
                <h2>{beer.brewery}</h2>
              </div>
              <div className="Beercard__right--info">
                <p className="Beercard__right--description">
                  <strong>Informacje:</strong>
                  {beer.description}
                </p>
                <table className="Beercard__right--table">
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
                      <td>{beer.origin}</td>
                    </tr>
                    <tr>
                      <td>Ekstrakt:</td>
                      <td>{beer.extract}</td>
                    </tr>
                    <tr>
                      <td>Pojemność:</td>
                      <td>{beer.volume}</td>
                    </tr>
                    <tr>
                      <td>Gorycz:</td>
                      <td>{beer.bitterness}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="Beercard__right--description">
                  <strong>Składniki:</strong>
                  {beer.ingredients}
                </p>
              </div>
            </div>
          </div>
          <div className="Beercard__comments">
            <AddComments
              id={id}
              token={token}
              fetchBeers={fetchBeers}
              isLoggedIn={isLoggedIn}
            />
            <BeerCardComments id={id} beers={beers} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BeerCard;
