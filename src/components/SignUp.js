import firebase from "../Firebase/firebase.js";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import HomeButton from "./HomeButton";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const createNewUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((token) => {
        firebase.firestore().collection("Users").doc(token.user.uid).set({
          email: token.user.email,
        });
        history.go(-2);
      });
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="loginWrapper">
      <HomeButton />
      <form
        className="form"
        onSubmit={(e) => {
          createNewUser();
          e.preventDefault();
        }}
      >
        <label>
          email:
          <input
            className="formInput"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          password:
          <input
            type="password"
            className="formInput"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>

        <input
          className="login__submitFormInput"
          type="submit"
          value="Zarejestruj mnie"
        ></input>
        <Link to={`/login`}>
          <button className="signForm__button2">
            Masz konto? Zaloguj się!
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
