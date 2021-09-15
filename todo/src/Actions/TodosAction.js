import API from 'goals-todos-api';

class TodosAction {

    static ADD_TODO     = 'ADD_TODO';
    static REMOVE_TODO  = 'REMOVE_TODO';
    static TOGGLE_TODO  = 'TOGGLE_TODO';

    static addTodo = ( todo ) => ({
        type: this.ADD_TODO,
        todo,
    });

    static removeTodo = ( id ) => ({
        type: this.REMOVE_TODO,
        id
    });

    static toggleTodo = ( id ) => ({
        type: this.TOGGLE_TODO,
        id
    });

    static handleAddTodo = ( name, callBack ) => ( dispatch ) => (
        API.saveTodo( name )
            .then(( todo ) => {
                dispatch( this.addTodo( todo ) );
                callBack();
            }).catch (( error ) => {
                alert( JSON.stringify( error ) );
            })
    );

    static handleDeleteTodo = ( todo ) => ( dispatch ) => {
        dispatch( this.removeTodo( todo.id ) );
        return API.deleteTodo( todo.id )
            .catch( ( error ) => {
                dispatch( this.addTodo( todo ) );
                alert( JSON.stringify( error ) );
            });
    };

    static handleToggle = ( id ) => ( dispatch ) => {
        dispatch( this.toggleTodo( id ) );
        return API.saveTodoToggle( id )
            .catch( ( error ) => {
                dispatch( this.toggleTodo( id ) );
                alert( JSON.stringify( error ) );
            });
    };

}

export default TodosAction;
