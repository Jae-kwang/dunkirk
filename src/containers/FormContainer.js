import React, { Component } from 'react';

import axios from 'axios';

import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';

class FormContainer extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      theater : ''
    };

  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, theater } = this.state;
    axios.post('/api/test', { title, theater }).then(res => {
      console.log(res);
    });
  }

  render() {

    return (
      <div>
        <header>상영관 알림 예약</header>
        <form action="/ticketing" method="POST" onSubmit={this.handleSubmit}>
          <Select label="영화관" name="theater" value={this.state.theater} onChange={this.handleChange}/>
          <br/>
          <Input label="영화제목" name="title" value={this.state.title} onChange={this.handleChange}/>
          <br/>
          <Button>등록</Button>
        </form>
      </div>

    )
  }
};

export default FormContainer;