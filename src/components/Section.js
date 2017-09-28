import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Section = styled.section`
  padding: 1.1rem;
`;

const Header = styled.header`  
  h2 {
    color: ${oc.gray[7]}; 
    margin: 0 !important;
    padding: 0.5rem 0;
  }
`;

const Layout = (props) => (
  <Section>
    <Header>
      <h2>{props.header}</h2>
    </Header>
    {props.children}
  </Section>
);

export default Layout;