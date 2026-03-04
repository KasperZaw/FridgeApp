import { auth, db } from "./firebase.ts";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import type { User } from "firebase/auth";

type RegisterData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export async function registerUser(data: RegisterData) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );

    const user = userCredential.user;
    console.log(user);
    if (user) {
      setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: data.firstName,
        lastName: data.lastName,
      });
    }
  } catch (error) {
    console.error(`firebase error: ${error}`);
    throw error;
  }
}

export async function loginUser(
  email: string,
  password: string,
): Promise<User> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    console.log("uzytkownik zalogowany");

    return userCredential.user;
  } catch (error: any) {
    console.error("LOGIN ERROR CODE:", error.code);
    console.error("LOGIN ERROR MESSAGE:", error.message);
    throw error;
  }
}

export async function LogoutUser() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("wylogowano poprawnie");
    })
    .catch((error) => {
      console.error(error);
    });
}
