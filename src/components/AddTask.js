import React, {Component} from 'react';


class AddTask extends Component {


  state = {
    text: '',
    checked: false,
    date: new Date().toISOString().slice(0,10)

    //new Date().toISOString() ---> "2019-06-19T10:30:41.847Z"


  }

    render() {
    return ( 
    <div>
      <div className="form">
        <input type="text" placeholder="dodaj zadanie"  />
        <input type="checkbox"  id="important" />
        <label htmlFor="important">Priorytet</label><br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input type="date" value={this.state.date} id="start" name="task-start"
         min="2018-01-01" max="2018-12-31"/>
        <br />
        <button >Dodaj</button>
      </div>
    </div>  
    );
}
}
 
export default AddTask;