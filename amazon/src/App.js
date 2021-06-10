import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51J0rKxCzfbPNtRdqPfOE620hvno1mheNC2IgQivg04fhZdbkiiTQDqiIiKRUEwykEz9yL8B0yE35Zzjr12VDG99x00fVnA1oOV"
);

function App() {
  //pulling user from the global state
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when app component loads
    //this function is always listening
    //whenever the authentication changes it will give us the auth user
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //the user just logged in/ the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    /** render components based on route */
    <Router>
      <div className="app">
        {/* Header is outside switch because we want it to render regardsless of the route */}
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* default route "/" must always be on bottom */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
