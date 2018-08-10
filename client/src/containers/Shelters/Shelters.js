import React, { Component } from "react";
import * as api from "../../helpers/api";
import "./Shelters.css";

class Shelters extends Component {
  state = {
    shelters: []
  };
  componentDidMount() {
    api.getShelters().then(data => {
      this.setState({
        shelters: data
      });
    });
  }
  render() {
    return (
      <div>
        <h1>List of shelters</h1>
        <div className="shelters-container">
          {this.state.shelters.map(shelter => {
            return (
              <div className="shelter-info">
                <h3>{shelter.name}</h3>
                <p>{shelter.city}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Shelters;
