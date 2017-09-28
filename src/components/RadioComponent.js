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
  display: block; 
`;

const Select = styled.select`
  border: 1px solid ${oc.gray[7]};
`;

const RadioComponent = (props) => {
  return (
    <Wrapper>

      <Label for={props.id}>{props.label}</Label>
      <Select name={props.name}
                    value={props.value}
                    onChange={props.onChange}>
        <option value="1">용산</option>
        <option value="2">상암</option>
      </Select>


    </Wrapper>
  )
};

RadioComponent.propTypes = {
  label: PropTypes.string
};

RadioComponent.defaultProps = {
  label: "입력 Input 라벨"
};

export default RadioComponent;