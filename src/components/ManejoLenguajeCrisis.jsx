import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";

// Estilo personalizado para los íconos
const StyledCard = styled(Card)({
  marginBottom: "20px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "10px",
});

const ManejoLenguajeCrisis = () => {
  return (
    <Container id="12" sx={{ p: 3 }}>
      <div style={{marginBottom:"35px"}}>
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
        Manejo del Lenguaje Teniendo en Cuenta el Tipo de Crisis
      </Typography>
      </div>
      <Grid container spacing={3}>
        {/* Tarjeta 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                1. Ataque de Pánico
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="body1" paragraph>
                Usa frases cortas y claras: "Respira conmigo, vamos despacio".
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Evita apresurarte o minimizar su experiencia.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        {/* Tarjeta 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                2. Pérdida
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="body1" paragraph>
                Evita clichés: Frases como: "Todo pasa por una razón", "Está en
                un lugar mejor" o “Debes ser fuerte” pueden no ser
                reconfortantes.
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Valida las emociones: “Lamento mucho tu pérdida” "Es normal
                sentir dolor, estoy aquí para ti”.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        {/* Tarjeta 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                3. Enojo o Ira
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="body1" paragraph>
                Escucha activa y validación: Permite que la persona exprese sus
                sentimientos sin interrupciones. Valida sus emociones diciendo:
                "Entiendo que estés enojado, es una reacción normal ante esta
                situación".
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Sé firme pero empático: "Te entiendo, vamos a encontrar una
                solución". Evita confrontaciones o acusaciones: En su lugar,
                enfócate en buscar soluciones prácticas: "¿Qué podemos hacer
                ahora para mejorar esta situación?".
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        {/* Tarjeta 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                4. Riesgo de Suicidio
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Typography variant="body1" paragraph>
                Habla directamente pero con sensibilidad: "¿Estás pensando en
                hacerte daño? Estoy aquí para ayudarte". Preguntar no aumenta el
                riesgo y puede proporcionar alivio al permitir que la persona
                hable sobre sus sentimientos.
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Evita mostrar miedo o sorpresa: Estas reacciones pueden aumentar
                la ansiedad de la persona y hacerla sentir más aislada o
                incomprendida.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ManejoLenguajeCrisis;
