import "./header.css";
import SearchBar from "./SearchBar";
import firebase from "../Firebase/firebase.js";
import { Link, Route, useParams } from "react-router-dom";

const Avatar = ({ isLoggedIn }) => {
  const logout = () => {
    firebase.auth().signOut();
  };

  if (isLoggedIn) {
    return (
      <>
        <p>🙋‍♂️</p>
        <button className="btn" onClick={logout}>
          wyloguj mnie
        </button>
      </>
    );
  }
  return (
    <Link to={`/login`}>
      <button className="header__button btn">
        ZALOGUJ SIĘ ABY DODAWAĆ KOMENTARZE
      </button>
    </Link>
  );
};

const Header = ({ setSearch, isLoggedIn }) => {
  return (
    <div className="header">
      <Link to={`/`}>
        <h1 className="header__logo">PIWKO</h1>
      </Link>

      <Route exact path="/">
        <SearchBar setSearch={setSearch} />
      </Route>

      <Avatar isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Header;
