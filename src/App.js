import React, { Component } from 'react';
import { Top } from 'components';
import { FormContainer, ListContainer} from 'containers';

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