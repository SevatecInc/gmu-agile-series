import React, {Component} from 'react';

import TodoList from '../TodoList/Main';

class TodoHeader extends Component {


  onChange = (e) => {
    this.setState({ thingToAdd: e.target.value});
  }

  handleSave = (e) => {
    this.setState({ thingToAdd : '', thingsToDo: [...this.state.thingsToDo, this.state.thingToAdd] });
  }

  state = {
    thingsToDo: [],
    thingToAdd: ''
  }
  
  render() {
    return (
      <div>
        Todos:
      
        <div className="header">
          
            <input placeholder="enter your todo" 
              value={this.state.thingToAdd} onChange={this.onChange} />

            <button onClick={this.handleSave}>Save Todo</button>
          

          <TodoList items={this.state.thingsToDo} />
        </div>
      </div>
    )
  }

}

export default TodoHeader;