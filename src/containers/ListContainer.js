import React, { Component } from 'react';
import axios from 'axios';

import { Section, Item } from 'components';

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
