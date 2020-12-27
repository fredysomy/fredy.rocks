import react,{Component} from 'react'
import './Projects.css'

export default class Projects extends Component{
    render(){
        return(
            <div id="main">
               
            <h3 id="head" align="center">My <u><font color="cyan">Projects</font></u></h3>
                <div className="maindiv">
                <img className="img-div" src="https://drive.google.com/uc?export=view&id=1CWP-yFwqgy2HKbbHctxHbOW63hwJ4oqX"/>
                <div className="content-div">
                        <h3>
                            MarkdonwIt
                        </h3>
                        <p>
                            Efficient Code Editor to live render Markdown and save as Markdown,Html and Pdf + Instant Hosting in The Web.
                        </p>
                        <p>
                            Usefull for writing docs and Hosting it for free.
                        </p>
                        <p id="tech">
                            Electron JS , HTML,CSS , JavaScript
                        </p>
                        <button className="btn btn-primary btn-sm bttn">Source Code</button>
                        <button className="btn btn-primary btn-sm bttn">Documentation</button>
                </div>
            </div>
            
     
       
      </div>
 
 
 
        )
        
        
            
        
    }
}  