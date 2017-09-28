import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Button = styled.button`
  border: 1px solid ${oc.gray[7]};
  border-radius: 4px;
  padding: 0.25em 1em;
  background: transparent;
  color: ${oc.gray[7]};
  font-size: 16px;
`;

const ButtonComponent = (props) => {
  return (
    <Button>{props.children}</Button>
  )
};

export default ButtonComponent;