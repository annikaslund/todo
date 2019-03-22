import React, { Component } from "react";

class EditTodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.editTodo(this.state);
        this.setState({
            task: ""
        })
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
    render(){
        return (
            <div className="EditTodoForm" onSubmit={ this.handleSubmit }>
                <form>
                    <label htmlFor="Task">Task:</label>
                    <input name="task" value={ this.state.task } onChange={ this.handleChange }></input>
                    <button>Submit Task</button>
                    
                </form>
            </div>
        );
    }
}
export default EditTodoForm;