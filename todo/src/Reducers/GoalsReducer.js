import GoalsAction from '../Actions/GoalsAction';
import SharedAction from '../Actions/SharedAction';

class GoalsReducer {

    static goals = ( state = [], action ) => {
        switch ( action.type ) {
            case GoalsAction.ADD_GOAL:
                return state.concat( [ action.goal ] );
            case GoalsAction.REMOVE_GOAL:
                return state.filter( ( goal ) => goal.id !== action.id );
            case SharedAction.RECEIVE_DATA:
                return action.goals;
            default:
                return state;
        }
    };

}

export default GoalsReducer;
