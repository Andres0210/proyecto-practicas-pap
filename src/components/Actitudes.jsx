import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";

const attitudes = [
  "Tener una actitud de aceptación y respeto tratando a la persona con dignidad y sin juicios, creando un ambiente seguro y acogedor.",
  "Contar con la capacidad de escuchar atentamente y comprender los sentimientos de la persona en crisis, para ofrecer un apoyo efectivo.",
  "Estar convencido de que su ayuda es valiosa y puede marcar una diferencia significativa en la vida de la persona en crisis.",
  "Evaluar la situación de manera rápida y precisa para proporcionar el apoyo adecuado.",
  "Reconocer que la intervención y los contactos con la persona en crisis son limitados en el tiempo, y enfocar las energías en resolver el problema de manera eficiente.",
  "Estar dispuesto a tomar un rol activo e incluso directivo en la intervención, según lo requiera la situación.",
  "Ser flexible con las técnicas de intervención adaptándolas según las necesidades específicas del caso, demostrando flexibilidad y creatividad.",
  "Mantener la coherencia y no prometer lo que no se puede cumplir, asegurando que la persona en crisis pueda confiar en el apoyo ofrecido.",
  "Proporcionar información verídica para mantener la credibilidad y la confianza de la persona en crisis.",
  "Reflexionar constantemente sobre sus propias emociones y reacciones respecto a la problemática de la persona en crisis, para mantener la objetividad y la eficacia en la intervención.",
];

const bubbleStyle = {
  padding: "20px",
  borderRadius: "20%",
  backgroundColor: "#85FFBD",
  backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
  margin: "10px",
  marginTop:"60px",
  textAlign: "justify",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const Actitudes = () => {
  return (
    <Container id="6" maxWidth="lg" sx={{ mt: 15, mb: 15 }}>
      <Typography
        variant="h5"
        gutterBottom
        component="a"
        sx={{
          position: "relative",
          fontWeight: "bold",
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textAlign: "center",
          color: "#6ede00",
        }}
        
      >
        Actitudes del Interventor para Brindar Primeros Auxilios Psicológicos
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {attitudes.map((attitude, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper elevation={3} sx={bubbleStyle}>
              <Typography variant="body1" align="center">
                {attitude}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Actitudes;
