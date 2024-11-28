import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import imgAntecedentes1 from "../image/pexels-shvets-production-7176319.jpg";
import imgAntecedentes2 from "../image/pexels-david-garrison-1128051-2128817.jpg";

export default function Antecedentes() {
  return (
    <div style={{ marginTop: "250px" }}>
      <Box
        id="1"
        sx={{
          background: "linear-gradient(to bottom, #ffffff, #f2f2f2",
          padding: "150px 0",
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
              textTransform: "uppercase",
              letterSpacing: "2px",
              textAlign: "center",
              color: "#6ede00",
            }}
          >
            Antecedentes
          </Typography>
          <Grid container spacing={4}>
            {/* Primera columna: texto arriba, imagen abajo */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.8,
                    textAlign: "justify",
                    marginBottom: "100px",
                    marginTop: "50px",
                  }}
                >
                  La intervención temprana en crisis psicológicas ha sido objeto
                  de un intenso debate en la comunidad científica, donde
                  persiste una falta de consenso teórico y empírico sobre cuál
                  es la estrategia más efectiva y segura para restablecer el
                  bienestar emocional de las personas afectadas por situaciones
                  traumáticas. A pesar de esta incertidumbre, los Primeros
                  Auxilios Psicológicos (PAP) han sido promovidos por diversas
                  organizaciones internacionales como una herramienta
                  fundamental para abordar crisis. Los PAP se definen como una
                  técnica de apoyo humanitario destinada a personas en crisis,
                  con el objetivo de recuperar el equilibrio emocional y
                  prevenir el desarrollo de secuelas psicológicas. Los estudios
                  de Hobfoll y colaboradores (2007) identificaron cinco
                  elementos clave para la intervención inmediata: calma,
                  seguridad, autoeficacia, conexión y esperanza, que son
                  esenciales para guiar la aplicación de los PAP en contextos de
                  crisis (Hobfoll , 2007).
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "400px"
                }}
              >
                <img
                  src={imgAntecedentes1} // Cambia esta URL
                  alt="Ilustración 1"
                  style={{
                    maxWidth: "100%",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Box>
            </Grid>

            {/* Segunda columna: imagen arriba, texto abajo */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  marginBottom: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width:"400px"
                }}
              >
                <img
                  src={imgAntecedentes2} // Cambia esta URL
                  alt="Ilustración 2"
                  style={{
                    maxWidth: "100%",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    marginBottom: "60px",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.8, textAlign: "justify" }}
                >
                  Una intervención efectiva es crucial para el bienestar de las
                  personas, especialmente en situaciones que pueden amenazar su
                  salud mental y su vida. Los Primeros Auxilios Psicológicos
                  (PAP) se han consolidado como una herramienta esencial en este
                  contexto, promoviendo la recuperación emocional y la
                  prevención de secuelas psicológicas. Estas intervenciones
                  están diseñadas para ofrecer apoyo inmediato a quienes
                  enfrentan crisis, como desastres naturales, accidentes o
                  situaciones de violencia, y su objetivo es restaurar el
                  equilibrio emocional y prevenir el desarrollo de trastornos
                  más graves. Según Hobfoll (2007), los PAP se fundamentan en
                  cinco elementos clave: calma, seguridad, autoeficacia,
                  conexión y esperanza, que son vitales para guiar a los
                  profesionales en la atención de personas en crisis. La
                  importancia de los PAP radica no solo en su capacidad para
                  mitigar el estrés y la angustia, sino también en su potencial
                  para prevenir situaciones que puedan poner en peligro la vida
                  de las personas. La Organización Mundial de la Salud (2012)
                  destaca que estas intervenciones deben ser prácticas y no
                  invasivas, enfocándose en las necesidades inmediatas de los
                  afectados. Escuchar sin forzar a hablar sobre el trauma,
                  reconfortar y ayudar a la calma mediante técnicas de
                  relajación son componentes esenciales de esta técnica. Estar
                  preparados para aplicar los PAP de manera efectiva es
                  fundamental, ya que permite actuar con confianza y competencia
                  en momentos críticos. La creación de una guía de intervención
                  en crisis se presenta como una necesidad imperante,
                  proporcionando a los profesionales en formación las
                  herramientas necesarias para implementar los PAP de forma
                  ética y efectiva, contribuyendo así al bienestar emocional de
                  las personas y a la prevención de consecuencias más graves en
                  situaciones de vulnerabilidad.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
