import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      allSushi: [],
      startIndex: 0,
      boughtSushi: [],
      money: 100
    }
    this.buySushi = this.buySushi.bind(this)
    this.loadSushi = this.loadSushi.bind(this)
    this.checkMoney = this.checkMoney.bind(this)
  }

  componentDidMount() {
    this.loadSushi()
  }

  loadSushi() {
    fetch(API)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        allSushi: data,
        startIndex: this.state.startIndex + 4
      })
    })

  }

  buySushi(id, price) {
    if (this.state.boughtSushi.includes(id)) {
      console.log("Sushi already eaten - try again!!")
    } else {
      // console.log("price", price)
      // console.log("this.state.money", this.state.money)
      this.setState({
        boughtSushi: [...this.state.boughtSushi, id],
        money: this.state.money - price,
      })
      console.log("buySushi called for id #: ", id)
      console.log("current this.state.boughtSushi: ", this.state.boughtSushi)
    }
  }

  checkMoney(price) {
    return this.state.money >= price
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.allSushi.slice(this.state.startIndex, this.state.startIndex+4)}
          buySushi={this.buySushi}
          boughtSushi={this.state.boughtSushi}
          loadSushi={this.loadSushi}
          checkMoney={this.checkMoney}
       />
       <Table
         money={this.state.money}
         boughtSushi={this.state.boughtSushi}
        />
      </div>
    );
  }
}

export default App;
