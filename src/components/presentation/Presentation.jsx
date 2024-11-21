import React from "react";
import "../presentation/estilosPresentation.css";
import imgPsico from "../image/pap image.webp";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Presentation() {
  return (
    <div className="presentacion">
      <Container sx={{ display: "flex", flexDirection: "column", padding: 4 }}>
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
            color: "#333",
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
                  sx={{ lineHeight: 1.8, textAlign: "justify", marginTop:"45px" }}
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
                  habilidades y conocimientos en la intervención. Esta guía no
                  es un manual, sino un recurso práctico diseñado para
                  fortalecer las competencias de los estudiantes, fomentando un
                  ambiente de confianza y respeto donde los pacientes se sientan
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
    </div>
  );
}
