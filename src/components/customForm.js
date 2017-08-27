import React, { Component } from 'react';

class customForm extends Component {

  render() {

    return (
      <div>
        hihi
        <form action="/api/crawl/add" method="POST">
          <input type="text" name="theater_code" value="1"/>
          <input type="text" name="movie_name" value="브이아이피"/>
          <button type="submit">OK</button>
        </form>
      </div>
    )

  }
}

export default customForm;