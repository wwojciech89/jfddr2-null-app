import { Link } from "react-router-dom";
import "./BeerTile.css";
import HomeButton from "./HomeButton";
import { FaStar } from "react-icons/fa";

const BeerTile = ({ name, type, picture, origin, brewery, id, beers }) => {
  let filteredBeers;

  filteredBeers = beers.filter((el) => {
    return el.id === id;
  });
  const RateArray = filteredBeers[0].rating;

  function average(nums) {
    return nums.reduce((a, b) => a + b, 0) / nums.length;
  }
  let rate = average(RateArray);
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
        <div className="BeerTile__rating">
          <div>
            {[1, 2, 3, 4, 5].map((score) => (
              <FaStar
                key={score}
                name="star"
                color={Math.round(rate) >= score ? "red" : "grey"}
                type="solid"
                size={20}
              />
            ))}
          </div>
          <p className="BeerTile__rating--number">
            {Math.round(isNaN(rate) ? 0 : Math.round(rate))}/5
          </p>
        </div>
        <h4 className="BeerTile__brewery">{brewery}</h4>
      </div>
    </Link>
  );
};

export default BeerTile;
