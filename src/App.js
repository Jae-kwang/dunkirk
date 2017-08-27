import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <form action="/ticketing" method="POST">
          <input type="text" name="kk" value="jaekwnag"/>
          <input type="text" name="tt" value="hihi"/>
          <button type="submit">OK!</button>
        </form>
      </div>
    )
  }
}

export default App;