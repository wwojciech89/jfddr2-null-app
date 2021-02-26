import "./BeerCardComments.css";

const BeerCardComments = ({ beers, id }) => {
  let filterBeers;

  function elo() {
    filterBeers = beers.filter((el) => {
      return el.id === id;
    });
    filterBeers[0].commentary.map((el) => {
      console.log(el);
    });
  }
  elo();

  return (
    <div className="Comments-box">
      <ul>
        <h3>Komentarze</h3>
      </ul>
    </div>
  );
};

export default BeerCardComments;
