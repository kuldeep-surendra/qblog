import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/grommet-css';
import reducers from './reducers';
import App from './App';
import Home from './components/home';
import Posts from './components/posts/posts';
import NewPost from './components/posts/newPost';
import ShowPost from './components/posts/showPost';
import SampleTable from './components/sampleTable';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

// const history = syncHistoryWithStore(browserHistory, store);

const requireAuth = (nextState, replace) => {
  if(!localStorage.getItem('token') && !localStorage.getItem('email')){
    replace({
      pathname: '/'
    })
  }
};

ReactDOM.render((
<Provider store={store}>
  <Router history={browserHistory}>
    <Route  path="/" component={App}/>
    <Route  path="/home" component={Home} onEnter={requireAuth}/>
    <Route  path="/posts" component={Posts} onEnter={requireAuth}/>
    <Route  path="/newPost" component={NewPost} onEnter={requireAuth}/>
    <Route  path="/sampleTable" component={SampleTable} onEnter={requireAuth}/>
    <Route  path="/showPost/:id" component={ShowPost} onEnter={requireAuth}/>
  </Router>
</Provider>
), document.getElementById('root'));
registerServiceWorker();
