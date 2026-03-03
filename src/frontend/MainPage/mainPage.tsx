import React from "react";
import { useState, useEffect } from "react";
import {
  useFridgeStore,
  type FridgeStorage,
} from "../../backend/globalState/globalState";
import { auth } from "../../backend/Firebases/firebase";
import {
  getUserInfo,
  type UserProfile,
} from "../../backend/Firebases/user.services";
import ProductsContainer from "../Components/productsContainer/productsContainer";
import Navbar from "../Components/navbar/navbar";
const mainPage = () => {
  const [food, setFood] = useState<any>(null);
  const [data, setData] = useState<UserProfile | null>(null);
  const api = "https://world.openfoodfacts.net/api/v2/product/20881054.json";

  useEffect(() => {
    async function downloadFood() {
      try {
        const response = await fetch(api);
        const json = await response.json();
        console.log(json);
        setFood(json.product);
      } catch (error) {
        console.error(error);
      }
    }

    downloadFood();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) return;
      const info = await getUserInfo();
      setData(info);
    });
  }, []);


  if (!data) {
    return <div>leading...</div>;
  }
  return (
    <>
      <Navbar />
      <main>
        <ProductsContainer />
      </main>
    </>
  );
};

export default mainPage;
