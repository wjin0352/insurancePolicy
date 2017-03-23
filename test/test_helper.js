// import _$ from 'jquery';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
// import jsdom from 'jsdom';
// import chai, { expect } from 'chai';
// import chaiJquery from 'chai-jquery';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducers from '../src/reducers';
//
// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.window = global.document.defaultView;
// global.navigator = global.window.navigator;
// const $ = _$(window);
//
// chaiJquery(chai, chai.util, $);
//
// function renderComponent(ComponentClass, props = {}, state = {}) {
//   const componentInstance =  TestUtils.renderIntoDocument(
//     <Provider store={createStore(reducers, state)}>
//       <ComponentClass {...props} />
//     </Provider>
//   );
//
//   return $(ReactDOM.findDOMNode(componentInstance));
// }
//
// $.fn.simulate = function(eventName, value) {
//   if (value) {
//     this.val(value);
//   }
//   TestUtils.Simulate[eventName](this[0]);
// };
//
// export {renderComponent, expect};
//


// MAKE SURE you install Mocha globally!
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;  // es6 implementation of promises

// setup for our test database
// before is exectuted once compared to beforeEach
before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
  // watch for mongoose to emit even 'open' then run console log
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

// Hook created to empty out our database for each test, so find our collection of users and drop them
beforeEach((done) => {
  const { users, policies } = mongoose.connection.collections;
  users.drop(() => {
    policies.drop(() => {
      done();
    });
  });
});
