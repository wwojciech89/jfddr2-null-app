import { Link } from "react-router-dom";
import "./BeerTile.css";
import HomeButton from "./HomeButton";

const BeerTile = ({ name, type, picture, origin, brewery, id }) => {
  return (
    <Link to={`/beers/${id}`}>
      <div className="BeerTile">
        <h3 className="BeerTile__name">{name}</h3>
        <h4 className="BeerTile__type">{type}</h4>
        <img
          className="BeerTile__img"
          src={picture}
          alt="Girl in a jacket"
          height="160px"
        />
        <h4 className="BeerTile__brewery">{brewery}</h4>
      </div>
    </Link>
  );
};

export default BeerTile;
