import React, { Component } from 'react';

import axios from 'axios';

class Actions extends Component {
  constructor() {
    super();
    this.state = {
      actions: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`http://localhost:5000/api/projects/${id}/actions`)
      .then(response => {
        this.setState({ actions: response.data });
      })
      .catch(error => {
        console.log(`There was an error connecting to the server: ${error}`);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.actions.map((actions, index) => {
            return <li key={index}>{actions.notes};</li>;
            //id of 1 => actions from id of 1 should be displayed
            //match an id then go to its actions
          })}
        </ul>
      </div>
    );
  }
}

export default Actions;
