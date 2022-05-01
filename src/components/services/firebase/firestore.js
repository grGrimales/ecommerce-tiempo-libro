import { firestoreDb } from "./index";
import { getDocs, query, collection, where } from "firebase/firestore";
import { createAdaptedProductFromFirestore } from "../../../adapters/productAdapter";

export const getProducts = (categoryId) => {
  const productsRef = collection(firestoreDb, "products");

  return new Promise((resolve, reject) => {
    const collectionRef = categoryId
      ? query(productsRef, where("category", "array-contains", categoryId))
      : productsRef;

    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return createAdaptedProductFromFirestore(doc);
        });
        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getCategories = () => {
  const collectionRef = collection(firestoreDb, "categories");

  return new Promise((resolve, reject) => {
    getDocs(query(collectionRef))
      .then((response) => {
        const categories = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(categories);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
