import { initializeApp } from "firebase/app";
import { getDocs, collection, getFirestore, doc, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";

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

export const getOrdersForUser = async () => {
  let orders = [];
  const ordersCollection = collection(db, "orders");
  const data = await getDocs(ordersCollection);
  data.forEach((doc) => {
    orders.push({ ...doc.data(), id: doc.id, createdAt: new Date(doc.data().createdAt.seconds) });
  });
  return orders;
};

export const getOrderById = async (id) => {
  const documentReference = doc(db, "orders", id);
  const data = await getDoc(documentReference);

  return {
    ...data.data(),
    id: data.id,
    createdAt: new Date(data.data().createdAt.seconds)
  };
}

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

export const signUpWithEmailAndPassword = async (email, password) => {
  const authService = getAuth();
  const userCredentials = await createUserWithEmailAndPassword(authService, email, password);
  await sendEmailVerification(userCredentials.user);
  console.log(userCredentials);
};
export const signInUserWithEmailAndPassword = async (email, password) => {
  const authService = getAuth();
  return signInWithEmailAndPassword(authService, email, password);
};

export const SendUserPasswordReset = async (resetEmail) => {
  const authService = getAuth();

  return sendPasswordResetEmail(authService, resetEmail);
};

export const signInUserWithGoogle = async () => {
  const authService = getAuth();
  const provider = new GoogleAuthProvider();
  const credential = await signInWithPopup(authService, provider);

  return {
    id: credential.user.uid,
    displayName: credential.user.displayName,
    phoneNumber: credential.user.phoneNumber,
    email: credential.user.email,
    photoURL: credential.user.photoURL,
    emailVerified: credential.user.emailVerified,
  };
};

export const signInUserWithFacebook = async () => {
  const authService = getAuth();
  const provider = new FacebookAuthProvider();
  const credential = await signInWithPopup(authService, provider);

  return {
    id: credential.user.uid,
    displayName: credential.user.displayName,
    phoneNumber: credential.user.phoneNumber,
    email: credential.user.email,
    photoURL: credential.user.photoURL,
    emailVerified: credential.user.emailVerified,
  };
};

export const isUserAuth = () => {
  const authService = getAuth();
  if (authService.currentUser) {
    return true;
  }
  return false;
};

export const getCurrentUser = () => {
  const authService = getAuth();
  const user = authService.currentUser;
  if (!user) {
    return undefined;
  }
  return {
    id: user.uid,
    displayName: user.displayName,
    phoneNumber: user.phoneNumber,
    email: user.email,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified,
  };
};

export const signOutUser = async () => {
  const authService = getAuth();
  signOut(authService);
};
