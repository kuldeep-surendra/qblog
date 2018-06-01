import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './App';
import Home from './components/home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/grommet-css';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

function authenticate(){
  if(localStorage.getItem('token') && localStorage.getItem('email')){
    return true;
  } else {
    return false;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticate() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);


ReactDOM.render((
<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <PrivateRoute exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
</Provider>
), document.getElementById('root'));
registerServiceWorker();
