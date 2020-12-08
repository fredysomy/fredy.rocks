import React, {Component} from 'react';
import './Mainbody.css';
export default class Mainbody extends Component{
  render(){
    return(
      <div id="divmain">
        <img id="imgme" src="https://avatars2.githubusercontent.com/u/65971072?s=460&u=dd6ae329cb0a04cbddc6c0959a924ceeac62bf02&v=4"/>
        <div  id="det">
          <h1 id ="name">Hi I am Fredy Somy</h1>
            <hr />
          <h5 >I am  Software Developer and a Student</h5>
          <h5>Some stuffs i make.⚡</h5>
          
          <ul className="sub" align="left">
            <li>
              Web Apps
            </li>
            <li>
              Desktop Apps
            </li>
            <li>
              Pypi packages
            </li>
            <li>
              CLI tools
            </li>
          </ul>
          <div>
            <a href="https://dev.to/fredysomy" ><img height="32px" width="32px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgajA05XF6eHfhMRKT9EunERUm82WuKMe8MQ&usqp=CAU"/></a>
<a href="https://linkedin.com/in/fredysomy"><img height="32px" className="we" width="32px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmPdKRkCtqXB94svbTykR1XudgqXLhlolMQ&usqp=CAU" /></a>
<a href="https://twitter.com/FredySomy"><img height="32px" className="we" width="32px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuhVOGJRD_c4IgnHUmAff8tHTB5fLDuP9ECw&usqp=CAU"/></a>
<a href="https://fredysomy.hashnode.dev" ><img height="32px" className="we" width="32px" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1592752137870/scHk9tTaA.png?auto=compressUQ1nKYMaA=w384-h384"/></a>
        </div>
        </div>
      </div>
    )

  }

}
