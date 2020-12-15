import React,{Component} from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import * as $ from 'jquery';
export default class Header extends Component{

  render(){
    return(
      <div>
        <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a id="Head" class="navbar-brand" href="#"><font color="cyan">Fredy Somy</font></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     <Link to='/'>
      <li class="nav-item active">
        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">About<span class="sr-only">(current)</span></a>
      </li>
</Link>
     <Link to='/projects'>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Projects</a>
      </li>
      </Link>
       <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"href="#">Skills</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show" href="#">Contact</a>
      </li>
      
    </ul>
  
  </div>
</nav>
      </div>
    )
  }

}
