import React, { Component } from "react";
import Screen from "../components/screen/Screen";
import "./Builder.css";
import axios from "../axios-orders";

class Builder extends Component {
  state = { ordersData: [], ids: [] };

  componentDidMount() {
    setInterval(() => {
      let currentState = this;
      let tempArr = [];
      let orderIds = [];
      axios
        .get("https://ice-cream-app-d8782.firebaseio.com/test.json")
        .then(response => {
          if (response.data) {
            Object.keys(response.data).forEach(function(item) {
              tempArr.push(response.data[item]);
              orderIds.push(item);
            });
            currentState.setState({ ordersData: tempArr, ids: orderIds });
          }
        })
        .catch(error => {
          alert(error);
        });
    }, 5000);
  }

  finishOrder = t => {
    let d = new Date();
    let tempState = this.state.ordersData;
    const o = tempState[t];
    tempState.splice(t, 1);
    let tempID = this.state.ids;
    axios
      .post("/test2.json", o)
      .then(response => {})
      .catch(error => console.log(error));
    axios
      .delete("/test/" + this.state.ids[t] + ".json")
      .then(response => {
        tempID.splice(t, 1);
        this.setState({ ordersData: tempState, ids: tempID });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="builder">
        <h3 className="builder-header">ZAMÓWIENIA</h3>
        <div className="builder-wrapper">
          <Screen
            ordersData={this.state.ordersData}
            finishOrder={this.finishOrder}
          />
        </div>
      </div>
    );
  }
}

export default Builder;
