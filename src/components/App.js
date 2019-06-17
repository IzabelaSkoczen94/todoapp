
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

  deleteTask = (id) =>{
    console.log("delete w komponencie App" + id)
    let tasks = this.state.tasks.filter(el => el.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log("change w komponencie App" + id)
  }


  render() {
  return (
    <div className="App">
      <AddTask/>
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
    </div>
  );
}
}

export default App;
