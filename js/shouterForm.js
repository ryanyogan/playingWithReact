var Shouter = require('./shouter');
var React   = require('react');

var ShouterForm = React.createClass({
  getInitialState: function() {
    return {
      name: 'Ryan H.'
    };
  },

  render: function() {
    return (
      <div className="hello-form">
        <input type="text" onChange={this.onChange} />
        <Shouter name={this.state.name} />
      </div>
    );
  },

  onChange: function(event) {
    this.setState({ name: event.target.value });
  }
});

module.exports = ShouterForm;
