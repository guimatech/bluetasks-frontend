import { Component } from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskListTable from './components/TaskListTable';
import TaskForm from './components/TaskForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <div className='container' style={{ marginTop: 20 }}>
            <Routes>
              <Route exact path='/form' element={<TaskForm />} />
              <Route path='/' element={<TaskListTable />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
