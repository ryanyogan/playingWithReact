var React = require('react');

var Shouter = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello {this.props.name} !</p>
        <span className="age">You are {this.props.age} years old</span>
      </div>
    );
  }
});

module.exports = Shouter;
