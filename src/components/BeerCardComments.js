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
          <div className="comments__container">
            <p className="comments__login">{el.login}</p>
            <p className="comments__text">{el.text}</p>
          </div>
        </li>
      );
    });

    return mapped;
  }

  return (
    <div className="Comments__box">
      <h3>Komentarze</h3>
      <ul>{renderComments()}</ul>
    </div>
  );
};

export default BeerCardComments;
