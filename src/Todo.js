import React, { Component } from "react";

class Todo extends Component {
    render(){
        return (
            <div>
                <li style={{listStyle: 'none'}} className="Todo">{ this.props.task }</li>
                <button onClick={this.props.remove}>X</button>
                <button onClick={this.props.edit}>Edit</button> 
            </div>
        )
    }
}

export default Todo;