// Importing all required modules needed to make Api.js work.
import { Component } from 'react';
import axios from 'axios';

// This Api component is called in every page where a connection with the api is needed - using axios.
class Api extends Component {
    constructor(params) {
      super(params);
    };
// A static method is made to establish a connection with the API.
    static establishConnection(token) {
      const api = axios.create({
        baseURL: 'http://45.77.58.134:8080',
        headers: { 'Authorization': 'Bearer ' + token }
      });
      return api;
    }
    render() {
      return
    }
  }

 export default Api