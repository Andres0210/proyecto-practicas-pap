import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoAndina from "../image/Logo_de_Areandina.svg.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const goToRecursos = () => {
    navigate("/recursos");
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToAboutUs = () => {
    navigate("/about");
  };

  const goToContactanos = () => {
    navigate("/contact");
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#424242",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <Toolbar>
        {/* Logo y título */}
        <Box
          onClick={goToHome}
          sx={{
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexGrow: 1,
            cursor: "pointer",
          }}
        >
          <img
            src={logoAndina}
            alt="Logo de Areandina"
            style={{ width: "150px", height: "auto", marginRight: "10px" }}
          />
        </Box>

        {/* Botones en pantallas grandes */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={goToRecursos}
            sx={{
              color: "#8bbe35", // Color del texto
              borderRadius: "8px",
              padding: "8px 16px",
              margin: "0 8px",
              "&:hover": {
                backgroundColor: "#7a9f2b",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            RECURSOS
          </Button>
          <Button
            onClick={goToAboutUs}
            sx={{
              color: "#8bbe35", // Color del texto
              borderRadius: "8px",
              padding: "8px 16px",
              margin: "0 8px",
              "&:hover": {
                backgroundColor: "#7a9f2b",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Sobre nosotros
          </Button>
          <Button
            onClick={goToContactanos}
            sx={{
              color: "#8bbe35", // Color del texto
              borderRadius: "8px",
              padding: "8px 16px",
              margin: "0 8px",
              "&:hover": {
                backgroundColor: "#7a9f2b",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Contáctanos
          </Button>
        </Box>

        {/* Menú hamburguesa en pantallas pequeñas */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" edge="end" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: "40px" }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Typography onClick={goToRecursos}>Recursos</Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography onClick={goToAboutUs}>Sobre nosotros</Typography>{" "}
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Typography onClick={goToContactanos}>Contáctanos</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
