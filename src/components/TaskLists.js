import React from 'react';
import Task from './Task';

const TaskList= (props) => {

    //mapowanie pojedynczego zadania i przekazanie go do komponentu Task
    const task = props.tasks.map(task => 
        <Task key={task.id}
        task={task}
        delete={props.delete}
        change={props.change} />
    )
    return ( 
        <>
        <div className="active"> 
         <h3>Zadania do zrobienia</h3>
         {task} 
        </div>
        <hr />

        <div className="done">
        <h3>Zadania zrobione</h3>   
        </div>
        </>
    );
}
 
export default TaskList;