import React, { Component } from 'react';

import MovieTitle from '../components/MovieTitle';
import TheaterList from '../components/TheaterList';

class Form extends Component {

  render() {
    return (
      <form action="/ticketing" method="POST">
        <TheaterList/>
        <MovieTitle/>kkkkkkkkk
        <button type="submit">OK!</button>
      </form>
    )
  }

};

export default Form;