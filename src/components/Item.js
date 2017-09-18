import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  border: 1px solid ${oc.gray[7]};
  padding: 10px;
  text-align: center;
  margin-top: 10px;
  border-radius: 4px;
`;

const Item = (info) => {

  const { movie } = info;

  return (
    <Wrapper>
      <div>{movie.title}</div>
    </Wrapper>
  )
};

export default Item;