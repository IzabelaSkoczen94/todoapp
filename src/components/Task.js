import React from 'react';

const Task= (props) => {

        // const important = {
        //     color: 'red', 
        // }


        const {text, date, id, active, finishDate } = props.task;

        if(active)  {
        return (
            <div className={props.task.key}>
            <p>
            <strong>{text}</strong><em>(zrobić do {date})</em><br/>
            - potwierdzenie wykonania<span>{finishDate}</span>
            <button onClick={() => props.change(id)}>Zostało zrobione</button>
            <button onClick={() => props.delete(id)} >x</button>
            </p>
            </div>
        );
    } else {
        const finish = new Date(finishDate).toLocaleString()
        return (
            <div>
                <p>
                    <strong>{text}</strong><em>(zrobić do {date})</em><br/>
                    - potwierdzenie wykoniania <span>{finish}</span>  
                    <button onClick={() => props.delete(id)} >x</button>
                </p>
            </div>
        );
    }

}

export default Task;