
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
      active: true,
      important: true,
      finishDate: null,
    },
    {id: 1,
      text: 'zamówić kwiaty',
      date: '2019-06-21',
      active: true,
      important: true,
      finishDate: null,
    },
    {id: 2,
      text: 'przeczytać książke',
      date: '2019-07-30',
      active: true,
      important: true,
      finishDate: null,
    },
    {id: 3,
      text: 'fryzjer',
      date: '2019-06-21',
      active: true,
      important: true,
      finishDate: null,
    },
    {id: 4,
      text: 'iść w góry',
      date: '2019-07-30',
      active: true,
      important: true,
      finishDate: null,
    },
    {id: 5,
      text: 'przejażdżka rowerowa',
      date: '2019-06-21',
      active: true,
      important: true,
      finishDate: null,
    },
    {id: 6,
      text: 'trening',
      date: '2019-06-21',
      active: true,
      important: true,
      finishDate: null,
    },
    ]
  }

  deleteTask = (id) =>{
   
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log("change w stanie elementu o id " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
 
  }

 


  render() {
  return (
    <div className="App">
      <h1>TOD APP</h1>
      <AddTask/>
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
    </div>
  );
}
}

export default App;



