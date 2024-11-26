import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import entrenamientoImg from "../image/pexels-polina-zimmerman-3747462.jpg";

export default function Enetrenamiento() {
  return (
    <div className="presentacion">
      <Container sx={{ display: "flex", flexDirection: "column", padding: 4 }}>
        <Typography
          variant="h5"
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
          id="3"
        >
          ¿Porqué es importante el entrenamiento?
        </Typography>
        <Grid2 container spacing={4} alignItems="center">
          {/* Texto */}
          <Grid2 item xs={12} md={6}>
            <div className="textContainer">
              <Box>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    textAlign: "justify",
                    marginTop: "45px",
                  }}
                >
                  La preparación y el conocimiento son fundamentales para
                  intervenir de manera efectiva en momentos de crisis." Esta
                  afirmación del psicólogo David G. Myers (2014) resalta la
                  importancia de que el psicólogo en formación cuente con una
                  sólida base de habilidades, conocimientos de técnicas y
                  estrategias, así como actitudes adecuadas para que su
                  intervención sea eficaz. Tener habilidades interpersonales,
                  como la empatía y la escucha activa, permite establecer una
                  conexión genuina con quienes están en crisis. Además, el
                  dominio de técnicas específicas, como la regulación emocional
                  y el manejo del estrés, proporciona herramientas prácticas
                  para abordar situaciones difíciles. Las actitudes, como la
                  paciencia y la apertura, son sumamente importantes al momento
                  de crear un ambiente seguro y de confianza. <br />
                  <br />
                  Por ejemplo, imagine que en su sitio de práctica recibe a una
                  joven que acaba de perder a su madre. Ella se siente abrumada
                  por la tristeza y la confusión, sin saber cómo manejar su
                  dolor. Si usted se encuentra preparado y cuenta con las
                  herramientas para realizar una adecuada intervención, podrá
                  acercarse con sensibilidad, creando un espacio seguro donde
                  ella puede expresar sus emociones. Validar su dolor y ofrecer
                  apoyo, ayudándola a entender que sus sentimientos son normales
                  y que no está sola. Además, le sugiere recursos de apoyo, como
                  grupos de duelo o terapia, lo que puede ser crucial para su
                  proceso de sanación. Esta capacidad de respuesta no solo ayuda
                  a la joven a sentirse comprendida y apoyada, sino que también
                  refuerza su confianza en su habilidad para manejar situaciones
                  emocionales difíciles.
                </Typography>
              </Box>
            </div>
          </Grid2>

          {/* Imagen */}
          <Grid2 item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                alt="Imagen Psicología"
                src={entrenamientoImg}
                style={{
                  width: "30%",
                  height: "auto",
                  borderRadius: 8,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  margin: "0 auto",
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}
