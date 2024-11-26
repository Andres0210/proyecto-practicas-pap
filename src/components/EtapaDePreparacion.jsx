import React from "react";
import { etapaData } from "../utils/etapaPreparacion";
import { Box, Container, Typography } from "@mui/material";

export default function EtapaDePreparacion() {
  return (
    <div>
      {" "}
      <Container sx={{ paddingY: 4, marginTop: "120px" }}>
        {/* Título Principal */}
        <Typography
          variant="h4"
          gutterBottom
          component="a"
          sx={{
            position: "relative",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textAlign: "center",
            color: "#6ede00",
          }}
          id="2"
        >
          Etapa de preparación
        </Typography>

        {/* Subtítulos con contenido */}
        {etapaData.map((item, index) => (
          <Box key={index} sx={{ marginY: 4 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              {item.subtitulo}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              {item.definicion}
            </Typography>
            <Box
              component="img"
              src={item.imagen}
              alt={`Imagen para ${item.subtitulo}`}
              sx={{
                width: "100%",
                maxWidth: 500,
                height: "auto",
                display: "block",
                margin: "16px auto",
                borderRadius: 4,
                boxShadow: 2,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontStyle: "italic",
                textAlign: "justify",
                color: "gray",
              }}
            >
              {item.reflexion}
            </Typography>
          </Box>
        ))}
      </Container>
    </div>
  );
}
