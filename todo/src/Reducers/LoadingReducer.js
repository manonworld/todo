import SharedAction from '../Actions/SharedAction';

class LoadingReducer {

    static loading = ( state = true, action ) => {
        switch ( action.type ) {
            case SharedAction.RECEIVE_DATA:
                return false;
            default:
                return state;
        }
    };

}

export default LoadingReducer;
