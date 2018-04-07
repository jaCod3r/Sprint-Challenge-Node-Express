import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/projects')
      .then(res => {
        this.setState({ projects: res.data });
      })
      .catch(error => {
        console.log(`There was an error connecting to the server: ${error}`);
      });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.projects.map((project, index) => {
            return <li key={index}>{project.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
