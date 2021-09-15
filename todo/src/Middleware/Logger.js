class Logger {

    static logger = ( store ) => ( next ) => ( action ) => {
        console.group( action.type );
            console.log( 'The Action is: ', action );
            const result = next( action );
            console.log( 'The New State is: ', store.getState() );
        console.groupEnd();

        return result;
    };

}

export default Logger;
