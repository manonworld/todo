import API from 'goals-todos-api';

class GoalsAction {

    static ADD_GOAL = 'ADD_GOAL';
    static REMOVE_GOAL = 'REMOVE_GOAL';

    static addGoal = ( goal ) => ({
        type: this.ADD_GOAL,
        goal,
    });

    static removeGoal = ( id ) => ({
        type: this.REMOVE_GOAL,
        id
    });

    static handleAddGoal = ( name, callBack ) => ( dispatch ) => (
        API.saveGoal( name )
            .then(( goal ) => {
                dispatch( this.addGoal( goal ) );
                callBack();
            }).catch( ( error ) => alert( JSON.stringify( error ) ) )
    );

    static handleDeleteGoal = ( goal ) => ( dispatch ) => {
        dispatch( this.removeGoal( goal.id ) );
        return API.deleteGoal( goal.id )
            .catch( ( error ) => {
                dispatch( this.addGoal( goal ) );
                alert( JSON.stringify( error ) );
            });
    }

}

export default GoalsAction;
