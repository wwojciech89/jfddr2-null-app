import BeerTile from "../components/BeerTile";
import "firebase/firestore";
// import { SearchBar } from "./SearchBar";
import { useState } from "react";

const TileContainer = ({ beers, search }) => {
  return (
    <main>
      <p className="TileContainer__p">Odkryj dobre piwo</p>
      <div className="TileContainer__div">
        {beers &&
          beers
            .filter((beer) => {
              if (search == "") {
                return beer;
              } else if (
                beer.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return beer;
              }
            })
            .map((beer, index) => {
              return (
                <>
                  <BeerTile key={index} {...beer} />
                </>
              );
            })}
      </div>
    </main>
  );
};

export default TileContainer;
