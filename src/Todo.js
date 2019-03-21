import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";


class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            editTodo: false
        }
    }
    render(){
        return (
            <div>
                <li style={{listStyle: 'none'}} className="Todo">{ this.props.task }</li>
                <button onClick={this.props.remove}>X</button>
                { (this.props.editForm) ? <NewTodoForm /> : <button onClick={this.props.edit}>Edit</button> }
            </div>
        )
    }
}

export default Todo;