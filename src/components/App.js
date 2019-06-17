
import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskLists';

class App extends Component {

  state = {
    tasks: [
      {id: 0,
      text: 'zaplanować podróż poślubną',
      date: '2019-07-30',
      important: true,
      finishDate: null,
    },
    {id: 1,
      text: 'zamówić kwiaty',
      date: '2019-06-21',
      important: true,
      finishDate: null,
    },

    ]
  }

  render() {
  return (
    <div className="App">
      <AddTask/>
      <TaskList tasks={this.state.tasks}/>
    </div>
  );
}
}

export default App;
