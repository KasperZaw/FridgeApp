import {
  collection,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import { useFridgeStore } from "../globalState/globalState";

export const savePoroducts = async () => {
  const user = auth.currentUser;

  if (!user) return;

  try {
    const products = useFridgeStore.getState().product;

    for (const product of products) {
      // usuń undefined pola
      const cleanProduct = Object.fromEntries(
        Object.entries(product).filter(([_, v]) => v !== undefined),
      );
      await setDoc(
        doc(db, "Users", user.uid, "products", String(product.id)),
        cleanProduct,
      );
      console.log("zapisano:", product.id);
    }
  } catch (error) {
    console.error("błąd Firebase:", error);
  }
};

export const getProducts = async () => {
  const user = auth.currentUser;

  if (!user) return;
  const snapshot = await getDocs(collection(db, "Users", user.uid, "products"));
  const products = snapshot.docs.map((doc) => doc.data());
  return products;
};
