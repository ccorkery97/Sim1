import React, {Component} from 'react';
import axios from 'axios';
import router from '../../router';




export default class Bin extends Component{
    constructor(){
        super()
        this.state = {
            bin1 : {name: "", price: 0},
            bin2 : {name: "", price: 0},
            bin3 :{name: "", price: 0},
            bin4 :{name: "", price: 0},
            bin5 :{name: "", price: 0},
        }

    }

    componentDidMount(){
        axios.get('http://localhost3000/api/products').then( response => {
            console.log(response);
            for(var i in this.state){
                this.setState(this.bin[i].name=response.data.name, this.bin[i].price= response.data.name)
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