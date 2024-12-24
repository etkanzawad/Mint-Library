import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Mint Library
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        {user && user.isAdmin ? (
          <>
            <Button color="inherit" component={Link} to="/admin/add-book">
              Add Book
            </Button>
            <Button color="inherit" component={Link} to="/admin/add-chapter">
              Add Chapter
            </Button>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
