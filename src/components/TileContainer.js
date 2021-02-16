import { useEffect, useState } from "react";
import BeerTile from "../components/BeerTile";
import "firebase/firestore";
import firebase from "../Firebase/firebase";
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

const TileContainer = () => {
  const [beers, setBeers] = useState(null);
  useEffect(() => {
    db.collection("Beers")
      .get()
      .then((snapshot) => {
        const beers = snapshot.docs.map((beer) => {
          console.log(beer.id);
          return beer.data();
        });
        setBeers(beers);
      });
  }, []);

  return (
    <main>
      <p className="TileContainer__p">Odkryj dobre piwo</p>
      <div className="TileContainer__div">
        {beers &&
          beers.map((beer, index) => {
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
