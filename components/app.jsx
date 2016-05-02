var React = require('react');
var ReactDOM= require('react-dom');
var MainComponent = require('./MainComponent.jsx');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory= require('react-router').browserHistory;
var NoMatch= require('./NoMatch.jsx');

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/rule/:ruleId" component={MainComponent}/>
      <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('main'));





