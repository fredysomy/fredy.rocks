import React,{Component} from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
export default class Header extends Component{
  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a id="Head" class="navbar-brand" href="#"><font color="cyan">Fredy Somy</font></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">About<span class="sr-only">(current)</span></a>
      </li>
     <Link to='/project'>
      <li class="nav-item">
        <a class="nav-link">Projects</a>
      </li>
      </Link>
       <li class="nav-item">
        <a class="nav-link" href="#">Skills</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      
    </ul>
  
  </div>
</nav>
      </div>
    )
  }

}