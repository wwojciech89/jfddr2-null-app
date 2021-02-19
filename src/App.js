import "./App.css";
import firebase from "firebase/app";
import TileContainer from "./components/TileContainer";
import Header from "./components/Header";
import BeerCard from "./components/BeerCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const db = firebase.firestore();
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
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
      <Header setSearch={setSearch} />

      <Switch>
        <Route exact path="/">
          <TileContainer beers={beers} search={search} />
        </Route>
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
