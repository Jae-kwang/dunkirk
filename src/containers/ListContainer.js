import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

import Section from '../components/Section';

import Item from '../components/item';

const Wrapper = styled.div`
  margin-top: 1.2rem;
`;

class ListContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  async componentDidMount() {
    const resData = await axios.get('/api/list');
    this.setState({
      list: resData.data
    });
  }

  render () {
    return (
      <Section header="등록된 영화 목록">
        {
          this.state.list.map((data) => {
            return(
              <Item movie={data}/>
            )
          })
        }
      </Section>
    );
  }
};

export default ListContainer;
