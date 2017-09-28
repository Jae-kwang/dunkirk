import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.header`
  background: ${oc.gray[7]};
  text-align: center;
  
  h1 {
    color: white; 
    margin: 0 !important;
    padding: 0.5rem 0;
  }
`;

class Header extends Component {
  render () {
    return (
      <Wrapper>
        <h1>Dunkirk</h1>
      </Wrapper>
    );
  }
}

export default Header;
