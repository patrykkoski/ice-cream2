import React from "react";
import "./Order.css";

const order = props => {
  const iceCream = props.it.map((iC, i) => {
    return (
      <div className="order-item">
        <h4>SMAKI</h4>
        <p>{iC.tastes[0]}</p>
        <p>{iC.tastes[1]}</p>
        <h4>DEKORACJE</h4>
        <p>{iC.decoration}</p>
        <h4>POLEWY</h4>
        <p>{iC.sauce}</p>
      </div>
    );
  });
  return (
    <div className="order">
      <h3>Zamówienie:</h3>
      <div className="order-wrapper">{iceCream}</div>
      <button
        className="order-button"
        onClick={() => props.finishOrder(props.num)}
      >
        Zamówienie gotowe
      </button>
    </div>
  );
};

export default order;
