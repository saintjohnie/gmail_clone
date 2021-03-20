import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import { auth, Provider } from "./firebase";
import { login } from "./features/counter/userSlice";
import { useDispatch } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(Provider)
      .then((user) => {
        console.log(user.email);
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          alt=""
          src="https://i1.wp.com/ihelpyourmac.com/wordpress/wp-content/uploads/2014/07/gmail-logo.png?ssl=1"
        />
        <Button className="login_btn" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}
