import logo from './logo.svg';
import './App.css';
import Mainbody from './components/Mainbody'
import Header from './components/Header'
import Particles from 'react-particles-js';
import Projects from './projects/Projects';
import Downloads from './donwloads/Downloads';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
    return(
        <Router>
        <div className="App">
        <Header/>
            <Switch>
                <Route exact path="/">
                    
                <Mainbody />
           
               
                    
                    
                </Route>
                
                <Route exact path="/downloads" component={Downloads} />
            </Switch>
        </div>
    </Router>
    )
  
}

export default App;
