import React, {Component} from 'react';

import PageHeader from '../template/header';
import TodoForm from './todoform';
import TodoList from './todolist';

export default class Todo extends Component {

    render() {
        return (
            <div>
                <PageHeader name='Todos' small='Cadastro' />
                <TodoForm />
                <TodoList />
            </div> 
        );
    }

};