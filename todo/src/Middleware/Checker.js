import TodosAction from '../Actions/TodosAction';
import GoalsAction from '../Actions/GoalsAction';

class Checker {

    static checker = (store) => ( next ) => ( action ) => {
        if ( action.type === TodosAction.ADD_TODO && action.todo.name.toLowerCase().includes( 'bitcoin' ) ) {
            return alert( 'Nope, that is not a good idea' );
        }

        if ( action.type === GoalsAction.ADD_GOAL && action.goal.name.toLowerCase().includes( 'bitcoin' ) ) {
            return alert( 'Nope, that is not a good idea' );
        }

        return next( action );
    };

}

export default Checker;
