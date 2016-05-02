var React = require('react');
var request = require('request');
var Jumbotron = require('./Jumbotron.jsx');
var Content = require('./Content.jsx');
var Meaning= require('./Meaning.jsx');
var NoMatch= require('./NoMatch.jsx');
module.exports = React.createClass({
  getInitialState:function(){
    return { logo: 'vanillajs'};
  },
  componentDidMount: function() {
    var ruleId= this.props.params.ruleId;
    request('http://localhost:3000/api/rule/'+ ruleId , function(error, response, body) {
      var result = JSON.parse(body);
      this.statusCode=response.statusCode;
      if (this.isMounted()) {
        if(this.statusCode===200){
          this.setState(result.rules);
        }
      }
    }.bind(this));
  },
  render: function(){
      if(this.statusCode===200){
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
      }else{
        return (
          <NoMatch />
        );
      }
  }
});
