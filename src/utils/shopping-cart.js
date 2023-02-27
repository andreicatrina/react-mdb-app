export function saveProductToCart(productId) {
  //1. Ia produsele din cart daca ele exista
  let currentShoppingCartString = localStorage.getItem("shoppingCart");
  let currentShoppingCartList;

  if (currentShoppingCartString) {
    currentShoppingCartList = JSON.parse(currentShoppingCartString);
  } else {
    currentShoppingCartList = [];
  }

  //2. Adauga produsele la cart
  currentShoppingCartList = [productId, ...currentShoppingCartList];

  //3. Transforma lista in string pentru a putea fi salvata in localStorage
  currentShoppingCartString = JSON.stringify(currentShoppingCartList);

  //4. Salveaza stringul in localStorage
  localStorage.setItem("shoppingCart", currentShoppingCartString);
}

export function getShoppingCartProductIds() {
  let currentShoppingCartString = localStorage.getItem("shoppingCart");

  if (currentShoppingCartString) {
    return JSON.parse(currentShoppingCartString);
  } else {
    return [];
  }
}

export function isProductInShoppingCart(productId) {
  let shoppingCart = localStorage.getItem("shoppingCart");
  let shoppingCartList = shoppingCart ? JSON.parse(shoppingCart) : [];
  return shoppingCartList.includes(productId);
}

export function removeProductFromCart(productId) {
  let shoppingCart = localStorage.getItem("shoppingCart");
  let shoppingCartList = shoppingCart ? JSON.parse(shoppingCart) : [];

  const filteredShoppingCart = shoppingCartList.filter((pId) => {
    return pId !== productId;
  });

  shoppingCart = JSON.stringify(filteredShoppingCart);
  localStorage.setItem("shoppingCart", shoppingCart);
}

export function removeAllProductsFromCart() {}
