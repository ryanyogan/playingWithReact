import React from 'react';

const {
  Component,
} = React;

class Shouter extends Component {
  render () {
    return (
      <div>
        <p>Hello {this.props.name} !</p>
        <span className="age">You are {this.props.age} years old</span>
      </div>
    );
  }
};

export default Shouter;
