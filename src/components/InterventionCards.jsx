import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Container,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const cardsData = [
  {
    id: 1,
    whatToDo:
      "Escuchar cómo la persona en crisis visualiza la situación y se comunica contigo. Empatiza con sus sentimientos y necesidades, invitándole a hablar y reflexionar sobre lo sucedido y sus reacciones.",
    whatNotToDo:
      "Forzar a la persona a contar su historia si no está lista para hacerlo.",
  },
  {
    id: 2,
    whatToDo:
      "Mostrar empatía y sintonización con los sentimientos de la persona. Ayudarle a expresar sus emociones y a sentirse comprendida, estableciendo un espacio seguro para compartir sus experiencias.",
    whatNotToDo:
      "Subestimar los sentimientos o la situación de la persona afectada.",
  },
  {
    id: 3,
    whatToDo:
      "Acompañar a la persona en crisis a identificar un rango de soluciones alternativas, incluyendo los obstáculos para su ejecución. Facilitando la generación de soluciones que sean viables y adecuadas para su situación.",
    whatNotToDo:
      "Imponer las propias soluciones sin considerar las preferencias y necesidades de la persona.",
  },
  {
    id: 4,
    whatToDo:
      "Actuar como un punto de unión con los recursos de ayuda, proporcionando información sobre los recursos necesarios y brindando orientación sobre qué hacer y cómo hacerlo. Ayudar a la persona a desarrollar su red de apoyo informal.",
    whatNotToDo:
      "Pasar por alto la importancia de conectar a la persona con su red de apoyo social.",
  },
  {
    id: 5,
    whatToDo:
      "Proporcionar psicoeducación sobre cómo manejar el estrés y las reacciones emocionales. Ayudar a la persona a entender sus reacciones y a desarrollar estrategias para enfrentarlas de manera efectiva.",
    whatNotToDo:
      "Omitir información y estrategias para manejar el estrés y las reacciones emocionales.",
  },
];

const InterventionCards = () => {
  return (
    <Container id="14" sx={{mt:16}}>
      <div style={{ marginBottom: "40px" }}>
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
          textAlign="center"
        >
          Durante la intervención en crisis:
        </Typography>
      </div>
      <Grid container spacing={3} justifyContent="center">
        {cardsData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 2,
                boxShadow: 2,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: 2 }}
              >
                {card.id}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <CheckCircleIcon color="success" sx={{ marginRight: 1 }} />
                <Typography variant="h6">Qué Hacer</Typography>
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {card.whatToDo}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <CancelIcon color="error" sx={{ marginRight: 1 }} />
                <Typography variant="h6">Qué No Hacer</Typography>
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {card.whatNotToDo}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InterventionCards;
