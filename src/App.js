import logo from './logo.svg';
import './App.css';
import Mainbody from './components/Mainbody'
import Header from './components/Header'

import Projects from './projects/Projects'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
        <div className="App">
        <Header/>
            <Switch>
                <Route exact path="/">
                    <Mainbody/>
                    
                </Route>
                <Route exact path="/projects" component={Projects} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
