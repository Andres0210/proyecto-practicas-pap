import React from "react";

import imgPsico from "../image/pap image.webp";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default function Presentation() {
  const objetivos = [
    {
      titulo: "Brindar Alivio Emocional Inmediato",
      cuerpo:
        "Escuchar y consolar a la persona para reducir su angustia y estabilizar su estado emocional rápidamente.",
    },
    {
      titulo: "Facilitar la Adaptación",
      cuerpo:
        "Ayudar a la persona a acostumbrarse a las nuevas circunstancias con consejos prácticos y apoyo, promoviendo su resiliencia.",
    },
    {
      titulo: "Fortalecer Recursos de Afrontamiento",
      cuerpo:
        "Potenciar estrategias de afrontamiento para enfrentar situaciones difíciles de manera efectiva",
    },
    {
      titulo: "Prevenir el Desarrollo de Psicopatologías",
      cuerpo:
        "Ofrecer ayuda psicológica temprana y recursos de apoyo para evitar trastornos mentales a largo plazo, asegurando su bienestar emocional.",
    },
  ];
  return (
    <div className="presentacion">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 4,
          marginTop: "150px",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Texto */}
          <Grid item xs={12} md={6}>
            <div className="textContainer">
              <Typography
                variant="h3"
                gutterBottom
                component="a"
                sx={{
                  position: "relative",
                  fontWeight: "bold",
                  color: "#6ede00",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  textAlign: "center",
                }}
              >
                Presentación
              </Typography>
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
                  En el marco del proyecto “Guía de Intervención en Crisis:
                  Herramienta para el Psicólogo en Formación”, desarrollado por
                  la Fundación Universitaria del Área Andina, se busca ofrecer
                  un recurso fundamental para los estudiantes de psicología que
                  se enfrentan a situaciones críticas de salud mental. Este
                  proyecto, supervisado por el docente Alberto Valencia Zableh y
                  con la colaboración de Yuly Carolina Santana Ramírez, tiene
                  como objetivo principal equipar a los futuros profesionales
                  con las herramientas necesarias para brindar un apoyo efectivo
                  en momentos de crisis. La guía se fundamenta en la necesidad
                  de abordar de manera eficiente los Primeros Auxilios
                  Psicológicos, realizando intervenciones éticas, respetuosas y
                  eficaces. Es esencial que los psicólogos en formación estén
                  preparados para enfrentar este tipo de situaciones, tanto en
                  sus prácticas como en cualquier otro contexto. La preparación
                  y el entrenamiento son clave para garantizar una respuesta
                  adecuada. Este documento no contiene protocolos estructurados;
                  se considera una herramienta o guía que proporciona a los
                  psicólogos en formación aspectos importantes para una
                  comunicación asertiva y un abordaje efectivo en momentos de
                  crisis. Se incorporan estrategias que ayudarán a mejorar sus
                  habilidades y conocimientos en la intervención. Esta guía es un recurso práctico diseñado para
                  fortalecer las competencias de los estudiantes, fomentando un
                  ambiente de confianza y respeto donde los usuarios se sientan
                  valorados y escuchados. Al ofrecer un apoyo efectivo en
                  momentos críticos, se espera contribuir al bienestar emocional
                  de quienes enfrentan situaciones de vulnerabilidad. Con la
                  implementación de esta guía, se busca enriquecer la formación
                  de los futuros psicólogos, promoviendo su desarrollo
                  profesional y asegurando que estén preparados para brindar
                  asistencia como primera respuesta ante emergencias
                  psicológicas.
                </Typography>
              </Box>
            </div>
          </Grid>

          {/* Imagen */}
          <Grid item xs={12} md={6}>
            <div className="imagenContainer">
              <img
                className="imgPsico"
                alt="Imagen Psicología"
                src={imgPsico}
                style={{
                  width: "100%",
                  borderRadius: 8,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>

      <Box
        className="objetives"
        sx={{
          padding: "50px 0",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            component="a"
            sx={{
              position: "relative",
              fontWeight: "bold",
              color: "#6ede00",
              textTransform: "uppercase",
              letterSpacing: "2px",
              textAlign: "center",
            }}
          >
            Objetivos
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {objetivos.map((objetivo, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  className="cardObj"
                  sx={{
                    marginTop: "60px",
                    borderRadius: "50px",
                    height: "400px",
                    boxShadow: 3,
                    background: "linear-gradient(to bottom, #E9E4F0, #f2f2f2)",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease",
                   
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#6ede00;", // Verde menta oscuro
                        textAlign: "center",
                        mb: 2,
                        fontWeight: "700",
                       
                      }}
                    >
                      {objetivo.titulo}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        lineHeight: 1.6,
                        fontSize: "16px",
                        color: "#333333",
                        fontWeight: "700",
                      }}
                    >
                      {objetivo.cuerpo}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
