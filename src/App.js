import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();
    this.state = { name: [], task: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: ''
    });
  }

  render() {
    return (
      <form>
        <label htmlFor="name"></label>
      </form>
    );
  }
}

export default App;
