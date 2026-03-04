import { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { X } from "lucide-react";

import {
  useFridgeStore,
  type FridgeStorage,
} from "../../../backend/globalState/globalState";

type AddProductModalProps = {
  open: boolean;
  onClose: () => void;
};

const addCard = ({ open, onClose }: AddProductModalProps) => {
  const addProduct = useFridgeStore((state: FridgeStorage) => state.addProduct);
  const [gramature, setGramature] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");

  const handleAdd = () => {
    const id = String(Math.floor(100000 + Math.random() * 900000));
    addProduct({
      id: id,
      name: name,
      size: gramature,
      img: imgUrl,
    });
    setName("");
    setGramature("");
    onClose();
  };

  const productImages: string[] = [
    "./src/assets/foodIcons/1x/Ficon1.png",
    "./src/assets/foodIcons/1x/Ficon2.png",
    "./src/assets/foodIcons/1x/Ficon3.png",
    "./src/assets/foodIcons/1x/Ficon4.png",
    "./src/assets/foodIcons/1x/Ficon5.png",
    "./src/assets/foodIcons/1x/Ficon6.png",
    "./src/assets/foodIcons/1x/Ficon7.png",
    "./src/assets/foodIcons/1x/Ficon8.png",
    "./src/assets/foodIcons/1x/Ficon9.png",
    "./src/assets/foodIcons/1x/Ficon10.png",
    "./src/assets/foodIcons/1x/Ficon11.png",
    "./src/assets/foodIcons/1x/Ficon12.png",
  ];

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            borderRadius: "24px",
            padding: "8px",
            minWidth: "420px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          },
        }}
      >
        <DialogContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb="28px"
          >
            <Typography fontWeight={600} fontSize="18px" color="#1a1a2e">
              Dodaj produkt
            </Typography>
            <IconButton onClick={onClose} size="small" sx={{ color: "#aaa" }}>
              <X size={18} />
            </IconButton>
          </Box>

          <Box display="flex" flexDirection="column" gap="16px">
            <Box>
              <Typography
                fontSize="11px"
                color="#888"
                mb="6px"
                fontWeight={600}
                letterSpacing="0.5px"
              >
                NAZWA PRODUKTU
              </Typography>
              <TextField
                fullWidth
                placeholder="np. Mleko 3.2%"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
              />
            </Box>

            <Box>
              <Typography
                fontSize="11px"
                color="#888"
                mb="6px"
                fontWeight={600}
                letterSpacing="0.5px"
              >
                ILOŚĆ / GRAMATURA
              </Typography>
              <TextField
                fullWidth
                placeholder="np. 1L, 500g"
                value={gramature}
                onChange={(e) => setGramature(e.target.value)}
                variant="outlined"
                //sx={fieldSx}
              />
            </Box>
            <Box>
              <Typography>Wybierz ikone</Typography>
              <Box
                display="flex"
                alignItems="center"
                width="400px"
                overflow="auto"
                sx={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {productImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`FoodIcon-${index}`}
                    style={{ height: "80px" }}
                    onClick={() => setImgUrl(src)}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          <Box display="flex" gap="12px" mt="28px">
            <button
              onClick={onClose}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "12px",
                border: "1px solid #EFEEF3",
                background: "white",
                fontSize: "14px",
                color: "#888",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Anuluj
            </button>
            <button
              onClick={handleAdd}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "12px",
                border: "none",
                background: "linear-gradient(135deg, #a855f7, #c084fc)",
                fontSize: "14px",
                color: "white",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Dodaj produkt
            </button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default addCard;
