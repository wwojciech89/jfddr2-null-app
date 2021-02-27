import "./BeerCardComments.css";

const BeerCardComments = ({ beers, id }) => {
  let filteredBeers;
  let filterdCommentary = [];

  function elo() {
    filteredBeers = beers.filter((el) => {
      return el.id === id;
    });
    filteredBeers[0].commentary.map((el) => {
      console.log(el);
      filterdCommentary.push(el);
    });
    filterdCommentary.map((el) => {
      return (
        <div className="commentary__container">
          <p className="commentary__login">{el.login}</p>
          <p className="commentary__text">{el.text}</p>
        </div>
      );
    });
  }

  return (
    <div className="Comments-box">
      <ul>
        <h3>Komentarze</h3>
        {elo()}
      </ul>
    </div>
  );
};

export default BeerCardComments;
