import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

// https://scotch.io/tutorials/google-material-design-input-boxes-in-css3
const Label = styled.label`
  color: ${oc.gray[9]};
  display: block; 
`;

const Input = styled.input`
  padding: 10px;
  border: solid 1px #dcdcdc;
  transition: box-shadow 0.3s, border 0.3s;
  outline: none;
   
  &:focus {
    border: solid 1px #707070;
    box-shadow: 0 0 5px 1px #969696;
  }
`;

const InputComponent = (props) => {
  return (
  <div>
    <Label for={props.id}>{props.label}</Label>
    <Input
      id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    ></Input>
  </div>
  )
};

InputComponent.propTypes = {
  label: PropTypes.string
};

InputComponent.defaultProps = {
  type: 'text',
  label: "입력 Input 라벨"
};



export default InputComponent;