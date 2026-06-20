import { useState, useEffect } from "react";
import "./Slider.css";

function Slider() {
  const [slideActivo, setSlideActivo] = useState(0);

  const imagenes = [
    { src: "/img/logoacerinox.jpg", alt: "Aceroinox logo" },
    { src: "/img/trabajo1.jpg", alt: "Trabajo en acero 1" },
    { src: "/img/trabajo3.jpg", alt: "Trabajo en acero 3" },
    { src: "/img/trabajo4.jpg", alt: "Trabajo en acero 4" },
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideActivo((anterior) => (anterior + 1) % imagenes.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="slider">
      {imagenes.map((imagen, index) => (
        <div
          key={index}
          className={`slide ${index === slideActivo ? "active" : ""}`}
        >
          <img src={imagen.src} alt={imagen.alt} />
        </div>
      ))}
    </section>
  );
}

export default Slider;