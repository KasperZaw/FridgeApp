import { Box, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
  useFridgeStore,
  type FridgeStorage,
} from "../../../backend/globalState/globalState";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import NutritionCard from "../nutritionCard/nutritionCard";
import { Trash2 } from "lucide-react";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../backend/Firebase/firebase";

type ProductCardProps = {
  thumb_img: string | undefined;
  product_name: string | undefined;
  size: string | undefined;
  id: string | undefined;
  kcal: string | undefined;
  protein: string | undefined;
  fat: string | undefined;
  expiryDate: string | undefined;
  quantity: number | undefined;
};

const productCard = ({
  id,
  thumb_img,
  product_name,
  size,
  kcal,
  protein,
  fat,
  expiryDate,
  quantity,
}: ProductCardProps) => {
  const { updateProduct } = useFridgeStore();
  const removeProduct = useFridgeStore(
    (state: FridgeStorage) => state.removeProdcut,
  );
  const computedDaysLeft = expiryDate
    ? dayjs(expiryDate, "DD.MM.YYYY").diff(dayjs(), "day")
    : null;

  const handleRemove = async (id: string) => {
    removeProduct(id);
    const user = auth.currentUser;
    if (!user) return;

    await deleteDoc(doc(db, "Users", user.uid, "products", id));
  };

  return (
    <>
      <Accordion
        disableGutters
        sx={{
          width: "100%",
          overflow: "hidden",
          "&:before": { display: "none" },
          boxShadow: "none",
          borderBottom: "1px solid #EFEEF3",
        }}
      >
        <AccordionSummary component="div" sx={{ padding: "0px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              bgcolor="white"
              borderRadius="20px"
              py="xs: 1.5, md: 3"
              padding={{ xs: "12px", md: "24px 32px" }}
            >
              <Box display="flex" gap="20px" alignItems="center">
                <Box
                  height="70px"
                  width="70px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img src={thumb_img} alt="" style={{ height: "70px" }} />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
                  gap="15px"
                >
                  <Typography variant="subtitle1">{product_name}</Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ gap: { xs: "10px", md: "30px" } }}
                  >
                    <Typography fontSize="14px">{size}</Typography>
                    <TextField
                      type="number"
                      placeholder="1"
                      size="small"
                      onChange={(e) => {
                        updateProduct(String(id), {
                          quantity: Number(e.target.value),
                        });
                      }}
                      value={quantity ?? ""}
                      sx={{
                        width: "40px",
                        "& input": {
                          fontSize: "14px",
                          padding: "4px 6px",
                          border: "none",
                          /* Chrome, Safari, Edge */
                        },
                        "& input[type=number]::-webkit-outer-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },
                        "& input[type=number]::-webkit-inner-spin-button": {
                          WebkitAppearance: "none",
                          margin: 0,
                        },

                        /* Firefox */
                        "& input[type=number]": {
                          MozAppearance: "textfield",
                        },
                      }}
                    />
                    <DatePicker
                      onChange={(newDate) => {
                        updateProduct(String(id), {
                          expiryDate: newDate?.format("DD.MM.YYYY"),
                        });
                      }}
                      value={
                        expiryDate ? dayjs(expiryDate, "DD.MM.YYYY") : null
                      }
                      slotProps={{
                        textField: {
                          variant: "standard",
                          sx: {
                            width: "100px",
                            "& .MuiPickersSectionList-sectionContent": {
                              fontSize: "11px",
                            },
                            "& .MuiInputAdornment-root": {
                              "& button": { padding: "0px" },
                              "& svg": { fontSize: "14px" },
                            },
                          },
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box display="flex" gap="15px">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="10px"
                  width="60px"
                  padding="10px"
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(52, 211, 153, 0.4), rgba(45, 212, 191, 0.4))",
                  }}
                >
                  <Typography fontSize="14px" color="white">
                    {computedDaysLeft ?? "-"}
                  </Typography>
                </Box>
                <Box
                  bgcolor="red"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="10px"
                  width="30px"
                  padding="10px"
                  sx={{
                    background:
                      "linear-gradient(135deg, rgba(239, 68, 68, 0.4), rgba(248, 113, 113, 0.4))",
                  }}
                >
                  <button
                    onClick={() => handleRemove(String(id))}
                    style={{ border: "none", background: "none" }}
                  >
                    <Trash2 height="16px" color="#ef4444" />
                  </button>
                </Box>
              </Box>
            </Box>
          </LocalizationProvider>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop="20px"
            padding="30px"
            gap="30px"
          >
            <NutritionCard name="Kalorie" icon="🔥" nutri={kcal} />
            <NutritionCard name="Białko" icon="💪" nutri={protein} />
            <NutritionCard name="Tłuszcze" icon="🧈" nutri={fat} />
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
export default productCard;
