import React from 'react';
import './App.css'; 

const home = [
  {
    name: "Auriculares Bluetooth",
    description: "Auriculares inalámbricos con sonido envolvente y micrófono integrado. Hasta 12 horas de batería.",
    price: 29.99
  },
  {
    name: "Smartwatch Deportivo",
    description: "Reloj inteligente con monitor de frecuencia cardíaca, seguimiento de actividad y GPS integrado.",
    price: 99.99
  },
  {
    name: "Cámara Digital 4K",
    description: "Cámara compacta con grabación en 4K, estabilización de imagen y lente intercambiable.",
    price: 399.99
  },
  {
    name: "Tableta Gráfica",
    description: "Tableta gráfica para artistas digitales con pantalla táctil de alta resolución y lápiz óptico sensible a la presión.",
    price: 149.99
  }
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Home - Lista de Productos</a></li>
      </ul>
    </nav>
  );
};

const ProductList = () => {
  return (
    <ul className="product-list">
      {home.map((product, index) => (
        <li key={index} className="product-item">
          <h2>{product.name}</h2>
          <p>Precio: ${product.price}</p>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 id="home"></h1>
      <ProductList />
    </div>
  );
};

export default Home;
