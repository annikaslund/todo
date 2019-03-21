import React, { Component } from "react";
import uuid from "uuid/v4";
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.generateNewTodo = this.generateNewTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    generateNewTodo(todo) {
        let newTodo = { ...todo, id: uuid() };
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }));
    }

    removeTodo(id) {
        this.setState(st => (
            {
                todos: st.todos.filter(t => t.id !== id)
            }
        ))
    }

    render() {
        const todos = this.state.todos.map(t => (
            <Todo key={t.id} task={t.task} remove={() => this.removeTodo(t.id)} />
        ))

        return (
            <div>
                <NewTodoForm makeTodo={this.generateNewTodo} />
                <ul>{todos}</ul>
            </div>
        )
    }
}

export default TodoList;