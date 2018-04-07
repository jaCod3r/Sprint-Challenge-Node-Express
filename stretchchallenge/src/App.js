import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            return (
              <li key={index}>
                <Link to={`/projects/${++index}/actions`}>{project.name}</Link>
              </li>
            );

            //id of 1 => actions from id of 1 should be displayed
            //match an id then go to its actions
          })}
        </ul>
      </div>
    );
  }
}

export default App;
