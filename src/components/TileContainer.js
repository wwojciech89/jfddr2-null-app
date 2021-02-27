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
            .filter(({ name, brewery }) => {
              return (
                name
                  .trim()
                  .toLowerCase()
                  .includes(search.trim().toLowerCase()) ||
                brewery
                  .trim()
                  .toLowerCase()
                  .includes(search.trim().toLowerCase())
              );
            })
            .map((beer, index) => {
              return <BeerTile key={index} {...beer} />;
            })}
      </div>
    </main>
  );
};

export default TileContainer;
