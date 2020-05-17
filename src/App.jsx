import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import { Auth, Home } from './pages/index';

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path={['/', '/login', '/register']} component={Auth} />
        <Route exact path="/im" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
