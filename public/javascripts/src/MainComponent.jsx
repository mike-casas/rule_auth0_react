var React = require('react');
var request = require('request');
var Jumbotron = require('./Jumbotron.jsx');
var Content = require('./Content.jsx');
var Meaning= require('./Meaning.jsx');

module.exports = React.createClass({
  getInitialState:function(){
    return { logo: 'vanillajs'};
  },
  componentDidMount: function() {
    var ruleId= this.props.params.ruleId;
    request('http://localhost:3000/api/rule/'+ ruleId , function(error, response, body) {
      var result = JSON.parse(body);

      if (this.isMounted()) {
        this.setState(result.rules);
        console.log(this.state);
      }
    }.bind(this));
  },

  render: function(){
    return (
      <div>
        <Jumbotron
        logo={this.state.logo}
        title={this.state.title}
        summary={this.state.summary}
        />
        <Content
        description={this.state.description}
        code= {this.state.code}
        />
        <Meaning />
      </div>
      )
    }
});
