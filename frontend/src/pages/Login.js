import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  TextField,
  Typography,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import axios from "axios";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tab, setTab] = useState(0);

  const handleLogin = () => {
    login(email);
    navigate("/");
  };

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5003/api/users/register", {
        email,
        password,
      });
      login(email);
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {tab === 0 ? "Login" : "Register"}
      </Typography>
      <Tabs value={tab} onChange={handleTabChange} centered>
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>
      <Box mt={2}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        {tab === 0 ? (
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleRegister}>
            Register
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Login;
