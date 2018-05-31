import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/grommet-css';


ReactDOM.render((
<BrowserRouter>
  <Switch>
    <Route path="/" component={App} />
  </Switch>
</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
