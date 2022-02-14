import React, { ChangeEvent, useEffect, useState } from "react";
type Props = {
  value: Number;
};

export const Purchase = ({ value }: Props) => {
  const [n, setN] = useState(1);
  const [valueTotal, setValeuTotal] = useState(value);
  console.log(valueTotal);

  const handleClick = () => {
    console.log("add");
  };
  const handleAmountSubtract = () => {
    setN(n - 1);
  };
  const handleAmountAdd = () => {
    // const teste =
    const price: number = value;
    setN();
    setValeuTotal(n * price);
  };

  return (
    <div>
      <h2>Vendido e entregue por DioShopping</h2>
      <h3>No valor de {`R$ ${valueTotal}`} em até 10x sem juros no cartão</h3>
      <h3>Apos a compra informa o tamanho solicitado!</h3>
      <h3>Quantidade</h3>
      <button onClick={handleAmountSubtract}>-</button>
      <span>{n}</span>
      <button onClick={handleAmountAdd}>+</button>
      <button onClick={handleClick}>Adicionar ao Carrinho</button>
    </div>
  );
};
