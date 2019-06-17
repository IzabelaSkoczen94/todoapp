import React from 'react';
import Task from './Task';

const TaskList= (props) => {

    //mapowanie pojedynczego zadania
    const task = props.tasks.map(task => 
        <Task key={task.id}
        task={task} />
    )
    return ( 
        <>
        <div>
         <h3>Zadania do zrobienia</h3>
         {task} 
        </div>
        <hr />
        </>
    );
}
 
export default TaskList;