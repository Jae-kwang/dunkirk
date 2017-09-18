import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const StyledBtn = styled.button`
  border: 1px solid ${oc.gray[7]};
  border-radius: 4px;
  padding: 0.25em 1em;
  background: transparent;
  color: ${oc.gray[7]};
  font-size: 16px;
`;

const Button = (props) => {
  return (
    <StyledBtn>{props.children}</StyledBtn>
  )
};

export default Button;