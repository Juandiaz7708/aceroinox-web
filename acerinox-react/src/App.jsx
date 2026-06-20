import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Servicios from "./components/Servicios";
import Categorias from "./components/Categorias";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Slider />
        <Servicios />
        <Categorias />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;