import { Link } from "react-router-dom";
import "./BeerTile.css";

const BeerTile = ({ name, type, picture, id }) => {
  return (
    <Link to={`/beers/${id}`}>
      <div className="BeerTile">
        <h3>{name}</h3>
        <h4>{type}</h4>
        <img src={picture} alt="Girl in a jacket" height="250px" />
      </div>
    </Link>
  );
};

export default BeerTile;
