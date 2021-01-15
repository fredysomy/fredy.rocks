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
                        <a href="https://github.com/fredysomy/MarkdownIt"><button className="btn btn-outline-primary btn-sm bttn">Source Code</button></a>
                         <a href="https://markdownitweb.herokuapp.com/"><button className="btn btn-outline-primary btn-sm bttn">Documentation</button></a>
                        <a href="https://github.com/fredysomy/MarkdownIt/releases"><button class="btn btn-outline-primary btn-sm"><i class="fas fa-cloud-download-alt"></i></button></a>
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
                         <a href="https://github.com/fredysomy/pysonDB"><button className="btn btn-outline-primary btn-sm bttn">Source Code</button></a>
                         <a href="https://fredysomy.me/pysonDB/"><button className="btn btn-outline-primary btn-sm bttn">Documentation</button></a>
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
                         <a href="https://github.com/fredysomy/HealthApp"><button className="btn btn-outline-primary btn-sm bttn">Source Code</button></a>
                         <a href="https://github.com/fredysomy/HealthApp#readme"><button className="btn btn-outline-primary btn-sm bttn">Documentation</button></a>
            <a href="https://github.com/fredysomy/HealthApp/releases/tag/0.0.0"><button class="btn btn-outline-primary btn-sm"><i class="fas fa-cloud-download-alt"></i></button></a>
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
                         <a href="https://github.com/fredysomy/CsvToDeta"><button className="btn btn-outline-primary btn-sm bttn">Source Code</button></a>
                         <a href="https://pypi.org/project/csvtodeta/"><button className="btn btn-outline-primary btn-sm bttn">Documentation</button></a>
                </div>
            </div>
            <div className="maindiv">
                <img className="img-div" src="https://raw.githubusercontent.com/fredysomy/CsvToDeta/main/images/20201203_215247_0000~2.png"/>
                <div className="content-div">
                        <h3>
                            <b>
                            gitscrpy <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/fredysomy/gitscrpy?style=for-the-badge"></img>
                            </b>
                        </h3>
                        <p>
                           A simple snake python package to scrape Github user repositories and some user details.
                        </p>
                        
                        
                        <p id="tech">
                            Python  , Fire 
                        </p>
                         <a href="https://github.com/fredysomy/gitscrpy"><button className="btn btn-outline-primary btn-sm bttn">Source Code</button></a>
                         <a href="https://pypi.org/project/gitscrpy/"><button className="btn btn-outline-primary btn-sm bttn">Documentation</button></a>
                </div>
            </div>
            <div className="maindiv">
                <img className="img-div" src="https://raw.githubusercontent.com/fredysomy/CsvToDeta/main/images/20201203_215247_0000~2.png"/>
                <div className="content-div">
                        <h3>
                            <b>
                            Blogitn0w <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/fredysomy/Blogitn0w?style=for-the-badge"></img>
                            </b>
                        </h3>
                        <p>
                           A simple Blog App made with Node,Express,MongoDb.
                        </p>
                        <p>
                            Users can write blogs and have a dashboard where they can edit,create new blogs , change password and edit bio.
                        </p>

                        
                        <p id="tech">
                            Node , Express JS , MongoDB  
                        </p>
                         <a href="https://github.com/fredysomy/Blogitn0w"><button className="btn btn-outline-primary btn-sm bttn">Source Code</button></a>
                         <a href="https://blogitn0w.herokuapp.com/"><button className="btn btn-outline-primary btn-sm bttn">Website</button></a>
                </div>
            </div>
            <div className="maindiv">
                <img className="img-div" src="https://raw.githubusercontent.com/fredysomy/CsvToDeta/main/images/20201203_215247_0000~2.png"/>
                <div className="content-div">
                        <h3>
                            <b>
                            Todo-App <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/fredysomy/Todo-App?style=for-the-badge"></img>
                            </b>
                        </h3>
                        <p>
                          A simple ToDo app which you can add to your homescreen and works perfectly in offline mode.
                        </p>
                        <p>
                            Made to learn React JS
                        </p>

                        
                        <p id="tech">
                           ReactJS  
                        </p>
                         <a href="https://github.com/fredysomy/Todo-App"><button className="btn btn-outline-primary btn-sm bttn">Source Code</button></a>
                         <a href="https://todo.fredy.rocks/"><button className="btn btn-outline-primary btn-sm bttn">Documentation</button></a>
                </div>
            </div>
     
     
       
      </div>
 
 
 
        )
        
        
            
        
    }
}  
