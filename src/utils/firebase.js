import { initializeApp } from "firebase/app";
import { getDocs, collection, getFirestore, doc, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIXnWZ9hsUQPQumOS1vj7FDvIBWBVPYFE",
  authDomain: "mdb-ro.firebaseapp.com",
  projectId: "mdb-ro",
  storageBucket: "mdb-ro.appspot.com",
  messagingSenderId: "909944761235",
  appId: "1:909944761235:web:d5955d92f6b0ae1f9dd666",
  measurementId: "G-H5ND3JQ4ZX",
};

let app;
let db;

export const initializeFirebase = () => {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  db = getFirestore(app);
};

export const getProducts = async () => {
  let products = [];
  const data = await getDocs(collection(db, "products"));
  data.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });
  console.log(products);
  return products;
};

export const getProductById = async (id) => {
  const data = await getDoc(doc(db, "products", id));

  return {
    ...data.data(),
    id: data.id,
  };
};

export const getReviewsForProduct = async (productId) => {
  const productReviewsReference = collection(db, "products", productId, "reviews");
  const reviews = await getDocs(productReviewsReference);
  let reviewsList = [];
  reviews.forEach((reviewDocument) => {
    console.log(reviewDocument.data().date.seconds);
    reviewsList.push({
      ...reviewDocument.data(),
      id: reviewDocument.id,
      date: new Date(reviewDocument.data().date.seconds),
    });
  });
  return reviewsList;
};
