import React from 'react';
import './App.css';
import { sha224 } from 'js-sha256';

class Emails extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.dir(this);
    this.props.onLinesChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="col">
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.props.lines} onChange={this.handleChange} rows="30" placeholder={this.props.placeholder} />
        </form>
      </div>
    );
  }
}

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.onLinesChange = this.onLinesChange.bind(this);
    this.state = {
      emails: '',
      hashes: ''
    };
  }

  onLinesChange(text) {
    this.setState({emails:text, hashes:text.split('\n').map(sha224).join('\n')});
  }

  render() {

    return (
        <div className="row">
          <Emails lines={this.state.emails} onLinesChange={this.onLinesChange} placeholder="Plak hier de e-mailadressen..."></Emails>→
          <Emails lines={this.state.hashes} onLinesChange={this.onLinesChange} placeholder="Kopieer daarna hier de code om bij te houden."></Emails>
        </div>
    );
  }
}

  class App extends React.Component {
    render() {
      return (
          <Converter />
      );
    }
  }
  export default App;
