import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Detail } from './pages/datail'
import { Home } from './pages/home'
import { NotFound } from './pages/notFound'


//import { render } from '@testing-library/react';
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route component={NotFound} />
        </Switch>

      </div>
    );
  }
}


export default App;
