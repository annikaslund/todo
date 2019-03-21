import React, { Component } from "react";

class NewTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
    }
    render(){
        return (
            <div className="NewTodoForm" onSubmit={}>
                <form>
                    <label htmlFor="Task">Task:</label>
                    <input name="task" value="" onChange={}></input>
                    <button></button>
                </form>
            </div>
        );
    }
}
export default NewTodoForm;