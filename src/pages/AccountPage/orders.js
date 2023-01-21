function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export let orderList = [];

for (let i = 0; i <= 15; i++) {
  const orders = {
    createdAt: new Date(`${getRandomInt(1, 30)} Oct 2022 00:00:00`),
    userName: "Andrei",
    deliveryAddress: "str. ABC, nr. 9, Galati",
    deliveryPrice: 19,
    paymentStatus: "Efectuata",
    shippingStatus: "Asteapta ridicare",
    shortId: `MDB ${i}`,
    totalPrice: 19.99,
    userId: "Yag59YrXTUhKv7Numy5qVYe0laG2",
  };
  orderList.push(orders);
  console.log(orderList);
}
