export function saveProductToCart(productId) {
  //1. Ia produsele din cart daca ele exista
  let currentShoppingCartString = localStorage.getItem("shoppingCart");
  let currentShoppingCart = {};
  if (currentShoppingCartString) {
    currentShoppingCart = JSON.parse(currentShoppingCartString);
  }

  /**
   * {
   *   <productId>: <count>
   *   <productId>: <count>
   *   <productId>: <count>
   * }
   */

  const isProductInShoppingCart = currentShoppingCart[productId] ? true : false;

  if (isProductInShoppingCart) {
    //2. Adauga produsele la cart
    currentShoppingCart[productId] = currentShoppingCart[productId] + 1;
  } else {
    //2. Adauga produsele la cart
    currentShoppingCart[productId] = 1;
  }

  //3. Transforma obiectul in string pentru a putea fi salvata in localStorage
  currentShoppingCartString = JSON.stringify(currentShoppingCart);

  //4. Salveaza stringul in localStorage
  localStorage.setItem("shoppingCart", currentShoppingCartString);
}

export function getShoppingCartProductIds() {
  let currentShoppingCartString = localStorage.getItem("shoppingCart");

  if (currentShoppingCartString) {
    const shoppingCart = JSON.parse(currentShoppingCartString);
    return Object.keys(shoppingCart);
  } else {
    return [];
  }
}

export function isProductInShoppingCart(productId) {
  let shoppingCartString = localStorage.getItem("shoppingCart");
  let shoppingCart = shoppingCartString ? JSON.parse(shoppingCartString) : {};
  return shoppingCart[productId] ? true : false;
}

export function removeProductFromCart(productId) {
  let shoppingCartString = localStorage.getItem("shoppingCart");
  let shoppingCart = shoppingCartString ? JSON.parse(shoppingCartString) : {};
  delete shoppingCart[productId];
  shoppingCartString = JSON.stringify(shoppingCart);
  localStorage.setItem("shoppingCart", shoppingCartString);
}

export function removeAllProductsFromCart() {
  localStorage.removeItem("shoppingCart");
}

export function getShoppingCartProductCount(productId) {
  let shoppingCartString = localStorage.getItem("shoppingCart");
  let shoppingCart = shoppingCartString ? JSON.parse(shoppingCartString) : {};
  return shoppingCart[productId];
}

export function decrementShoppingCartProductCount(productId) {
  //1. Ia produsele din cart daca ele exista
  let currentShoppingCartString = localStorage.getItem("shoppingCart");
  let currentShoppingCart = {};
  if (currentShoppingCartString) {
    currentShoppingCart = JSON.parse(currentShoppingCartString);
  }
  const isProductInShoppingCart = currentShoppingCart[productId] ? true : false;

  if (isProductInShoppingCart) {
    //2. Adauga produsele la cart
    currentShoppingCart[productId] = currentShoppingCart[productId] - 1;
  }

  //3. Transforma obiectul in string pentru a putea fi salvata in localStorage
  currentShoppingCartString = JSON.stringify(currentShoppingCart);

  //4. Salveaza stringul in localStorage
  localStorage.setItem("shoppingCart", currentShoppingCartString);
}
