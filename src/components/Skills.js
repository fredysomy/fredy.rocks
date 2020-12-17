import react,{Component} from 'react'
import './Skills.css'
import {Link} from 'react-router-dom';
export default class Skills extends Component{
    render(){
        return(
            <div id="main">
               
                  <h3 id="head" align="center">My <u><font color="cyan">Projects</font></u></h3>
            <div id="pro">
              
             <div className="projects">
               <h3 id="pro_head">MarkdownIt</h3>
               <h6 id="pro_tools">Electron,Node,Html,Css</h6>
               <p id="desc">Efficient Code Editor to live render Markdown and save as Markdown,Html and Pdf + Instant Hosting </p>
            
             <a href="https://github.com/fredysomy/MarkdownIt"><i class="fab fa-github-square fa-2x links"></i></a>
           
             </div>
             <div className="projects">
                  <h3 id="pro_head">PysonDB</h3>
               <h6 id="pro_tools">Python</h6>
               <p id="desc">A Simple , Lightweight , Efficent JSON based database for Python with many other features.</p>
             <a href="https://github.com/fredysomy/pysonDB"><i class="fab fa-github-square fa-2x links"></i></a>
             </div>
             <div className="projects">
                  <h3 id="pro_head">HealthApp</h3>
               <h6 id="pro_tools">Python,Pyqt5</h6>
               <p id="desc">
A Python desktop application .It can fetch Wikipedia results and search details about doctors in a location</p>
             <a href="https://github.com/fredysomy/HealthApp"><i class="fab fa-github-square fa-2x links"></i></a>
             </div>
             <div className="projects">
                  <h3 id="pro_head">Blogitn0w</h3>
               <h6 id="pro_tools">MEHN Stack</h6>
               <p id="desc">A simple Blog App.Users can write blogs, have a dashboard where they can edit,create blogs</p>
             <a href="https://github.com/fredysomy/Blogitn0w"><i class="fab fa-github-square fa-2x links"></i></a>
             </div>
            </div>
            <Link to="/projects">
            <h5 id="head" align="center">View all my Projects.</h5>
            </Link>
            </div>
        )
        
        
            
        
    }
}  