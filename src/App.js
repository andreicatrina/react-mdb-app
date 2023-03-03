import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";

import Homepage from "./pages/Homepage/Homepage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import { OrdersPage } from "./pages/OrdersPage/OrdersPage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage/ShoppingCartPage";
import NewOrderDetails from "./pages/NewOrderDetails/NewOrderDetails";
import { createUserProfile, getCurrentUser, getUserProfileByUserId } from "./utils/firebase";

function App() {
  useEffect(() => {
    const fbAuthService = getAuth()
    fbAuthService.onAuthStateChanged(onAuthChange)
  }, []);

  async function onAuthChange(user) {
    if (user) {
      console.log("vezi ca s-a logat un user");
      const user = getCurrentUser();
      const userProfile = await getUserProfileByUserId(user.id);
      if (!userProfile) {
        await createUserProfile(user.id);
      }
    } else {
      console.log("vezi ca nu exista user logat");
    }
  }

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
        <Route exact path={"/account/orders/:id"}>
          <OrderPage />
        </Route>
        <Route exact path={"/account"}>
          <AccountPage />
        </Route>
        <Route exact path={"/account/orders"}>
          <OrdersPage />
        </Route>
        <Route exact path={"/sign-in"}>
          <SignInPage />
        </Route>
        <Route exact path={"/sign-up"}>
          <SignUpPage />
        </Route>
        <Route exact path={"/reset"}>
          <ResetPasswordPage />
        </Route>
        <Route exact path={"/shoppingcart"}>
          <ShoppingCartPage />
        </Route>
        <Route exact path={"/new-order-details"}>
          <NewOrderDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
