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

export default BeerTile;
