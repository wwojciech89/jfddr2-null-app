import { Link } from "react-router-dom";

const BeerTile = ({ name, type, picture, origin, brewery, id }) => {
  return (
    <Link to={`/beers/${id}`}>
      <div className="BeerTile">
        <h3>{name}</h3>
        <h4>{type}</h4>
        <h4>{picture}</h4>
      </div>
    </Link>
  );
};

export default BeerTile;
