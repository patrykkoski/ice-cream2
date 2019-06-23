import React from "react";
import Order from "./Order/Order";
import "./Screen.css";

const screen = props => {
  const orderItem = props.ordersData.map((item, i) => {
    //console.log(item);
    return (
      <div className="screen">
        <Order it={item} num={i} finishOrder={props.finishOrder} />
      </div>
    );
  });
  return orderItem;
};

export default screen;
