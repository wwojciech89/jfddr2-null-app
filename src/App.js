import "./App.css";
import firebase from "./Firebase/firebase.js";
import TileContainer from "./components/TileContainer";
import Header from "./components/Header";
import BeerCard from "./components/BeerCard";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const db = firebase.firestore();
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const [isUserLogged, setIsUserLogged] = useState(false);

  firebase.auth().onAuthStateChanged((token) => {
    if (token !== null) {
      setIsUserLogged(true);
    } else {
      setIsUserLogged(false);
    }
  });

  useEffect(() => {
    db.collection("Beers")
      .get()
      .then((snapshot) => {
        const beers = snapshot.docs.map((beer) => {
          // console.log(beer.id);
          return { id: beer.id, ...beer.data() };
        });
        setBeers(beers);
      });
  }, [db]);

  return (
    <div className="App">
      <Header setSearch={setSearch} isLoggedIn={isUserLogged} />

      <Switch>
        <Route exact path="/">
          <TileContainer beers={beers} search={search} />
        </Route>
        <Route path="/beers/:id">
          <>
            <BeerCard beers={beers} />
          </>
        </Route>
        <Route path="/login">
          <>
            <Login />
          </>
        </Route>
        <Route path="/signup">
          <>
            <SignUp />
          </>
        </Route>
        <Route path="/admin">
          <>
            <AdminPanel />
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
