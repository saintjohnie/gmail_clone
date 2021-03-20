import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { selectSendMessageIsOpen } from "./features/counter/mailSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login } from "./features/counter/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
const user=useSelector(selectUser)
  const dispatch = useDispatch()
  
useEffect(() => {
  auth.onAuthStateChanged(user => {
    if (user) {
    dispatch(
      login({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      })
    );
  }
})
}, [])

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app_main">
            <SideBar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
