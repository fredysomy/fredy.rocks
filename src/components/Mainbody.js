import React, {Component} from 'react';
import './Mainbody.css';
import Particles from 'react-particles-js';
export default class Mainbody extends Component{
    
  render(){
    return(
      <div id="divmain" style={{ position: 'relative', overflow: "hidden" }}>
          <div style={{ position: 'absolute',z-index :'-2'}}>
        <Particles height="100vh" width="100vw" />
      </div>
        <img id="imgme" src="https://avatars2.githubusercontent.com/u/65971072?s=460&u=dd6ae329cb0a04cbddc6c0959a924ceeac62bf02&v=4"/>
        <div  id="det">
          <h1 id ="name">Hi I am <font color="cyan">
 <u>Fredy Somy</u> </font></h1>
            <hr />
          <h5>I am  <b>Software Developer</b> and a Student</h5>
          <h5 id="desc">I focus mainly on Backend Web development with Python and Javascript , also work in the Frontend with React , like to make Desktop apps and Pypi modules.</h5>
          <hr/>
          <div >
            <a href="https://dev.to/fredysomy" ><i class="fab fa-dev fa-2x"></i></a>
<a href="https://linkedin.com/in/fredysomy"><i id="we" class="fab fa-linkedin fa-2x"></i></a>
<a href="https://twitter.com/FredySomy"><i id="we" class="fab fa-twitter-square fa-2x"></i></a>
<a href="https://github.com/fredysomy"><i id="we" class="fab fa-github-square fa-2x"></i></a>
<a href="mailto:fredysomy@gmail.com"><i id="we" class="far fa-envelope fa-2x"></i></a>
        </div>
        <div id="buttonref">
         <button class="btn btn-outline-info resume">Hire Me</button>
        <a download href="https://drive.google.com/uc?export=view&id=1XRRQqGRqT3jK_EVNV4WSjDBRHQ8o9-rF"><button  class="btn btn-outline-info resume">Resume</button></a>
        
        </div>
        </div>
        <hr/>
        
      </div>
      
    )

  }

}
