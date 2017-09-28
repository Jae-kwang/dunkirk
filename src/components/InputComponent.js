import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin-top: 1.2rem;
`;

const Label = styled.label`
  color: ${oc.gray[7]};
  font-size: 1.3rem;
  display: inline-block;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.4rem;
  padding: 6px 12px;
  font-size: 14px;
  color: #555;
  border: 1px solid #ccc;
  border-radius: 2px;
  outline: none;
`;

const InputComponent = (props) => {
  return (
  <Wrapper>
    <Label for={props.id}>{props.label}</Label>
    <Input
      id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    ></Input>
  </Wrapper>
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