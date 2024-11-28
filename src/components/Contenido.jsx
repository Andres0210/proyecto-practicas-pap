import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";

const content = [
  { id: 1, text: "Antecedentes" },
  { id: 2, text: "Conceptos básicos" },
  { id: 3, text: "Etapa de preparación del profesional" },
  { id: 4, text: "Entrenamiento - ¿Por qué es importante el entrenamiento para brindar PAP?" },
  { id: 5, text: "Habilidades comunicativas en la intervención en crisis" },
  { id: 6, text: "Actitudes del Interventor para Brindar Primeros Auxilios Psicológicos" },
  { id: 7, text: "Regulación de emociones: Técnica Mindfulness" },
  { id: 8, text: "Regulación de emociones: Técnica de Relajación Muscular Progresiva" },
  { id: 9, text: "Regulación de emociones: Identificación y Expresión Emocional" },
  { id: 10, text: "Evaluación de la situación" },
  { id: 11, text: "Aproximación segura" },
  { id: 12, text: "Manejo del lenguaje" },
  { id: 13, text: "Priorización de necesidades" },
  { id: 14, text: "Que hacer y Que no hacer" },
];

export default function Contenido() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "#6ede00", // Color personalizado para el título
            fontWeight: "bold",
            textTransform: "uppercase",
            mb: 4,
          }}
        >
          Contenido
        </Typography>

        <Divider
          sx={{
            border: "2px solid #6ede00", // Color de la línea de separación
            width: "60%",
            margin: "0 auto",
            mb: 10,
          }}
        ></Divider>

        <Grid container spacing={4}>
          {content.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <a href={`#${index + 1}`} style={{ textDecoration: 'none' }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 5,
                    background: "linear-gradient(135deg, #ffffff, #e0f7fa)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: 10,
                    },
                    cursor: "pointer", // Para indicar que es interactivo
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#6ede00", // Color de texto personalizado
                          fontWeight: "bold",
                        }}
                      >
                        {`${index + 1}. ${item.text}`} {/* Número de sección */}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
