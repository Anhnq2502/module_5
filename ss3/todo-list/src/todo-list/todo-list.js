import React, {Component} from "react";

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            item: ''
        }
    }
    handleChange = (event) => {
        this.setState({item: event})
    }
    handleAddItem = () => {
        this.setState({
            todoList: [...this.state.todoList, this.state.item],
            item: ''
        })
    }
    render() {
        return (
           <div>
               <h1>Todo List</h1>
               <input value={this.state.item} onChange={(event) => this.handleChange(event.target.value)}/>
               <button onClick={() => this.handleAddItem()}>Add</button>
               <ol>
                   {this.state.todoList.map((item, index) => (
                       <li key={index}>
                           {item}
                       </li>
                   ))}
               </ol>
           </div>
        )
    }
}
export default TodoList