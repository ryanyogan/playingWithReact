import Shouter from './shouter';
import React   from 'react';

const {
  Component,
} = React;

class ShouterForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Ryan H',
    }
  }

  render () {
    return (
      <div className="hello-form">
        <input type="text" onChange={this.onChange.bind(this)} />
        <Shouter name={this.state.name} />
      </div>
    );
  }

  onChange (event) {
    this.setState({ name: event.target.value });
  }
}

export default ShouterForm;
