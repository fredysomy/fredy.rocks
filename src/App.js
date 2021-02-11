import logo from "./logo.svg";
import "./App.css";
import Mainbody from "./components/Mainbody";
import Header from "./components/Header";
import Particles from "react-particles-js";
import Projects from "./projects/Projects";
import Downloads from "./donwloads/Downloads";
import Contact from "./contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  // return(
  // <Router>
  // <div className="App">
  //  <Header/>
  //     <Switch>
  //        <Route exact path="/">
  //            <Projects/>
  //            </Route>
  //          <Route exact path="/downloads" component={Downloads} />
  //     </Switch>
  //  </div>
  //  </Router>
  //  )

  if (window.location.host.split(".")[0] == "projects") {
    return (
      <Router>
        <Header />
        <Projects />
      </Router>
    );
  }
  if (window.location.host.split(".")[0] == "downloads") {
    return (
      <Router>
        <div className="App">
          <Header />
          <Downloads />
        </div>
      </Router>
    );
  }
  if (window.location.host.split(".")[0] == "fredy") {
    return (
      <Router>
        <div className="App">
          <Header />
          <Mainbody />
        </div>
      </Router>
    );
  }
  if (window.location.host.split(".")[0] == "contact") {
    return (
      <Router>
        <div className="App">
          <Header />
          <Contact />
        </div>
      </Router>
    );
  }
  if (window.location.host.split(".")[2] == "gitpod") {
    return (
      <Router>
        <div className="App">
          <Header />
          <Projects />
        </div>
      </Router>
    );
  }
}

export default App;
