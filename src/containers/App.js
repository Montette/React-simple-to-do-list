import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import Todo from '../components/Todo';
import Form from '../components/Form';
import { hot } from 'react-hot-loader';
import img from '../../img/paper.png';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                        text: 'learn React'
                    }, {
                    id: 2,
                        text: 'bake a cake'
                    }, {
                    id: 3,
                        text: 'feed my dog'
                    }
            ],
            newTask: ''
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    
    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
    }

    onChangeHandle(event) {
        this.setState({newTask: event.currentTarget.value});
      }

    onSubmit(event) {
        this.addTodo(this.state.newTask);
        event.preventDefault();
        this.state.newTask = '';
    }
    
    render() {
    return (
        <div className={style.TodoApp}>
            <Title
                title="Let's do this"
                tasksAmount={this.state.data.length}
            />
            <Form
                data={this.state.data}
                add = {this.addTodo.bind(this)}
                placeholder = {"Add task..."}
                onChange = {this.onChangeHandle.bind(this)}
                onSubmit = {this.onSubmit.bind(this)}
            />
            <TodoList
                data={this.state.data}
                remove = {this.removeTodo.bind(this)}
            />
        </div>
    );
}
}

export default hot(module)(App);