import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  render() {
    return (
      <div className='App'>
        <h1>BlueTasks</h1>
      </div>
    );
  }
}

export default App;
