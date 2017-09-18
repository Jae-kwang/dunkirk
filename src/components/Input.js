import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  border: 1px solid ${oc.gray[7]};
  height: 40px;
  border-radius: 4px;
`;

const Input = (props) => {
  return (
  <label>
    {props.label} :
    <StyledInput
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    ></StyledInput>
  </label>
  )
};

Input.propTypes = {
  label: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  label: "입력 Input 라벨"
};



export default Input;