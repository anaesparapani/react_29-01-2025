import React from "react";

function ButtonDelete() {
  function click() {
    alert("Você clicou na botão para deletar itens");
  }
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "red",
        color: "white"
      }}
      onClick={() => click()}
    >
      Deletar
    </button>
  );
}

export default ButtonDelete;