import Antecedentes from "./components/Antecedentes";
import ConceptosBasicos from "./components/ConceptosBasicos";
import Contenido from "./components/Contenido";
import HabilidadesComunicativas from "./components/HabilidadesComunicativas";
import Navbar from "./components/Navbar";
import Portada from "./components/Portada";
import Presentation from "./components/Presentation";
import ReviewForm from "./components/ReviewForm";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import EtapaDePreparacion from "./components/EtapaDePreparacion";
import Enetrenamiento from "./components/Entrenamiento";
import Recursos from "./components/Recursos";
import { Route, Routes } from "react-router-dom";
import AllBody from "./components/AllBody";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div style={{ background: "linear-gradient(to bottom, #ffffff, #f2f2f2)" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllBody />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
