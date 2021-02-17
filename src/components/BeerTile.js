import { Link } from "react router dom";
import "./BeerTile.css";

const BeerTile = ({ name, manufacturer, picture, type }) => {
  return (
    <div className="BeerTile">
      <div className="manufacture_info">
        <h1>Rainbow APA{name}</h1>
        <h2>Wilk{manufacturer}</h2>
      </div>
      <div className="down">
        <img
          alt="beerfoto"
          src="https://firebasestorage.googleapis.com/v0/b/piwko-10443.appspot.com/o/tropical.png?alt=media&token=41d192a4-3636-44a1-8aae-510f6434264d"
          height="250px"
        />
        <h2>Rodzaj{type}</h2>
      </div>
    </div>
  );
};

export default BeerTile;
