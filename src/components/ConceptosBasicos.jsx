import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import { conceptos, conceptosCrisis } from "../utils/conceptos";

export default function ConceptosBasicos() {
  return (
    <Container id="2" style={{ marginTop: "150px" }}>
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
        Conceptos básicos<br></br>
        <br></br>
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        component="a"
        sx={{
          position: "relative",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        primeros auxilios psicológicos
      </Typography>
      <Grid2
        container
        spacing={3}
        style={{ padding: "20px", marginTop: "60px", marginBottom:"80px" }}
      >
        {conceptos.map((concepto, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: 620,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={concepto.imagen} // Imagen del concepto
                alt={concepto.titulo}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {concepto.titulo} {/* Nombre del concepto */}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "justify", marginTop: "10px" }}
                  dangerouslySetInnerHTML={{ __html: concepto.definicion }}
                />
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
      <Typography
        variant="h6"
        gutterBottom
        component="a"
        sx={{
          position: "relative",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          mb: 10,
        }}
      >
        Crisis
      </Typography>
      <Grid2
        container
        spacing={3}
        style={{ padding: "20px", marginTop: "60px" }}
      >
        {conceptosCrisis.map((concepto, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: 500,
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={concepto.imagen} // Imagen del concepto
                alt={concepto.titulo}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {concepto.titulo} {/* Nombre del concepto */}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "justify", marginTop: "10px" }}
                  dangerouslySetInnerHTML={{ __html: concepto.definicion }}
                />
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
      <Typography
        variant="h6"
        gutterBottom
        component="a"
        sx={{
          position: "relative",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      ></Typography>
    </Container>
  );
}
