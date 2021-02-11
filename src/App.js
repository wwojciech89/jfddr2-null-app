import "./App.css";

const beerDB = [
  { name: "Mocne", type: "Ipa", foto: "http://placekitten.com/100/120" },
  { name: "Słabe", type: "Apa", foto: "http://placekitten.com/101/120" },
  { name: "Gorzkie", type: "Pills", foto: "http://placekitten.com/99/120" },
  { name: "Słodkie", type: "Porter", foto: "http://placekitten.com/100/119" },
  { name: "Dobre", type: "Full", foto: "http://placekitten.com/100/121" },
  { name: "Złe", type: "Ale", foto: "http://placekitten.com/99/121" },
];

const Header = () => {
  return (
    <div className="Header">
      <h1>PIWKO</h1>
    </div>
  );
};

const TileContainer = ({ children }) => {
  return (
    <main>
      <p className="TileContainer__p">Odkryj dobre piwo</p>
      <div className="TileContainer__div">{children}</div>
    </main>
  );
};

const BeerTile = ({ name, manufacturer, foto, type }) => {
  return (
    <div className="BeerTile">
      <h3>{name}</h3>
      <h4>{manufacturer}</h4>
      <img alt="beer foto" src={foto} />
      <h4>{type}</h4>
    </div>
  );
};

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
    </div>
  );
}

export default App;
