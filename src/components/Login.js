import firebase from "../Firebase/firebase.js";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import HomeButton from "./HomeButton";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  let history = useHistory();

  const signIn = (event) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((token) => {
        history.go(-1);
      });
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <div style={{ margin: "40px" }}>
      <HomeButton />

      <form
        className="form"
        onSubmit={(e) => {
          signIn();
          e.preventDefault();
        }}
      >
        <label>
          email:
          <input
            className="formInput"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            className="formInput"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
        </label>

        <input
          className="login__submit formInput "
          type="submit"
          value="Zaloguj mnie"
        ></input>
        <Link to={`/signup`}>
          <button className="signForm__button2">
            Nie masz konta? Zarejestruj się!
          </button>
        </Link>
      </form>
    </div>

    // -----------
  );
};

export default Login;
