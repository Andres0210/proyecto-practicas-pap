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
                  <strong>1. </strong>Entrenarse en habilidades y competencias
                  para brindar Primeros Auxilios Psicológicos (PAP) permite
                  intervenir de manera efectiva en situaciones de crisis,
                  ayudando a identificar y responder a las necesidades de las
                  personas afectadas. <br />
                  <strong>2.</strong> Una intervención temprana y adecuada puede
                  prevenir el agravamiento de la crisis, lo que a su vez reduce
                  la necesidad de tratamientos más intensivos en el futuro.
                  <br />
                  <strong>3.</strong> La capacitación mejora la calidad de la
                  atención brindada y fortalece la confianza del profesional en
                  su capacidad para manejar situaciones difíciles.
                  <br />
                  <strong>4.</strong> Estar preparado en PAP permite a los
                  profesionales adaptar su enfoque a diversos contextos y
                  necesidades, asegurando así una respuesta más personalizada y
                  efectiva.
                  <br />
                  <br />
                  Por ejemplo, Imagine la escena en su sitio de práctica: En la
                  institución donde usted se encuentra realizando sus prácticas
                  profesionales, ingresa una paciente devastada porque acaba de
                  perder a su madre. La paciente se siente abrumada por la
                  tristeza y la confusión, sin saber cómo manejar su dolor. Si
                  usted se encuentra preparado y cuenta con las herramientas
                  para realizar una adecuada intervención, podrá acercarse con
                  sensibilidad, crear un espacio seguro donde ella pueda
                  expresar sus emociones. Validar su dolor y ofrecer apoyo,
                  ayudándola a entender que sus sentimientos son normales y que
                  no está sola. Además, le sugiere recursos de apoyo, como
                  grupos de duelo o terapia, lo que puede ser crucial para su
                  proceso de sanación. Esta capacidad de respuesta no solo ayuda
                  a la persona atendida a sentirse comprendida y apoyada, sino
                  que también refuerza su confianza en su habilidad para manejar
                  situaciones de crisis.
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
