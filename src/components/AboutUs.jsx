import React from "react";
import { Container, Grid, Paper, Typography, Box } from "@mui/material";
import soycarla from "../image/soycarla.jpeg";

const AboutUs = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Sobre Nosotros
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Persona 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              padding: 3,
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
                // backgroundImage: `url("${soycarla}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Typography variant="h6" fontWeight="bold">
              Carla De La Hoz García
            </Typography>
            {/* <Typography variant="body2" color="textSecondary">
              Psicóloga clínica con más de 10 años de experiencia en la
              intervención en crisis y formación de nuevos profesionales.
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={2}>
              "Mi pasión es ayudar a las personas en sus momentos más difíciles,
              brindando apoyo emocional y soluciones efectivas."
            </Typography> */}
          </Paper>
        </Grid>

        {/* Persona 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              padding: 3,
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
                backgroundImage: 'url("https://via.placeholder.com/120")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Typography variant="h6" fontWeight="bold">
              Jorge
            </Typography>
            {/* <Typography variant="body2" color="textSecondary">
              Psicoterapeuta especializado en técnicas de intervención en crisis
              y resolución de conflictos. Comprometido con la salud mental.
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={2}>
              "Creo que la clave para una intervención exitosa es la empatía y
              la conexión genuina con la persona que atraviesa la crisis."
            </Typography> */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
