import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Index from './pages/Index';
import Stocks from './pages/Stocks';
import IndexDashboard from './pages/dashboard/Index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/stocks" exact component={Stocks} />

        <Route path="/dashboard" exact component={IndexDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
