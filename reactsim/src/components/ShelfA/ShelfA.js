import React, {Component} from 'react';
import axios from 'axios';
import router from '../../router';




export default class ShelfA extends Component{
    constructor(){
        super()
        this.state = {
            bin1 : {name: "", price: 0},
            bin2 : {name: "", price: 0},
            bin3 : {name: "", price: 0},
            bin4 : {name: "", price: 0},
            bin5 : {name: "", price: 0},
        }

    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/products').then( response => {
            console.log("axious pre for loop:",response.name);
            for(var prop in this.state){
                this.setState({name: response.name})
                console.log('forloop',this.state.bin1);
            }
        })
    }

    render(){
        return(

<div>
<p> Can you see me?</p>
    </div>

        )
    }




}