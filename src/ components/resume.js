import React from 'react';
import contact from ./component
import sidebar from './components/sidebar';

class Resume extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [], task: '' };

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
      <div>
        <Overview tasks={this.state.tasks} />
        <form>
          <label>New task:</label>
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          ></input>
          <input type="submit" onClick={this.handleClick}></input>
        </form>
      </div>
    );
  }
}

export default Resume;