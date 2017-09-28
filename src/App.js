import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Top from './components/Top';

import FormContainer from './containers/FormContainer';
import ListContainer from './containers/ListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Top/>
        <FormContainer/>
        <ListContainer/>
      </div>
   )
  }
}

export default App;