import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../../backend/Firebase/auth.services";
import { Link, useNavigate } from "react-router-dom";
const login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("CLICK LOGIN");
    const user = await loginUser(email, password);
    console.log("USER FROM LOGIN:", user);

    if (user) {
      navigate("/main");
    }
  };

  return (
    <div>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: 360,
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" mb={3} textAlign="center">
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, py: 1.2, borderRadius: 2 }}
            >
              Sign in
            </Button>
          </Box>
          <Typography
            variant="body1"
            mb={2}
            textAlign="center"
            margin={2}
            fontSize={12}
          >
            <Link to="/register">Nie masz konta? Przjedz do rejestracji</Link>
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default login;
