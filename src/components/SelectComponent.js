import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Label = styled.label`
  color: ${oc.gray[9]};
  display: block; 
`;

const StyledSelect = styled.select`
  border: 1px solid ${oc.gray[7]};
`;

const SelectComponent = (props) => {
  return (
    <label>
      <Label for={props.id}>{props.label}</Label>
      <StyledSelect name={props.name}
                    value={props.value}
                    onChange={props.onChange}>
        <option value="1">용산</option>
        <option value="2">상암</option>
      </StyledSelect>
    </label>
  )
};

SelectComponent.propTypes = {
  label: PropTypes.string
};

SelectComponent.defaultProps = {
  label: "입력 Input 라벨"
};

export default SelectComponent;