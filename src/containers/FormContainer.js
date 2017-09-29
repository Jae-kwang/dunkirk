import React, { Component } from 'react';

import axios from 'axios';

import { ButtonComponent, InputComponent, RadioComponent, Section } from 'components';

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
      <Section header="상영관 알림 예약">
        <form onSubmit={this.handleSubmit}>
          <RadioComponent
            id="theater"
            label="영화관"
            name="theater"
            value={this.state.theater}
            onChange={this.handleChange}/>
          <InputComponent
            type="text"
            id="title"
            label="영화제목"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}/>
          <ButtonComponent>등록</ButtonComponent>
        </form>
      </Section>
    )
  }
};

export default FormContainer;