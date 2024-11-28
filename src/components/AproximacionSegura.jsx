import React, { useState } from 'react';
import { Container, Accordion, AccordionSummary, AccordionDetails, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check'; // Ícono que se usará para cada ítem de la lista

const AproximacionSegura = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ p: 3 }}>
      <Typography  variant="h5"
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
          textAlign="center">
        Aproximación Segura
      </Typography>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6">1. Solicita permiso explícito para intervenir</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Antes de acercarte o sentarte con la persona, asegúrate de que esté cómodo. Esto ayuda a generar confianza y evita aumentar su estrés.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">Ejemplos de frases:</Typography>
            <List>
              <ListItem>
                <CheckIcon sx={{ color: 'success.main', mr: 1 }} />
                <ListItemText primary="“¿Puedo acercarme para ayudarte?”" />
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ color: 'success.main', mr: 1 }} />
                <ListItemText primary="“¿Te parece bien si me siento contigo mientras hablamos?”" />
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ color: 'success.main', mr: 1 }} />
                <ListItemText primary="“Estoy aquí para apoyarte.”" />
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h6">2. Respeta las respuestas de la persona</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Si la persona pide tiempo, respétalo, pero permanece cerca en caso de que necesites ayuda más adelante. Mantén un lenguaje corporal neutral y no te muestres apresurado o impaciente.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6">3. Aclarar la importancia de intervenir si es necesario</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">Ejemplo de frases:</Typography>
          <Box sx={{ mt: 2 }}>
            <List>
              <ListItem>
                <CheckIcon sx={{ color: 'success.main', mr: 1 }} />
                <ListItemText primary="“Sé que necesitas tiempo, pero estar aquí ahora podría ayudarte a sentirte mejor más rápido.”" />
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ color: 'success.main', mr: 1 }} />
                <ListItemText primary="“Puedo quedarme cerca para cuando necesites algo, pero también puedo buscar más ayuda si es necesario.”" />
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography variant="h6">4. Adapta tu ritmo al de la persona</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Dale tiempo para procesar lo ocurrido, pero asegúrate de mantener contacto visual y escuchar activamente. Ofrece ayuda progresivamente según la necesidad de la persona.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">Ejemplo de frases:</Typography>
            <List>
              <ListItem>
                <CheckIcon sx={{ color: 'success.main', mr: 1 }} />
                <ListItemText primary="“Si no quieres hablar, podemos simplemente quedarnos aquí un momento.”" />
              </ListItem>
              <ListItem>
                <CheckIcon sx={{ color: 'success.main', mr: 1 }} />
                <ListItemText primary="“Cuando te sientas lista/o, dime cómo puedo ayudarte.”" />
              </ListItem>
            </List>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default AproximacionSegura;
