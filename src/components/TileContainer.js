import BeerTile from "../components/BeerTile";
import "firebase/firestore";

const TileContainer = ({ beers }) => {
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
