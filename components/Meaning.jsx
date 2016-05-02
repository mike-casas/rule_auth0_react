var React= require('react');

module.exports= React.createClass({
  render: function (){
    return (
        <section>
          <div className="container">
            <h3>What is a Rule?</h3>
            <p>A rule is arbitrary JavaScript code that can be used to extend Auth0's default behavior when authenticating a user.
              Enabled rules will be executed in the order shown below for all users and applications as the final step of the
              authentication process.
            </p>
            <p>
              Rules can be used to enrich and transform the user profile, deny access to specific users under certain conditions, retrieve
              information from external services and much more. To learn more about rules, see <a href="https://auth0.com/docs/rules" target="_blank">https://auth0.com/docs/rules.</a>
            </p>
          </div>
        </section>
      );
  }

});
