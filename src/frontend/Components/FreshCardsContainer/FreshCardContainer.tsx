import { Box } from "@mui/material";
import FreshCard from "../FreshnessCard/FreshCard";
import { useEffect, useState } from "react";
import { useFridgeStore } from "../../../backend/globalState/globalState";
const FreshCardContainer = () => {
  const [productCount, setProductCount] = useState<number>();
  const [expiredProduct, setExpiredProduct] = useState("");
  const product = useFridgeStore((state) => state.product);

  useEffect(() => {
    const expired = product.filter(
      (p) => p.daysLeft != null && p.daysLeft <= 1,
    ).length;
    setExpiredProduct(String(expired));
    setProductCount(product.length);
  }, [product]);

  return (
    <Box
      display="flex"
      gap={{ xs: "10px", md: "30px" }}
      width="100%"
      maxWidth="850px"
      height="150px"
      marginTop="20px"
    >
      <FreshCard
        title={"Produkty"}
        count={String(productCount)}
        status={`aktualny stan twojej lodówki`}
        background="linear-gradient(135deg, #dce8ff, #eef3ff)"
        fontColor={"#4f6ef7"}
      />
      <FreshCard
        title={"Zjedz Szybko!"}
        count={expiredProduct}
        status={"produktów wkrótce przeterminowanych"}
        background="linear-gradient(135deg, #ffd6cc, #ffe8e0)"
        fontColor={"#ef4444"}
      />
      <FreshCard
        title={"Status"}
        count={expiredProduct <= "3" ? "Super" : "Średnio"}
        status={
          expiredProduct <= "3"
            ? "Świetnie ci idzie oby tak dalej"
            : "Masz troche produktów do wyrzucenia :("
        }
        background="linear-gradient(135deg, #c8f0e0, #e0f7ee)"
        fontColor={"#16a34a"}
      />
    </Box>
  );
};

export default FreshCardContainer;
