import React, { Component } from "react";

class Todo extends Component {
    // FIX ME!
    render(){
        return (
            <div>
                <li style={{listStyle: 'none'}} className="Todo">{ this.props.task }</li>
                <button onClick={this.props.remove}>X</button>
            </div>
        )
    }
}

export default Todo;