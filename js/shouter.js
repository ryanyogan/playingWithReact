var React = require('react');

var Shouter = React.createClass({
  render: function() {
    return (
      <p>Hello {this.props.name} !</p>
    );
  }
});

module.exports = Shouter;
