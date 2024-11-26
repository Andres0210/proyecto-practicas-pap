import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export default function Contenido() {
  const content = [
    "Antecedentes",
    "Conceptos básicos",
    "Etapa de preparación",
    "Preparación: Entrenamiento",
    "Preparación: Habilidades comunicativas",
    "Preparación: Regulación de emociones",
    "Preparación: Evaluación de la situación",
    "Preparación: Aproximación segura",
    "Preparación: Priorización de necesidades",
  ];

  const description = [
    "Antecedentes sobre los Primeros Auxilios Psicológicos (PAP): su importancia en crisis y elementos clave para el apoyo emocional.",
    "Conceptos básicos",
    "Autoevaluación",
    "Preparación: Entrenamiento",
    "Preparación: Habilidades comunicativas",
    "Preparación: Regulación de emociones",
    "Preparación: Evaluación de la situación",
    "Preparación: Aproximación segura",
    "Preparación: Priorización de necesidades",
  ];

  return (
    <Box class="contenidoBox">
      <Divider
        sx={{
          marginBottom: "50px",
          marginLeft: "120px",
          marginRight: "120px",
          background: "linear-gradient(to bottom, #f0f0f0, #ffffff)",
        }}
      ></Divider>
      <Container>
        <Typography
          variant="h3"
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
          Contenido
        </Typography>

        <Box sx={{ mt: 4 }}>
          {/* Secciones */}
          {content.map((item, index) => (
            <Card
              key={index}
              sx={{
                mb: 3,
                boxShadow: 4,
                backgroundColor: "background.paper",
                "&:hover": {
                  transform: "scale(1.02)",
                  transition: "transform 0.3s",
                },
              }}
            >
              <CardContent>
                <Typography
                  component="a"
                  href={`#${index}`}
                  variant="h6"
                  gutterBottom
                  className="temasContenido"
                  sx={{ color: "#6ede00;" }}
                >
                  {item}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      {/* <CheckCircleIcon color="success" /> */}
                    </ListItemIcon>
                    <ListItemText primary={description[index]} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
