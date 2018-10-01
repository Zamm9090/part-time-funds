import React, { Component } from 'react';
import logo from './logo.svg';
import Orders from './components/ordersconfirm/orders'
import {orderRequestDataSet} from './service/orderRequestService';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      orderRequest:orderRequestDataSet,
      fundName:'hai'
    }
  }
  render() {
    return (
      <div className="App">
        <Orders orderRequest={this.state.orderRequest} fundName={this.state.fundName} />
      </div>
    );
  }
}

export default App;
