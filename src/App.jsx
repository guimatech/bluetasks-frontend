import { Component } from 'react'
import NavBar from './components/NavBar';

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
        <NavBar />
      </div>
    );
  }
}

export default App;
