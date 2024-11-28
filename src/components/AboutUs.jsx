import React from "react";
import { Container, Grid, Paper, Typography, Box, Button } from "@mui/material";
import soycarla from "../image/fotoCarla.jpg";
import soyJorge from "../image/fotoJorge.jpg";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Agradecimientos from "./Agradecimientos";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <Container sx={{ py: 4, mt: 20 }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={handleClick}
        sx={{
          backgroundColor: "#8bbe35", // Cambia el color del botón
          "&:hover": {
            backgroundColor: "#79a42d", // Cambia el color cuando el mouse pasa por encima
          },
          textTransform: "none", // Evita que el texto esté en mayúsculas
          fontWeight: "bold",
        }}
      >
        Volver a la guía
      </Button>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          position: "relative",
          fontWeight: "bold",
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textAlign: "center",
          color: "#6ede00",
          mb: 8,
        }}
        textAlign="center"
      >
        sobre nosotros
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Persona 1 */}
        <Grid item xs={12} sm={6} md={4} >
          <Paper
            sx={{
              padding: 3,
              height:"500px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "background.paper",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                width: 240,
                height: 240,
                borderRadius: "50%",
                overflow: "hidden",
                marginBottom: 2,
                backgroundImage: `url("${soycarla}")`,
                backgroundSize: "cover",
                backgroundPosition: "end",
              }}
            />
            <Typography variant="h6" fontWeight="bold">
              Carla De La Hoz García
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Estudiante de psicología de décimo semestre en la Fundación
              Universitaria del Área Andina, con énfasis en psicología clínica.
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={2}>
              "Mi objetivo es aportar valor a la formación de futuros
              psicólogos, diseñando herramientas innovadoras que faciliten su
              aprendizaje y desarrollo de habilidades".
            </Typography>
          </Paper>
        </Grid>

        {/* Persona 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              padding: 3,
              height:"500px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "background.paper",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              sx={{
                width: 240,
                height: 240,
                borderRadius: "50%",
                overflow: "hidden",
                marginBottom: 2,
                backgroundImage: `url("${soyJorge}")`,
                backgroundSize: "cover",
                backgroundPosition: "end",
              }}
            />
            <Typography variant="h6" fontWeight="bold">
              Jorge Luis Gordon Lara
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Estudiante de psicología, décimo semestre, en la Fundación
              Universitaria del Área Andina
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={2}>
              "Mi objetivo es contribuir con la práctica de la psicología con
              ética, respeto y empatía"
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Agradecimientos />
    </Container>
  );
};

export default AboutUs;
