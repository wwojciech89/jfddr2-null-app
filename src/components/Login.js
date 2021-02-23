import firebase from "../Firebase/firebase.js";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const createNewUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((token) => {
        console.log(token);
      });
    //   .then(() => {
    //     logout();
    //   });
  };

  const signIn = (event) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((token) => {
        console.log(token);
      });
  };

  const logout = () => {
    firebase.auth().signOut();
  };

  return (
    <div style={{ margin: "40px" }}>
      <form
        onSubmit={(e) => {
          createNewUser();
          e.preventDefault();
        }}
      >
        <label>
          email:
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          password:
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>

        <input type="submit" value="Zarejestruj użytkownika"></input>
      </form>
      ----------------------------
      <form
        onSubmit={(e) => {
          signIn();
          e.preventDefault();
        }}
      >
        <label>
          email:
          <input
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </label>
        <label>
          password:
          <input
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
        </label>

        <input type="submit" value="Zaloguj użytkownika"></input>
      </form>
    </div>

    // -----------
  );
};

export default Login;
