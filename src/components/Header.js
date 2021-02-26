import SearchBar from "./SearchBar";
import firebase from "../Firebase/firebase.js";
import { Link } from "react-router-dom";

const Avatar = ({ isLoggedIn }) => {
  const logout = () => {
    firebase.auth().signOut();
  };

  if (isLoggedIn) {
    return (
      <>
        <p>🙋‍♂️</p>
        <button onClick={logout}>wyloguj mnie</button>
      </>
    );
  }
  return (
    <Link to={`/login`}>
      <button style={{ margin: "20px" }}> ZALOGUJ MNIE </button>
    </Link>
  );
};

const Header = ({ setSearch, isLoggedIn }) => {
  return (
    <div className="Header">
      <Link to={`/`}>
        <h1 className="logo">PIWKO</h1>
      </Link>
      <SearchBar setSearch={setSearch} />
      <Avatar isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default Header;
