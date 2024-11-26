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
        {/* Logo o título */}
        <Typography
          onClick={goToHome}
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#ff00ff",
          }}
        >
          Mi Navbar
        </Typography>

        {/* Botones en pantallas grandes */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={goToRecursos}
            sx={{
              backgroundColor: "#8bbe35", // Color del fondo
              color: "#fff", // Color del texto
              borderRadius: "8px", // Bordes redondeados
              padding: "8px 16px", // Relleno para que el botón se vea más grande
              margin: "0 8px", // Espaciado entre botones
              "&:hover": {
                backgroundColor: "#7a9f2b", // Color al pasar el mouse
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra al pasar el mouse
              },
            }}
          >
            RECURSOS
          </Button>
          <Button
            onClick={goToAboutUs}
            sx={{
              backgroundColor: "#8bbe35", // Color del fondo
              color: "#fff", // Color del texto
              borderRadius: "8px", // Bordes redondeados
              padding: "8px 16px", // Relleno para que el botón se vea más grande
              margin: "0 8px", // Espaciado entre botones
              "&:hover": {
                backgroundColor: "#7a9f2b", // Color al pasar el mouse
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra al pasar el mouse
              },
            }}
          >
            Sobre nosotros
          </Button>
          <Button
            onClick={goToContactanos}
            sx={{
              backgroundColor: "#8bbe35", // Color del fondo
              color: "#fff", // Color del texto
              borderRadius: "8px", // Bordes redondeados
              padding: "8px 16px", // Relleno para que el botón se vea más grande
              margin: "0 8px", // Espaciado entre botones
              "&:hover": {
                backgroundColor: "#7a9f2b", // Color al pasar el mouse
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra al pasar el mouse
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
            <MenuItem onClick={handleMenuClose}>Botón 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Botón 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Botón 3</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
