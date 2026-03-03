import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "./firebase";
export interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
}
export async function getUserInfo(): Promise<UserProfile> {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("User not logged in");
  }

  const userRef = doc(db, "Users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    throw new Error("User not found");
  }
  console.log(snap.data());
  return snap.data() as UserProfile;
}
