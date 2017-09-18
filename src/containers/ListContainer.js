import React, { Component } from 'react';
import axios from 'axios';

import Item from '../components/item';

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
      <div>
        <header>등록된 영화 목록</header>
        {
          this.state.list.map((data) => {
            return(
              <Item movie={data}/>
            )
          })
        }
      </div>
    );
  }
};

export default ListContainer;
