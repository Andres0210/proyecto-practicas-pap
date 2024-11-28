import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import escuchaActiva from "../image/escuchaaaa.jpg";
import empatia from "../image/empatia.jpg";
import lenguaje from "../image/lenguaje corporal.jpg";

const HabilidadesComunicativas = () => {
  return (
    <Box id="5">
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
                <Typography sx={{ marginTop: "10px", lineHeight: 1.8 }}>
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
                    alt="Empatía"
                    src={empatia}
                    style={{
                      width: "100%", // Hace que la imagen ocupe todo el ancho disponible
                      height: "100%", // Hace que la imagen ocupe toda la altura disponible
                      // Mantiene la proporción de la imagen y cubre el espacio sin distorsionar
                    }}
                  />
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
                <Typography sx={{ marginTop: "10px", lineHeight: 1.8 }}>
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
            <Typography sx={{ marginTop: "10px", lineHeight: 1.8 }}>
              Se refiere a la capacidad de transmitir datos, hechos o
              conocimientos de manera clara y precisa. Es cuando usamos la
              comunicación para compartir información útil y relevante con los
              demás, asegurándonos de que el mensaje sea entendido
              correctamente.
            </Typography>
            <br />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#2c3e50" }}
            >
              Claridad y precisión:
            </Typography>
            <ul
              style={{
                marginTop: "10px",
                paddingLeft: "20px",
              }}
            >
              <li>
                Asegurarse de que la información proporcionada sea clara y
                precisa, evitando ambigüedades.
              </li>
              <li>
                Estructurar la información de manera lógica y coherente para
                facilitar la comprensión.
              </li>
              <li>
                Comprobar que el usuario ha entendido correctamente la
                información, utilizando preguntas y parafraseo.
              </li>
              <li>
                Utilizar un lenguaje adecuado al nivel de comprensión del
                usuario, evitando tecnicismos innecesarios.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Otras secciones... */}
        <Card
          sx={{ marginBottom: "20px", background: "#ffffff", boxShadow: 3 }}
        >
          <CardContent>
            <Grid container spacing={4}>
              {/* <Grid item xs={12} md={6}>
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
              </Grid> */}
              <Grid item xs={12} md={12}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2c3e50" }}
                >
                  Validación emocional
                </Typography>
                <Typography sx={{ marginTop: "10px", lineHeight: 1.8 }}>
                  Reconocer y aceptar las emociones de la persona como válidas,
                  sin minimizarlas o intentar solucionarlas de inmediato. En
                  PAP, ayuda a disminuir la sensación de aislamiento y
                  normalizar las reacciones emocionales intensas.
                </Typography>
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
                    alt="Empatía"
                    src={lenguaje}
                    style={{
                      width: "100%", // Hace que la imagen ocupe todo el ancho disponible
                      height: "100%", // Hace que la imagen ocupe toda la altura disponible
                      // Mantiene la proporción de la imagen y cubre el espacio sin distorsionar
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2c3e50" }}
                >
                  Control del lenguaje no verbal
                </Typography>
                <Typography sx={{ marginTop: "10px", lineHeight: 1.8 }}>
                  Se refiere a la capacidad de manejar y utilizar de manera
                  consciente las expresiones faciales, gestos, postura y otros
                  movimientos del cuerpo para comunicar de forma efectiva y
                  coherente con el mensaje verbal. Esto incluye asegurarse de
                  que el lenguaje corporal apoye y refuerce lo que se está
                  diciendo, evitando señales contradictorias.
                </Typography>
                <ul
                  style={{
                    marginTop: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <li>
                    Asentir con la cabeza: Mientras el usuario habla, asiente
                    ligeramente con la cabeza para indicar que estás siguiendo y
                    comprendiendo lo que dice.
                  </li>
                  <li>
                    Inclinación hacia adelante: Inclinarse ligeramente hacia
                    adelante mientras el usuario habla puede demostrar que estás
                    interesado y comprometido con la conversación.
                  </li>
                  <li>
                    Contacto visual: Mantén un contacto visual adecuado,
                    mostrando interés y atención en la conversación. Evita mirar
                    hacia otro lado o distraerte con otros elementos.
                  </li>
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
