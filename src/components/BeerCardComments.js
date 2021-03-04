import "./BeerCardComments.css";

const BeerCardComments = ({ beers, id }) => {
  let filteredBeers;
  let filterdCommentary = [];

  function renderComments() {
    filteredBeers = beers.filter((el) => {
      return el.id === id;
    });
    filteredBeers[0].commentary.map((el) => {
      return filterdCommentary.push(el);
    });
    const mapped = filterdCommentary.map((el, key) => {
      return (
        <li key={key}>
          <div className="commentary__container">
            <p className="commentary__login">{el.login}</p>
            <p className="commentary__text">{el.text}</p>
            <p className="commentary__rating">
              Moja ocena piwa: {filteredBeers[0].rating[key]}/5
            </p>
          </div>
        </li>
      );
    });

    return mapped;
  }

  return (
    <div className="Comments-box">
      <ul>
        <h3>Komentarze</h3>
        {renderComments()}
      </ul>
    </div>
  );
};

export default BeerCardComments;
