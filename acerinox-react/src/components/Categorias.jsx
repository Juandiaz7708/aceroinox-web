import "./Categorias.css";
import { Link } from "react-router-dom";

function Categorias() {
  const categorias = [
    {
      id: "decorativos",
      href: "/decorativo",
      imagen: "/img/decorativo/decorativo3.jpeg",
      titulo: "Decorativos",
      descripcion: "Trabajos modernos en acero inoxidable para embellecer tu hogar."
    },
    {
      id: "hospitalarios",
      href: "/hospitalarios",
      imagen: "/img/trabajo2.jpg",
      titulo: "Hospitalarios",
      descripcion: "Trabajos hospitalarios resistentes y de alta calidad."
    },
    {
      id: "escaleras",
      href: "/escaleras",
      imagen: "/img/escaleras/escalera1.jpeg",
      titulo: "Escaleras",
      descripcion: "Pasamanos y estructuras elegantes en acero inoxidable."
    },
    {
      id: "camas",
      href: "/camas",
      imagen: "/img/camas/camas1.jpeg",
      titulo: "Camas",
      descripcion: "Camas resistentes y de alta calidad en acero inoxidable."
    },
    {
      id: "comedores",
      href: "/comedores",
      imagen: "/img/comedores/comedores1.jpeg",
      titulo: "Comedores",
      descripcion: "Comedores resistentes y de alta calidad en acero inoxidable."
    },
    {
      id: "mesas",
      href: "/mesas",
      imagen: "/img/mesas/mesas1.jpeg",
      titulo: "Mesas",
      descripcion: "Mesas resistentes y de alta calidad en acero inoxidable."
    }
  ];

  return (
    <>
      <section id="categorias">
        <h2>Categorías de trabajos</h2>
      </section>

      <div className="contenedor-categorias">
        {categorias.map((cat) => (
          <Link
            key={cat.id}
            to={cat.href}
            className="card"
            id={cat.id}
          >
            <img src={cat.imagen} alt={cat.titulo} />
            <h3>{cat.titulo}</h3>
            <p>{cat.descripcion}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Categorias;