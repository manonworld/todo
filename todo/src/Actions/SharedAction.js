import API from 'goals-todos-api';

class SharedAction {

    static RECEIVE_DATA = 'RECEIVE_DATA';

    static receiveData = ( todos, goals ) => ({
        type: this.RECEIVE_DATA,
        todos,
        goals
    });

    static handleInitialData = () => ( dispatch ) => (
        Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then( ( [ todos, goals ] ) => (
            dispatch( this.receiveData( todos, goals ) )
        ))
    );
}

export default SharedAction;
