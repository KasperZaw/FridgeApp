import { Card, Typography } from "@mui/material";

type NutritionProps = {
  name: string;
  icon: string;
  nutri: string | undefined;
};

const nutritionCard = ({ name, icon, nutri }: NutritionProps) => {
  return (
    <Card
      sx={{
        height: "160px",
        width: "140px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <Typography fontSize="20px">{name}</Typography>
      <Typography fontSize="40px">{icon}</Typography>
      <Typography fontSize="20px">{nutri}</Typography>
    </Card>
  );
};

export default nutritionCard;
