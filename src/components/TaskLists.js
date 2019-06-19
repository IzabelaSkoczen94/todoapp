import React from 'react';
import Task from './Task';

const TaskList= (props) => {

    //mapowanie pojedynczego zadania i przekazanie go do komponentu Task
    // const task = props.tasks.map(task => 
    //     <Task key={task.id}
    //     task={task}
    //     delete={props.delete}
    //     change={props.change} />
    // )

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    console.log(active, done);

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    return ( 
        <>
        <div className="active"> 
         <h3>Zadania do zrobienia</h3>
         {activeTasks.length > 0 ? activeTasks : <p>brak zadan</p> } 
        </div>
        <hr />

        <div className="done">
        <h4>Zadania zrobione <em>({doneTasks.length})</em></h4> 
        {doneTasks.length > 5 && <span style={{fontSize: "10px"}}>Wyświetlonych jest jedynie 5 ostatnich zadan</span>}
        {doneTasks.length > 0 ? doneTasks.slice(0,5) : <p>Jeszcze nie zrobiłeś żadnych zadan</p>}  
        </div>
        </>
    );
}
 
export default TaskList;