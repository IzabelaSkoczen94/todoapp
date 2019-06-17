import React from 'react';

const Task= (props) => {
        return (
            <div>
            <p>
            <strong>{props.task.text}</strong> -do<span>{props.task.date}</span>
            <button onClick={() => console.log("zadanie zrobione") }>Zostało zrobione</button>
            <button onClick={() => console.log("zadanie usunięte") }>x</button>
            </p>
            </div>
        );
    }

export default Task;