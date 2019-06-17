import React, {Component} from 'react';


class AddTask extends Component {

      render() {
    return ( 
    <div>
        <form>
            <label htmlFor="addTask">
            <input type="text" id="addTask" name="addTask" placeholder="dodaj zadanie"/>
            </label>
            <label htmlFor="priority">
                <input type="checkbox" id="priority" name="priotity"/> 
                Priorytet
            </label>
            <br />
            <label htmlFor="addTask">
                Do kiedy zrobić
            <input type="text" id="addTask" name="addTask" placeholder="data"/>
            </label>
            <br />
            <button>DODAJ</button>
            <hr />
        </form>
    </div>  
    );
}
}
 
export default AddTask;