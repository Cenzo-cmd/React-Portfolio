import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";


function App() {
  return (
    <Router>
      
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    
    </Router>
  );
}

export default App;
