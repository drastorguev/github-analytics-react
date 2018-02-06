import React, { Component } from 'react';
import axios from 'axios';

import Form from './components/Form.jsx';
import SortedList from './components/SortedList.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      gitun: 'No username',
      info: '',
      formData: {
        username: '',
      },
      repitems: [
        {id: 1, name: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, name: 'Installation', content: 'You can install React from npm.'},
        {id: 3, name: 'Hello World', content: 'Welcome to learning React!'},
        {id: 4, name: 'Installation', content: 'You can install React from npm.'},
        {id: 5, name: 'Hello World', content: 'Welcome to learning React!'},
        {id: 6, name: 'Installation', content: 'You can install React from npm.'}
      ],
      staritems: [
        {id: 1, name: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, name: 'Installation', content: 'You can install React from npm.'},
        {id: 3, name: 'Hello World', content: 'Welcome to learning React!'},
        {id: 4, name: 'Installation', content: 'You can install React from npm.'},
        {id: 5, name: 'Hello World', content: 'Welcome to learning React!'},
        {id: 6, name: 'Installation', content: 'You can install React from npm.'}
      ],
      itemstest: [
        {id: 1, name: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, name: 'Installation', content: 'You can install React from npm.'},
        {id: 3, name: 'Hello World', content: 'Welcome to learning React!'},
        {id: 4, name: 'Installation', content: 'You can install React from npm.'},
        {id: 5, name: 'Hello World', content: 'Welcome to learning React!'},
        {id: 6, name: 'Installation', content: 'You can install React from npm.'}
      ]

    }
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange= this.handleFormChange.bind(this);
  }

  handleUserFormSubmit(event) {
    event.preventDefault();
    axios.get('https://api.github.com/users/'+this.state.formData.username)
    .then(response => this.setState({
      gitun: response.data.login,
      info : JSON.stringify(response.data, undefined, 2)
    })).catch((err) => { console.log(err); });

    axios.get('https://api.github.com/users/'+this.state.formData.username+'/repos')
    .then(response => this.setState({
      repitems : response.data.sort((b, a) => (a.watchers_count + a.forks_count) - (b.watchers_count + b.forks_count)).slice(0,10)
    })).catch((err) => { console.log(err); });

    axios.get('https://api.github.com/users/'+this.state.formData.username+'/starred')
    .then(response => this.setState({
      staritems : response.data.sort((b, a) => (a.watchers_count + a.forks_count) - (b.watchers_count + b.forks_count)).slice(0,10)
    })).catch((err) => { console.log(err); });
  };

  handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Analytics</h1>
        </header>
        <p>Link to Medium article + Dmitry Rastorguev's LinkedIn</p>
        <p className="App-intro">
          Watch this space...
        </p>
        <hr></hr>
        <Form
          formData={this.state.formData}
          handleUserFormSubmit={this.handleUserFormSubmit}
          handleFormChange={this.handleFormChange}
        />
        <hr></hr>
        List of Repos goes here
        <SortedList repitems={this.state.repitems}/>
        <hr></hr>
        List of Stars goes here
        <SortedList repitems={this.state.staritems}/>
        <hr></hr>
        <p><b>Username:</b></p>
        <p>{this.state.gitun}</p>
        <b>Information:</b>
        <pre>{this.state.info}</pre>

      </div>
    );
  }
}

export default App;
