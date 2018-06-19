import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import browserHistory from './history';
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
import Callback from './components/callback';
import Auth from './Auth';
import Profile from './components/profile';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const auth = new Auth();
const handleAuthentication = ({location}) => {
  console.log('index.js')
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    (localStorage.getItem("access_token") && localStorage.getItem("email"))? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

ReactDOM.render((
<Provider store={store}>
  <Router history={browserHistory}>
    <Switch>
    <Route exact path="/" component={App}/>
    <PrivateRoute exact path="/home" component={Home}/>
    <PrivateRoute exact path="/posts" component={Posts}/>
    <PrivateRoute exact path="/newPost" component={NewPost}/>
    <PrivateRoute exact path="/sampleTable" component={SampleTable}/>
    <PrivateRoute exact path="/showPost/:id" component={ShowPost}/>
    <Route exact path="/callback" render={(props) => {
        console.log("insiderender")
            handleAuthentication(props);
            return <Callback {...props}/>
    }}/>
    <Route exact path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              browserHistory.push('/home')
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
    </Switch>
  </Router>
</Provider>
), document.getElementById('root'));
registerServiceWorker();
