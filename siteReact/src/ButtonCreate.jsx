import React from "react";

function ButtonCreate() {
  function click() {
    alert("Você clicou na botão para criar itens");
  }
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "green",
        color: "white"
      }}
      onClick={() => click()}
    >
      Criar
    </button>
  );
}

export default ButtonCreate;