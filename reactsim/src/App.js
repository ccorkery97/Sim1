import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import router from './router'
import Nav from './Nav'


class App extends Component {
  constructor(){
    super()
    this.state = {
      
    
    }
this.updatePrice=this.updatePrice.bind(this)
this.updateName=this.updateName.bind(this)
  }
  
 sendChange(){
   axios.put(`http://localhost:3000/api/product/${this.state.idToUpdate}?desc=${this.state.updatedName},${this.state.updatedPrice}`).then( response => {
  console.log(response)
   })
 }
  
  updatePrice(val){
this.setState({updatedPrice: val})
  }
  updateName(val){
this.setState({updatedName: val})
  }  
  
  
  render() {
    return (
      <div>
      <Nav />
      {router}
      <input onChange={ (e) => {this.updateName(e.target.value)}} placeholder="Type Name Here"/>


      <input onChange={ (e) => {this.updatePrice(e.target.value)}} placeholder="Type Price Here"/>
<button onClick={this.sendChange}>Click Me! </button>

      </div>
    );
  }
}

export default App;
