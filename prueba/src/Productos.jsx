  import React from 'react';
  import "./Productos.css"

  const products = [
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

  const Productos = () => {
    return (
      <>
      <div>
        <nav>
        <h1 className='productos'>Productos</h1>
        </nav>
        {products.map((product, index) => (
          <div key={index} className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <button className='boton2' onClick={() => handleAddToCart(product)}>Comprar</button>
        </div>
        ))}
      </div>
      </>
    );
  };

 export default Productos;
