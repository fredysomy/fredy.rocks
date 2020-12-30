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
                            <b>
                            MarkdownIt <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/fredysomy/MarkdownIt?style=for-the-badge"></img>
                            </b>
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
                        <button className="btn btn-outline-primary btn-sm bttn">Source Code</button>
                        <button className="btn btn-outline-primary btn-sm bttn">Documentation</button>
                </div>
            </div>
            <div className="maindiv">
                <img className="img-div" src="https://raw.githubusercontent.com/fredysomy/pysonDB/master/images/file2son.png?token=APXKHAH6EDEJ7RUG3QOD2OC7ZHQZG"/>
                <div className="content-div">
                        <h3>
                            <b>
                            PysonDB <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/fredysomy/pysonDB?style=for-the-badge"></img>
                            </b>
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
                        <button className="btn btn-outline-primary btn-sm bttn">Source Code</button>
                        <button className="btn btn-outline-primary btn-sm bttn">Documentation</button>
                </div>
            </div>
            <div className="maindiv">
                <img className="img-div" src="https://raw.githubusercontent.com/fredysomy/HealthApp/master/img/Cardiovascularofessional%20Society~3.png"/>
                <div className="content-div">
                        <h3>
                            <b>
                            HealthApp <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/fredysomy/HealthApp?style=for-the-badge"></img>
                            </b>
                        </h3>
                        <p>
                           A Python desktop application to fetch Wikipedia results and save them as text file or in database.This app also has a Section to search details about doctors in a location.
                        </p>
                        
                        <p id="tech">
                            Python  PyQt5 
                        </p>
                        <button className="btn btn-outline-primary btn-sm bttn">Source Code</button>
                        <button className="btn btn-outline-primary btn-sm bttn">Documentation</button>
                </div>
            </div>
             <div className="maindiv">
                <img className="img-div" src="https://raw.githubusercontent.com/fredysomy/CsvToDeta/main/images/20201203_215247_0000~2.png"/>
                <div className="content-div">
                        <h3>
                            <b>
                            CsvToDeta <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/fredysomy/CsvToDeta?style=for-the-badge"></img>
                            </b>
                        </h3>
                        <p>
                           A Lightweight CLI tool to upload CSV files data into Deta Base.
                        </p>
                        <p>
                          Can upload many JSON docs with a single command.
                        </p>
                        
                        <p id="tech">
                            Python  , Fire , Deta
                        </p>
                        <button className="btn btn-outline-primary btn-sm bttn">Source Code</button>
                        <button className="btn btn-outline-primary btn-sm bttn">Documentation</button>
                </div>
            </div>
     
     
       
      </div>
 
 
 
        )
        
        
            
        
    }
}  