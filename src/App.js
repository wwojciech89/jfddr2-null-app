import "./App.css";
import BeerTile from "./components/BeerTile";
import TileContainer from "./components/TileContainer";
import Header from "./components/Header";
import BeerCard from "./components/BeerCard";
import { Switch, Route, Link, useLocation } from "react-router-dom";

const beerDB = [
  { name: "Mocne", type: "Ipa", foto: "http://placekitten.com/100/120" },
  { name: "Słabe", type: "Apa", foto: "http://placekitten.com/101/120" },
  { name: "Gorzkie", type: "Pills", foto: "http://placekitten.com/99/120" },
  { name: "Słodkie", type: "Porter", foto: "http://placekitten.com/100/119" },
  { name: "Dobre", type: "Full", foto: "http://placekitten.com/100/121" },
  { name: "Złe", type: "Ale", foto: "http://placekitten.com/99/121" },
];

function App() {
  let location = useLocation();

  return (
    <div className="App">
      <Header />
      <TileContainer>
        <Switch location={location}>
          <Route
            exact
            path="/"
            children={beerDB.map((beer, i) => {
              return (
                <Link key={i} to={beer.type}>
                  <BeerTile
                    name={beer.name}
                    type={beer.type}
                    foto={beer.foto}
                  />
                </Link>
              );
            })}
          />
          <Route path="/:id" children={<BeerCard beers={beerDB} />} />
        </Switch>
      </TileContainer>
    </div>
  );
}

export default App;
