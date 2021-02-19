import React from 'react';
import Home from './Home';
import '../Stylesheets/App.scss';
import Header from './Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Projects from './Projects';
import Me from './Me';
import Contact from './Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/contact"><Contact/></Route>
          <Route path="/me"><Me/></Route>
          <Route path="/projects"><Projects/></Route>
          <Route path="/"><Home/></Route>
        </Switch>
      </div>
    </BrowserRouter>
    )
}

export default App;
