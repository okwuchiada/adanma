
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Portfolio from './Pages/Portfolio';

import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import { Contact } from './Pages/Contact';
import { Main } from './Layout/Main'

function App() {
  return (
    <Router>
        <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/main" component={Main} />
      </Switch>
    </Router>
    
  );
}

export default App;
