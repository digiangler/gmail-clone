import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Login from "./Login";
import Mail from "./Mail";
import SendMail from "./SendMail";
import Sidebar from "./Sidebar";
import { auth } from "./firebase";

import { selectsendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />

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
    </Router>
  );
}

export default App;
