var React= require('react');

module.exports= React.createClass({
  render: function(){
    function description(data) {
      return {
        __html: data
          };
    }
    return (
        <section className="content">
          <div className="container">
            <h3>How it Works?</h3>
            <p dangerouslySetInnerHTML={description(this.props.description)}></p>
            <h3>How do I use it?</h3>
            <p>Just create a new rule in the Auth0 dashboard, and copy the following code replacing the placeholders with the
                appropriate values.
            </p>
            <pre>
              <code className="language-js hljs javascript">{this.props.code}
              </code>
            </pre>
          </div>
        </section>
      );
  }

})
