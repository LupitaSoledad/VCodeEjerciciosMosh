import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Rectangulo from "./figuras/rectangulo";
import { render } from "@testing-library/react";

function App() {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);
  const [diamMay, setDiaMay] = useState(0);
  const [diamMen, setDiaMen] = useState(0);
  const [mostrar, setMostrar] = useState();
  const [selectFigura, setSelectFigura] = useState("-1");
  const [resultadoA, setResultArea] = useState(0);
  const [resultadoP, setResultPeri] = useState(0);

  const figuras = [
    { value: "-1", label: "Selecciona uno... " },
    { value: "cuadrado", label: "Cuadrado" },
    { value: "rectangulo", label: "Rectangulo" },
    { value: "circulo", label: "Circulo" },
    { value: "triangulo", label: "Triangulo" },
    { value: "rombo", label: "Rombo" },
    { value: "romboide", label: "Romboide" },
  ];

  const SelectFigure = () => (
    <select value={selectFigura} onChange={handleSelect}>
      {figuras.map((figura) => (
        <option value={figura.value}>{figura.label} </option>
      ))}
    </select>
  );

  function handleSelect(e) {
    setSelectFigura(e.target.value);
  }

  function Resultado(){
    switch (selectFigura) {
      case "romboide":
        setResultArea(diamMay * altura);
        setResultPeri((2*diamMay)+(2*diamMen));
        break;
      case "rombo":
        setResultArea(diamMay * diamMen/2);
        setResultPeri(base*4);
        break;
      case "triangulo":
        setResultArea(base * altura/2);
        setResultPeri(base*3);
        break;
      case "circulo":
        setResultArea(Math.PI * Math.pow(base, 2));
        setResultPeri((Math.PI *2) * base);
        break;
      case "rectangulo":
        setResultArea(base * altura);
        setResultPeri(2*base+2*altura);
        break;
      case "cuadrado":
        setResultArea( Math.pow(base, 2));
        setResultPeri(4*base);
      }
  }

  return (
    <div className="App">
      <div className="alert alert-info" role="alert">
        <h1> Área y Perimetro</h1>
      </div>
      <div className="row justify-content-center mt-4">
    <div> <h5>Figura   <SelectFigure /></h5></div> 
      </div>
     
      {selectFigura === "-1" && <div>Selecciona una opción</div>}



      {selectFigura === "romboide" && (
        <div className="row justify-content-center mt-4">
       
            <span className="input-group-text ">Alrura</span>
             <input    
            type="number"
            value={altura}
            onChange={(e) => {
              setBase(e.target.value); // "5" 5
            }}
            className="form-control col-md-1 mb"/>

            <span className="input-group-text">Lado d</span>
            <input
            type="number"
            value={diamMen}
            onChange={(e) => {
              setDiaMen(e.target.value); // "5" 5
            }}
            className="form-control col-md-1 mb"
          />

          <span className="input-group-text">Lado D</span>
            <input
            type="number"
            value={diamMay}
            onChange={(e) => {
              setDiaMay(e.target.value); // "5" 5
            }}
            className="form-control col-md-1 mb"
          />
     <button type="button" class="btn btn-info" onClick={Resultado}>
            Calcular
          </button>
           
          <div>
         <h5>Resultados:</h5>
          <h6>Área: {resultadoA}</h6>
          <h6>Perimetro: {resultadoP}</h6>
         </div>

        </div>
      )}

      {selectFigura === "rombo" && (
        <div className="row justify-content-center mt-4">
       
            <span className="input-group-text ">Lado</span>
             <input    
            type="number"
            value={base}
            onChange={(e) => {
              setBase(e.target.value); // "5" 5
            }}
            className="form-control col-md-1 mb"/>

            <span className="input-group-text">d</span>
            <input
            type="number"
            value={diamMen}
            onChange={(e) => {
              setDiaMen(e.target.value); // "5" 5
            }}
            className="form-control col-md-1 mb"
          />

          <span className="input-group-text">D</span>
            <input
            type="number"
            value={diamMay}
            onChange={(e) => {
              setDiaMay(e.target.value); // "5" 5
            }}
            className="form-control col-md-1 mb"
          />
          <button type="button" class="btn btn-info" onClick={Resultado}>
            Calcular
          </button>
           
          <div>
         <h5>Resultados:</h5>
          <h6>Área: {resultadoA}</h6>
          <h6>Perimetro: {resultadoP}</h6>
         </div>

        </div>
      )}

      {selectFigura === "triangulo" && (
        <div className="row justify-content-center mt-4">
       
            <span className="input-group-text ">Base</span>
   
          <input
        
            type="number"
            value={base}
            onChange={(e) => {
              setBase(e.target.value); // "5" 5
            }}
            className="form-control col-md-1 mb"
          />
            <span className="input-group-text">Altura</span>
          
            <input
            type="number"
            value={altura}
            onChange={(e) => {
              setAltura(e.target.value); // "5" 5
            }}
            className="form-control col-md-1 mb"
          />

          <button type="button" class="btn btn-info" onClick={Resultado}>
            Calcular
          </button>
           
          <div>
         <h5>Resultados:</h5>
          <h6>Área: {resultadoA}</h6>
          <h6>Perimetro: {resultadoP}</h6>
         </div>

        </div>
      )}

      {selectFigura === "cuadrado" && (
        <div className="row justify-content-center mt-4">
            <span className="input-group-text">Lado</span>
         
          <input
            type="number"
            value={base}
            onChange={(e) => {
              setBase(e.target.value); // "5" 5
            }}
            className="form-control col-md-1 mb"
          />

          <button type="button" class="btn btn-info" onClick={Resultado}>
            Calcular
          </button>
           
          <div>
         <h5>Resultados:</h5>
          <h6>Área: {resultadoA}</h6>
          <h6>Perimetro: {resultadoP}</h6>
         </div>

        </div>
      )}
      {selectFigura === "rectangulo" && (
        <div className="row justify-content-center mt-4">
       
            <span className="input-group-text">Base</span>
        
          <input
            type="number"
            value={base}
            onChange={(e) => {
              setBase(e.target.value); // "5" 5
            }}
            className="form-control col-md-1 mb"
          />
          
            <span className="input-group-text">Altura</span>
        
          <input
            type="number"
            value={altura}
            className="form-control col-md-1 mb"
            onChange={(e) => {
              setAltura(e.target.value);
            }}
          ></input>
          <button type="button" class="btn btn-info" onClick={Resultado}>
            Calcular
          </button>
           
          <div>
         <h5>Resultados:</h5>
          <h6>Área: {resultadoA}</h6>
          <h6>Perimetro: {resultadoP}</h6>
         </div>
        </div>
      )}
    
      {selectFigura === "circulo" && (
        <div className="row justify-content-center mt-4">
         
            <span className="input-group-text">Radio</span>
    
          <input
            type="number"
            value={base}
            onChange={(e) => {
              setBase(e.target.value); // "5" 5
            }}
            className="form-control col-md-1 mb"
          />


      <button
            type="button"
            class="btn btn-info"
            onClick={Resultado}
          >
            Calcular
          </button>
          
        
          <div>
         <h5>Resultados:</h5>
          <h6>Área: {resultadoA}</h6>
          <h6>Perimetro: {resultadoP}</h6>
         </div>
     
        </div>
      )}
    </div>
  );
}

export default App;
