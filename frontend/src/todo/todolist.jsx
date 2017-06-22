import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {markAsDone, markAsPending, remove} from './todoActions';
import IconButton from '../template/iconbutton';

const TodoList = props => {
    const renderRows = () => {
        const todos = props.todos || [];
        return todos.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton hide={todo.done} style='success' icon='check' onClick={() => props.markAsDone(todo)} />
                    <IconButton hide={!todo.done} style='warning' icon='undo' onClick={() => props.markAsPending(todo)} />
                    <IconButton hide={!todo.done} style='danger' icon='trash' onClick={() => props.remove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
};

const mapStateToProps = state => ({todos: state.todos.list}); // esse objeto vem lá do reducer
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPending, remove}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);