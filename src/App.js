import "./App.css";
import firebase from "firebase/app";
import BeerTile from "./components/BeerTile";
import TileContainer from "./components/TileContainer";
import Header from "./components/Header";
import BeerCard from "./components/BeerCard";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const db = firebase.firestore();
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    db.collection("Beers")
      .get()
      .then((snapshot) => {
        const beers = snapshot.docs.map((beer) => {
          console.log(beer.id);
          return { id: beer.id, ...beer.data() };
        });
        setBeers(beers);
      });
  }, [db]);

  return (
    <div className="App">
      <Header />
      <TileContainer beers={beers} />

      <Switch>
        <Route path="/beers/:id">
          <>
            <BeerCard beers={beers} />
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
