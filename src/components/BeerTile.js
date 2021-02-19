import { Link } from "react-router-dom";
import "./BeerTile.css";

const BeerTile = ({ name, type, picture, origin, brewery, id }) => {
  return (
    <Link to={`/beers/${id}`}>
      <div className="BeerTile">
        <h3>{name}</h3>
        <h4>{type}</h4>
        <img src={picture} alt="Girl in a jacket" height="160px" />
        <h4>{brewery}</h4>
      </div>
    </Link>
  );
};

export default BeerTile;
