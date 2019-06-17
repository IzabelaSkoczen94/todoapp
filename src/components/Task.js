import React from 'react';

const Task= (props) => {
        const {text, date, id} = props.task;
        return (
            <div className={props.task.key}>
            <p>
            <strong>{text}</strong> -do<span>{date}</span>
            <button onClick={() => props.change(id)}>Zostało zrobione</button>
            <button onClick={() => props.delete(id)} >x</button>
            </p>
            </div>
        );
    }

export default Task;