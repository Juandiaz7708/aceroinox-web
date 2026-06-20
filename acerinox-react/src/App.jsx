import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Categorias from "./components/Categorias";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Slider />
        <Categorias />
      </div>
    </BrowserRouter>
  );
}

export default App;