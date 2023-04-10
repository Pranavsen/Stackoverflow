import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import StackOverflow from "./components/StackOverflow";
import Question from "./components/Add-Question/Question";
import ViewQuestion from "./components/ViewQuestion";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Auth from "./components/Auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const PrivateRoute = () => {
    return user ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Auth />} />

          {/*<Route exact path={user ? "/" : "/auth"} element={user ? <StackOverflow/> : <Auth />} />*/}
          <Route element={<PrivateRoute />}>
            <Route exact path="/home" element={<StackOverflow />} />
            <Route exact path="/add-question" element={<Question />} />
            <Route exact path="/question" element={<ViewQuestion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
