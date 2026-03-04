import { useState, useEffect } from "react";
import { auth } from "../../backend/Firebase/firebase";
import {
  getUserInfo,
  type UserProfile,
} from "../../backend/Firebase/user.services";
import ProductsContainer from "../Components/productsContainer/productsContainer";
import Navbar from "../Components/navbar/navbar";
import FreshCardContainer from "../Components/FreshCardsContainer/FreshCardContainer";
const mainPage = () => {
  const [data, setData] = useState<UserProfile | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) return;
      const info = await getUserInfo();
      setData(info);
    });
    return () => unsubscribe();
  }, []);

  if (!data) {
    return <div>leading...</div>;
  }
  return (
    <>
      <Navbar />
      <main>
        <FreshCardContainer />
        <ProductsContainer />
      </main>
    </>
  );
};

export default mainPage;
