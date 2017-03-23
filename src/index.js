import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers/index';
import Policy from './modules/createPolicy/policy';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

// creates enhanced history that syncs navigation events with store 
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Policy} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
