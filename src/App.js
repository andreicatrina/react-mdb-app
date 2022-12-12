import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/products/:productId">
          <ProductPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path={"/about"}>
          <AboutPage />
        </Route>
        <Route path={"/shopping-cart"}>
          <ShoppingCart />
        </Route>
        <Route exact path={"/sign-in"}>
          <SignInPage />
        </Route>
        <Route exact path={"/sign-up"}>
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
