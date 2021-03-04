import "./BeerCardComments.css";

const BeerCardComments = ({ beer }) => {
  function renderComments() {
    return beer.commentary.map((el, key) => {
      return (
        <li key={key}>
          <div className="commentary__container">
            <p className="commentary__login">{el.email?.split("@")[0]}</p>
            <p className="commentary__text">{el.text}</p>
            <p className="commentary__rating">
              Moja ocena piwa: {beer.rating[key]}/5
            </p>
          </div>
        </li>
      );
    });
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
