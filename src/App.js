import "./App.css";
import BeerTile from "./components/BeerTile";
import TileContainer from "./components/TileContainer";
import Header from "./components/Header";
import BeerCard from "./components/BeerCard";

const beerDB = [
  { name: "Mocne", type: "Ipa", foto: "http://placekitten.com/100/120" },
  { name: "Słabe", type: "Apa", foto: "http://placekitten.com/101/120" },
  { name: "Gorzkie", type: "Pills", foto: "http://placekitten.com/99/120" },
  { name: "Słodkie", type: "Porter", foto: "http://placekitten.com/100/119" },
  { name: "Dobre", type: "Full", foto: "http://placekitten.com/100/121" },
  { name: "Złe", type: "Ale", foto: "http://placekitten.com/99/121" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <TileContainer>
        {beerDB.map((bear) => {
          return (
            <BeerTile name={bear.name} type={bear.type} foto={bear.foto} />
          );
        })}
      </TileContainer>
      <BeerCard />
    </div>
  );
}

export default App;
