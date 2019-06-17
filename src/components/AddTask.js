import React, {Component} from 'react';


class AddTask extends Component {

    render() {
    return ( 
    <div>
      <div className="form">
        <input type="text" placeholder="dodaj zadanie"  />
        <input type="checkbox"  id="important" />
        <label htmlFor="important">Priorytet</label><br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input type="date"   />
        <br />
        <button >Dodaj</button>
      </div>
    </div>  
    );
}
}
 
export default AddTask;