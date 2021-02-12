import { useParams } from "react-router-dom";

const BeerCard = ({ beers }) => {
  const { id } = useParams();
  const foundBeer = beers.find((beer) => beer.type === id);
  const { name, type, foto } = foundBeer;

  return (
    <div>
      <div>
        <h1>{type}</h1>
        <h2>producent</h2>
        <p>{name}</p>
        <ul>
          <li>rodzaj piwa</li>
          <li>alkohol</li>
          <li>procent</li>
          <li>ekstrakt</li>
        </ul>
      </div>
      <div>
        <img alt={type} src={foto} />
      </div>
    </div>
  );
};

export default BeerCard;
