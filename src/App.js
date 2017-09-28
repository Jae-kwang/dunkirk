import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Header from './components/Header';
import FormContainer from './containers/FormContainer';
import ListContainer from './containers/ListContainer';

const Wrapper = styled.div`
  background-color: ${oc.gray[1]};
`;

const Article = styled.article`
  padding: 1rem;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header/>
        <Article>
          <FormContainer/>
          <ListContainer/>
        </Article>
      </Wrapper>
   )
  }
}

export default App;