import React, { Component } from 'react';

import Header from './components/Header';
import FormContainer from './containers/FormContainer';
import ListContainer from './containers/ListContainer';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <FormContainer/>
        <ListContainer/>
      </div>
   )
  }
}

export default App;