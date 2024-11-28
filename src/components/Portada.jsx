import React from "react";
import { Box, Typography, Container } from "@mui/material";
import imagenn from '../image/portadaimg.webp'

export default function Portada() {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "70vh", md: "100vh" }, // Altura adaptable según el tamaño de la pantalla
        backgroundImage: `url(${imagenn})`, // Cambia esta ruta por tu imagen
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#6ede00",
        textAlign: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
         backgroundColor: "rgba(0, 0, 0, 0.5)", // Oscurece la imagen con un overlay
          zIndex: 1,
        }}
      />
      {/* Contenido */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontSize: { xs: "2.5rem", md: "4rem" }, // Tamaño adaptativo
            color: "#6ede00",
          }}
        >
          Guía de Intervención en Crisis
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: 2,
            fontSize: { xs: "1.2rem", md: "3rem" },
            opacity: 0.9,
          }}
        >
          Herramienta para el psicólogo en formación
        </Typography>
      </Container>
    </Box>
  );
}
