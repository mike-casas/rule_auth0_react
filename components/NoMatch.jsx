var React= require('react');
module.exports = React.createClass({
  render(){
    return(
        <div className="try-banner">
          <div className="alert alert-danger"><strong>Oh snap!</strong> Resource Not Found.</div>
          <a href="javascript:signup()" className="btn btn-success btn-lg">Try Auth0 for Free</a>
        </div>
      )
  }
});
