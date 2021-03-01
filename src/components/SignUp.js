import firebase from "../Firebase/firebase.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import HomeButton from "./HomeButton";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const addNewUserToDB = () => {
    firebase.firestore().collection("Users").add({
      email: "tu będzie email",
    });
  };

  const createNewUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((token) => {
        firebase.firestore().collection("Users").doc(token.user.uid).set({
          email: token.user.email,
        });
      });
  };

  const signIn = (event) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((token) => {
        console.log(
          "UID usera to " +
            token.user.uid +
            " Email usera to " +
            token.user.email
        );
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
            className="formInput"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>

        <input
          className="login__submit formInput"
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
