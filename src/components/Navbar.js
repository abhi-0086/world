import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Navbar.css";

const Navbar = () => {
  // Sample URL of a globe image
  const globeImageUrl =
    "https://img.icons8.com/?size=512&id=rMF7T4f4fwKw&format=png";

  return (
    <AppBar
      position="static"
      sx={{ borderRadius: "5px", background: "#2196F3", marginBottom: 10 }}
    >
      <Toolbar className="navbar" sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={globeImageUrl}
            alt="Globe Logo"
            style={{ width: "50px", marginRight: "8px" }}
          />
        </Typography>
        <Typography
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "white",
            fontSize: "1.3rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          World
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
