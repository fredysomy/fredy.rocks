import react,{Component} from 'react'
import './Projects.css'

export default class Projects extends Component{
    render(){
        return(
            <div id="main">
               
            <h3 id="head" align="center">My <u><font color="cyan">Projects</font></u></h3>
                <div className="maindiv">
                <img className="img-div" src="https://raw.githubusercontent.com/fredysomy/MarkdownIt/master/icons/dassad.png"/>
                <div className="content-div">
                        <h3>
                            MarkdownIt
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
            <div className="maindiv">
                <img className="img-div" src="https://raw.githubusercontent.com/fredysomy/pysonDB/master/images/file2son.png?token=APXKHAH6EDEJ7RUG3QOD2OC7ZHQZG"/>
                <div className="content-div">
                        <h3>
                            PysonDB
                        </h3>
                        <p>
                            A Simple, Lightweight, Efficent JSON based DataBase for Python with Inbuilt CLI to delete,display,create JSON database.
                        </p>
                        <p>
                            Usefull for SImple Desktop Apps.
                        </p>
                        <p id="tech">
                            Python
                        </p>
                        <button className="btn btn-primary btn-sm bttn">Source Code</button>
                        <button className="btn btn-primary btn-sm bttn">Documentation</button>
                </div>
            </div>
     
       
      </div>
 
 
 
        )
        
        
            
        
    }
}  