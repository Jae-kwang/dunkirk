import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const StyledSelect = styled.select`
  border: 1px solid ${oc.gray[7]};
`;

const Select = (props) => {
  return (
    <label>
      {props.label} :
      <StyledSelect name={props.name}
                    value={props.value}
                    onChange={props.onChange}>
        <option value="1">용산</option>
        <option value="2">상암</option>
      </StyledSelect>
    </label>
  )
};

Select.propTypes = {
  label: PropTypes.string
};

Select.defaultProps = {
  label: "입력 Input 라벨"
};

export default Select;