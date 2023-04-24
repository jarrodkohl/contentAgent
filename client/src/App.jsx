import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApiTest from './ApiTest';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"  />
        <Route path="/api-test" component={ApiTest} />
      </Switch>
    </Router>
  );
}

export default App;
