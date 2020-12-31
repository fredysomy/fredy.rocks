import logo from './logo.svg';
import './App.css';
import Mainbody from './components/Mainbody'
import Header from './components/Header'
import Particles from 'react-particles-js';
import Projects from './projects/Projects';
import Downloads from './donwloads/Downloads';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
    if (window.location.host.split('.')[0] == "projects"){
        return(
           
            <Router>
                 <div className="App">
                <Header/>
                <Projects/>
                </div>
            </Router>
           
        )

    }
    else {
        return(
           
            <Router>
                 <div className="App">
                <Header/>
                <Mainbody/>
                </div>
            </Router>
           
        )
    }
  
}

export default App;
