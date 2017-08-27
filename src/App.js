import React, { Component } from 'react';

import Header from './components/Header';
import Form from './containers/Form';
import List from './containers/List';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <Form/>
        <List/>
      </div>
   )
  }
}

export default App;