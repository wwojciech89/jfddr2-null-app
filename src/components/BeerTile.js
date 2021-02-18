import { Link } from "react-router-dom";
import "./BeerTile.css";

const BeerTile = ({ name, type, picture, brewery, id }) => {
  return (
    <Link to={`/beers/${id}`}>
      <div className="BeerTile">
        <div className="manufacture_info">
          <h1>{name}</h1>
          <h2>{brewery}</h2>
        </div>
        <div className="down">
          <img src={picture} alt="Girl in a jacket" height="250px" />
          <h2>{type}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BeerTile;
