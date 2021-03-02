import "./App.css";

import firebase from "./Firebase/firebase.js";
import TileContainer from "./components/TileContainer";
import Header from "./components/Header";
import BeerCard from "./components/BeerCard";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState, createContext } from "react";

export const ThemeContext = createContext();

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [token, setToken] = useState(null);

  function fetchBeers() {
    firebase
      .firestore()
      .collection("Beers")
      .get()
      .then((snapshot) => {
        const beers = snapshot.docs.map((beer) => {
          return { id: beer.id, ...beer.data() };
        });
        setBeers(beers);
      });
  }

  firebase.auth().onAuthStateChanged((token) => {
    if (token !== null) {
      setIsUserLogged(true);
      setToken(token);
    } else {
      setIsUserLogged(false);
    }
  });

  useEffect(fetchBeers, []);

  return (
    <div className="App">
      <Header setSearch={setSearch} isLoggedIn={isUserLogged} />

      <Switch>
        <Route exact path="/">
          <TileContainer beers={beers} search={search} />
        </Route>
        <Route path="/beers/:id">
          <>
            <BeerCard
              beers={beers}
              token={token}
              fetchBeers={fetchBeers}
              isLoggedIn={isUserLogged}
            />
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
