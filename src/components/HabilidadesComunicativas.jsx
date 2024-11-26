import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import escuchaActiva from "../image/Escucha-activa.jpg";

const HabilidadesComunicativas = () => {
  return (
    <Box>
      <Container style={{ marginTop: "50px" }}>
        {/* Título principal */}
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
          id="4"
        >
          ¿Cuáles son las habilidades comunicativas necesarias para llevar a
          cabo una intervención segura y respetuosa en situaciones de crisis?
        </Typography>

        {/* Sección de escucha activa */}
        <Card
          sx={{
            marginBottom: "20px",
            background: "#ffffff",
            boxShadow: 3,
            marginTop: "45px",
          }}
        >
          <CardContent>
            <Grid container spacing={4}>
              {/* Columna de texto */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2c3e50" }}
                >
                  Escucha activa
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ marginTop: "10px", lineHeight: 1.8 }}
                >
                  La escucha activa es la capacidad de prestar atención plena al
                  discurso del afectado, sin interrumpir y mostrando interés
                  genuino. En PAP, esto implica captar tanto el contenido verbal
                  como las emociones detrás de las palabras, validando su
                  experiencia y creando un espacio seguro para la expresión.
                </Typography>
              </Grid>

              {/* Espacio para la imagen */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: "200px", // Altura del Box
                    width: "100%", // Asegura que el Box ocupe todo el ancho disponible
                    background: "#ecf0f1", // Color de fondo
                    borderRadius: "10px", // Esquinas redondeadas
                    display: "flex", // Para alinear la imagen
                    justifyContent: "center", // Centrado horizontal
                    alignItems: "center", // Centrado vertical
                    overflow: "hidden", // Para evitar que la imagen se desborde
                  }}
                >
                  <img
                    alt="Escucha Activa"
                    src={escuchaActiva}
                    style={{
                      width: "100%", // Hace que la imagen ocupe todo el ancho disponible
                      height: "100%", // Hace que la imagen ocupe toda la altura disponible
                       // Mantiene la proporción de la imagen y cubre el espacio sin distorsionar
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Lista de aspectos de la escucha activa */}
        <Card
          sx={{ marginBottom: "20px", background: "#ffffff", boxShadow: 3 }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#2c3e50" }}
            >
              Aspectos de la escucha activa que favorecen nuestras
              interacciones:
            </Typography>
            <ul
              color="text.secondary"
              style={{ marginTop: "10px", paddingLeft: "20px" }}
            >
              <li>Mejoran la comunicación</li>
              <li>Impulsan la colaboración</li>
              <li>
                Permite una comprensión real de los pensamientos y sentimientos
                de la otra persona
              </li>
              <li>Crea una conexión a un nivel más profundo</li>
              <li>Demostración de empatía</li>
              <li>Facilitan la resolución de conflictos</li>
              <li>Generan un ambiente de confianza</li>
            </ul>
          </CardContent>
        </Card>

        {/* Sección de empatía */}
        <Card
          sx={{ marginBottom: "20px", background: "#ffffff", boxShadow: 3 }}
        >
          <CardContent>
            <Grid container spacing={4}>
              {/* Espacio para la imagen */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: "200px",
                    background: "#ecf0f1",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ color: "#95a5a6" }}>
                    [Espacio para Imagen]
                  </Typography>
                </Box>
              </Grid>

              {/* Columna de texto */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2c3e50" }}
                >
                  Empatía
                </Typography>
                <Typography
                  sx={{ marginTop: "10px", color: "#7f8c8d", lineHeight: 1.8 }}
                >
                  Es la habilidad de comprender y compartir las emociones de la
                  persona en crisis, sin juzgar. En PAP, es esencial para
                  transmitir calidez y aceptación, permitiendo que la persona se
                  sienta comprendida y apoyada emocionalmente.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Sección de función informativa */}
        <Card
          sx={{ marginBottom: "20px", background: "#ffffff", boxShadow: 3 }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#2c3e50" }}
            >
              Función informativa:
            </Typography>
            <ul
              style={{
                marginTop: "10px",
                paddingLeft: "20px",
                color: "#7f8c8d",
              }}
            >
              <li>Organizar el contenido verbal del discurso de la persona.</li>
              <li>
                Comprobar la precisión en la que hemos entendido lo dicho por la
                persona.
              </li>
              <li>Aclarar los mensajes vagos o confusos.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Otras secciones... */}
        <Card
          sx={{ marginBottom: "20px", background: "#ffffff", boxShadow: 3 }}
        >
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: "200px",
                    backgroundImage: "url('/ruta/a/tu-imagen2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2c3e50" }}
                >
                  Validación emocional
                </Typography>
                <Typography
                  sx={{ marginTop: "10px", color: "#7f8c8d", lineHeight: 1.8 }}
                >
                  Reconocer y aceptar las emociones de la persona como válidas,
                  sin minimizarlas o intentar solucionarlas de inmediato. En
                  PAP, ayuda a disminuir la sensación de aislamiento y
                  normalizar las reacciones emocionales intensas.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Sección: Parafraseo y retroalimentación */}
        <Card
          sx={{ marginBottom: "20px", background: "#ffffff", boxShadow: 3 }}
        >
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2c3e50" }}
                >
                  Parafraseo y retroalimentación
                </Typography>
                <Typography
                  sx={{ marginTop: "10px", color: "#7f8c8d", lineHeight: 1.8 }}
                >
                  Reformular las palabras de la persona para confirmar la
                  comprensión y demostrar atención. Esto refuerza la conexión y
                  asegura que el practicante esté alineado con las necesidades
                  del afectado.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: "200px",
                    backgroundImage: "url('/ruta/a/tu-imagen3.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Sección: Control del lenguaje no verbal */}
        <Card
          sx={{ marginBottom: "20px", background: "#ffffff", boxShadow: 3 }}
        >
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: "200px",
                    backgroundImage: "url('/ruta/a/tu-imagen4.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2c3e50" }}
                >
                  Control del lenguaje no verbal
                </Typography>
                <Typography
                  sx={{ marginTop: "10px", color: "#7f8c8d", lineHeight: 1.8 }}
                >
                  Uso adecuado de gestos, postura y expresiones faciales para
                  transmitir calma y apoyo. En PAP, una postura abierta y
                  contacto visual adecuado fortalecen el mensaje de seguridad y
                  cuidado.
                </Typography>
                <ul
                  style={{
                    marginTop: "10px",
                    paddingLeft: "20px",
                    color: "#7f8c8d",
                  }}
                >
                  <li>Uso adecuado de gestos</li>
                  <li>Postura que transmita receptividad</li>
                  <li>Expresiones faciales que reflejen empatía</li>
                </ul>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default HabilidadesComunicativas;
