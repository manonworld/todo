import TodosAction from '../Actions/TodosAction';
import SharedAction from '../Actions/SharedAction';

class TodosReducer {

    static todos = ( state = [], action ) => {
        switch ( action.type ) {
            case TodosAction.ADD_TODO:
                return state.concat( [ action.todo ] );
            case TodosAction.REMOVE_TODO:
                return state.filter( ( todo ) => todo.id !== action.id );
            case TodosAction.TOGGLE_TODO:
                return state.map( ( todo ) => todo.id !== action.id ? todo : Object.assign( {  }, todo, { complete: !todo.complete } ) );
            case SharedAction.RECEIVE_DATA:
                return action.todos;
            default:
                return state;
        }
    };

}

export default TodosReducer;
