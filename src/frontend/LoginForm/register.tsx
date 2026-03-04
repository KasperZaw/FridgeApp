import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { registerUser } from "../../backend/Firebase/auth.services";
import { Link } from "react-router-dom";
import {toast} from 'react-hot-toast'
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      await registerUser({
        email,
        password,
        firstName: name,
        lastName: lname,
      });
  
      toast.success("Konto utworzone");
    } catch (error) {
      toast.error("Nie udało się utworzyć konta");
    }
  };

  return (
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
          Register
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Name"
            type="name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="lastName"
            type="lastName"
            fullWidth
            margin="normal"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />

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
          <Link to="/login">Masz konto? Przjedz do Logowania</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
