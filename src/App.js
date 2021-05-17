import logo from './logo.svg';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import './App.css';

import { Spring, useSpring } from 'react-spring';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import moreText from './components/moreText';
import Projects from './components/Projects';
import contactMe from './components/contactMe';


function App() {
  return (
    <Router>
      <body>
    <div className="startPage"> 
       <Navigation/>
       <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects} />
          <Route Path="/contactMe" component={contactMe} />

                         
       </Switch>
    </div>
    </body>
    </Router>
  );
}




export default App;
