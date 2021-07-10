import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Index from './pages/Index';
import Stocks from './pages/Stocks';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/stocks" exact component={Stocks} />
      </Switch>
    </Router>
  );
}

export default App;
