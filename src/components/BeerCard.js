const BeerCard = ({
  name,
  brewery,
  description,
  type,
  alcohol,
  origin,
  extract,
  volume,
  picture,
  bitterness,
  ingredients,
}) => {
  return (
    <div>
      <div>
        <img alt="picture">{picture}</img>
      </div>
      <div>
        <h1>name{name}</h1>
        <h2>brewery{brewery}</h2>
        <p>description{description}</p>
        <ul>
          <li>type{type}</li>
          <li>alcohol{alcohol}</li>
          <li>origin{origin}</li>
          <li>extract{extract}</li>
          <li>volume{volume}</li>
          <li>bitterness{bitterness}</li>
          <li>ingredients{ingredients}</li>
        </ul>
      </div>
    </div>
  );
};
export default BeerCard;
