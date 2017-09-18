import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.header`
  background: ${oc.gray[7]};
  color: white; 
  text-align: center;
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