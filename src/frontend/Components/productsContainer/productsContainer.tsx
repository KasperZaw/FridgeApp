import { useEffect, useState } from "react";
import {
  useFridgeStore,
  type FridgeStorage,
  type Product,
} from "../../..//backend/globalState/globalState.ts";
import ProductCard from "../productCard/productCard";
import { Box, Typography } from "@mui/material";
import AddCard from "../manualAddCard/addCard";
import { getProducts } from "../../../backend/Firebase/products.db";
const productsContainer = () => {
  const { setProducts } = useFridgeStore();
  const [open, setOpen] = useState(false);
  const products = useFridgeStore((state: FridgeStorage) => state.product);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProducts();
        setProducts(data as any[]);
      } catch (error) {
        console.error(error);
      }
    };
    load();
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "#FDFAFE",
        minHeight: "400px",
        maxWidth: "850px",
        maxHeight: "500px",
        borderRadius: "20px",
        width: "100%",
        margin: "50px auto 0 auto",
        boxSizing: "border-box",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="24px 32px"
      >
        <Typography fontSize="20px">Twoje produkty</Typography>
        <button
          className="btn-add"
          style={{ color: "#a855f7" }}
          onClick={() => setOpen(true)}
        >
          + Dodaj ręcznie
        </button>
        <AddCard open={open} onClose={() => setOpen(false)} />
      </Box>
      <Box overflow="auto" height="640px" flex="1">
        {products.map((p: Product) => (
          <ProductCard
            key={p.id}
            quantity={p.quantity}
            expiryDate={p.expiryDate}
            id={p.id}
            thumb_img={p.img}
            product_name={p.name}
            size={p.size}
            kcal={String(p.kcal)}
            protein={p.protein}
            fat={p.fat}
          />
        ))}
      </Box>
    </Box>
  );
};

export default productsContainer;
