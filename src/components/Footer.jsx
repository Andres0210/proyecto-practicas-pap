import React from "react";
import { Box, Container, IconButton, Typography, Link } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#424242",
        color: "white",
        py: 4,
        mt: 6,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {/* Redes Sociales */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color:"#6ede00" }}>
          ¡Síguenos en nuestras redes sociales!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <IconButton
            component={Link}
            href="https://www.facebook.com/areandina"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.instagram.com/areandina/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <Instagram fontSize="large" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://x.com/Areandina"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/school/fundacion-universitaria-del-area-andina/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>
        </Box>

        {/* Derechos reservados */}
        <Typography
          variant="body2"
          sx={{ mt: 3, fontSize: "0.9rem", color: "#c5cae9" }}
        >
          © 2024 Guia de intervención en crisis. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
