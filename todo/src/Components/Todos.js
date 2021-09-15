import React from 'react';
import List from './List';
import TodosAction from '../Actions/TodosAction';
import { connect } from 'react-redux';

class Todos extends React.Component {
    
    static addItem = ( e ) => {
        e.preventDefault();
        this.props.dispatch( 
            TodosAction.handleAddTodo( 
                this.input.value, () => this.input.value = '' 
            ) 
        );
    }

    static removeItem = ( todo ) => {
        this.props.dispatch( TodosAction.handleDeleteTodo( todo ) );
    }
    
    static toggleItem = ( id ) => {
        this.props.dispatch( TodosAction.handleToggle( id ) );
    }

    render () {
        return (
            <div>
                <h1>Todo List</h1>
                <input 
                    type="text" 
                    placeholder="Add Todo" 
                    ref={ (input) => this.input = input }
                />
                <button onClick={ this.addItem }>Add Todo</button>
                <List 
                    toggle={ this.toggleItem } 
                    items={ this.props.todos } 
                    remove={ this.removeItem } 
                />
            </div>
        );
    }
}

let ConnectedTodos = connect( ( state ) => ({
    todos: state.todos
}))( Todos );

export default ConnectedTodos;
