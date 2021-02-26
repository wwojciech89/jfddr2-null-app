import "./BeerCardComments.css";

const BeerCardComments = ({ beers, id }) => {
  return (
    <div className="Comments-box">
      <ul>
        <h3>Komentarze</h3>

        {beers.map((beer) => {
          console.log(id);
          console.log(beer.id);

          if (beer.id === id) {
            let beerLogin;
            let beerText;

            beer.commentary.forEach((element) => {
              beerLogin = element.login;
              beerText = element.text;
            });
            return (
              <div className="commentary__container">
                <p className="commentary__login">{beerLogin} </p>
                <p className="commentary__text">{beerText}</p>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default BeerCardComments;
