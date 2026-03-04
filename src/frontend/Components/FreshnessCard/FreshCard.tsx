import { Box, Typography } from "@mui/material";
type FreshCardProps = {
  title: string;
  count: string | undefined;
  status: string | undefined;
  background: string;
  fontColor: string;
};
const FreshCard = ({
  title,
  count,
  status,
  background,
  fontColor,
}: FreshCardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      borderRadius="20px"
      height="100%"
      width="100%"
      sx={{
        background: background,
        padding: "20px",
      }}
    >
      <Typography sx={{ fontSize: "16px" }}>{title}</Typography>
      <Typography sx={{ color: fontColor, fontSize: "36px", fontWeight: 800 }}>
        {count}
      </Typography>
      <Typography sx={{ fontSize: "12px", fontWeight: 100 }}>
        {status}
      </Typography>
    </Box>
  );
};

export default FreshCard;
