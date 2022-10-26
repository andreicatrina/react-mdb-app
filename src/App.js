import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

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
      </Switch>
    </Router>
  );
}

export default App;
