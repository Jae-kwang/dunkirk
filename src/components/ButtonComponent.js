import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Button = styled.button`

  padding: 12px 24px;
  overflow: hidden;
  
  width: 100%;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  
  background-color: ${oc.gray[7]};
  color: #ecf0f1;
  
  transition: background-color .3s;
  
  &:hover, &:focus {
    background-color: ${oc.gray[8]};
  }
`;

const ButtonComponent = (props) => {
  return (
    <Button>{props.children}</Button>
  )
};

export default ButtonComponent;