import React from "react";
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TecnicaDeRelajacion = () => {
  const steps = [
    {
      label: "Encuentra un lugar tranquilo",
      description:
        "Busca un espacio donde puedas tumbarte cómodamente, preferiblemente con luz tenue y sin ruidos.",
    },
    {
      label: "Cierra los ojos",
      description:
        "Esto te ayudará a concentrarte en tu cuerpo y en las sensaciones que experimentas.",
    },
    {
      label: "Comienza con las manos",
      description:
        "Tensa los músculos de una mano durante unos segundos, luego relájalos completamente. Siente la diferencia entre la tensión y la relajación.",
    },
    {
      label: "Continúa con el resto del cuerpo",
      description: [
        "Brazos: Tensa y relaja.",
        "Hombros: Levanta los hombros hacia las orejas y luego déjalos caer.",
        "Cuello: Gira suavemente y relaja.",
        "Cara: Frunce el ceño y luego relaja todos los músculos faciales.",
        "Tórax: Inhala profundamente, sostén la respiración y exhala lentamente.",
        "Abdomen: Contrae y relaja.",
        "Piernas: Levanta ligeramente las piernas, tensa los músculos y luego déjalas caer.",
      ],
    },
    {
      label: "Repite en orden inverso",
      description:
        "Ahora, comienza desde los pies y sube hasta las manos, aplicando la misma técnica de tensión y relajación.",
    },
    {
      label: "Visualiza la calma",
      description:
        "Después de completar el recorrido, cierra los ojos y concéntrate en una imagen que te transmita paz y tranquilidad, como un paisaje sereno o un momento feliz.",
    },
    {
      label: "Cuenta hacia atrás",
      description:
        "Para finalizar, cuenta del 3 al 1 y, al llegar a 1, abre los ojos lentamente.",
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Container>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
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
            id="6"
          >
            Técnica de Relajación Muscular Progresiva
          </Typography>
          <Typography variant="body1" paragraph>
            Este método ayuda a distinguir entre la tensión y la relajación en
            tu cuerpo, promoviendo una sensación de calma profunda.
          </Typography>
        </Paper>
        <List>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <CheckCircleIcon  sx={{ mr: 2, mt: 0.5, color:"#6ede00" }} />
                <ListItemText
                  primary={step.label}
                  secondary={
                    Array.isArray(step.description) ? (
                      <List sx={{ pl: 4 }}>
                        {step.description.map((substep, subIndex) => (
                          <ListItem key={subIndex} sx={{ py: 0 }}>
                            <ListItemText primary={substep} />
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                      step.description
                    )
                  }
                />
              </ListItem>
              {index !== steps.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default TecnicaDeRelajacion;
