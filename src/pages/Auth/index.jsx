import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginForm, RegisterForm } from '../../modules/index';

// CSS
import './Auth.scss';


const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Switch>
        <Route exact path={['/', '/login']} component={LoginForm} />
        <Route
          exact
          path="/register"
          component={RegisterForm}
        />
      </Switch>
    </div>
  </section>
);

export default Auth;
