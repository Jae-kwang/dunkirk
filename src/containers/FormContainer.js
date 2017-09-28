import React, { Component } from 'react';

import axios from 'axios';

import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';
import SelectComponent from '../components/SelectComponent';

class FormContainer extends Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: '',
      theater : '1'
    };

  }

  handleChange(event) {

    this.setState({[event.target.name]: event.target.value});

  }

  handleSubmit(event) {

    event.preventDefault();

    const { title, theater } = this.state;

    axios.post('/api/ticketing', { title, theater }).then(res => {
      console.log(res);
    });
  }

  render() {

    return (
      <div>
        <header>상영관 알림 예약</header>
        <form action="/ticketing" method="POST" onSubmit={this.handleSubmit}>
          <SelectComponent id="theater" label="영화관" name="theater" value={this.state.theater} onChange={this.handleChange}/>
          <InputComponent id="title" label="영화제목" type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          <ButtonComponent>등록</ButtonComponent>
        </form>
      </div>
    )
  }
};

export default FormContainer;