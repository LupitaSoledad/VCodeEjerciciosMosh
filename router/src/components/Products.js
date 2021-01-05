import React from "react";
import imgComida from "../imagenes/Sandwitch.jpg";
import imgBebida from "../imagenes/bebidas.jpg";
import imgPostre from "../imagenes/Postres.jpg";

const Products = () => {
  return (
    <div className="title">
      <h2>Products </h2>
      <div className="Comidas">
        <img src={imgComida} className="Producto1" alt="Cinque Terre" />
        <h5 className="textP1">Comidas</h5>
      </div>
      <div className="Bebidas">
        <img src={imgBebida} className="Producto2" alt="Cinque Terre" />
        <h5 className="textP2">Bebidas</h5>
      </div>
      <div className="Postres">
        <img src={imgPostre} className="Producto3" alt="Cinque Terre" />
        <h5 className="textP3">Postres</h5>
      </div>
    </div>
  );
};

export default Products;
