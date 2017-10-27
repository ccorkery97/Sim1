import React, {Component} from 'react'
import './App.css'
import {Link} from 'react-router-dom'


export default class Nav extends Component{



    render(){
        return(
<div>

<div>
<Link to="/"> Home </Link>
<Link to="/shelfA">Shelf A</Link>
</div>



</div>
        )
    }
}