import React, { Component } from "react";

class Todo extends Component {
    // FIX ME!
    render(){
        return <li className="Todo">{ this.props.task }</li>
    }
}

export default Todo;