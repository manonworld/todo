import { combineReducers } from 'redux';
import TodosReducer from './TodosReducer';
import LoadingReducer from './LoadingReducer';
import GoalsReducer from './GoalsReducer';

let todos   = TodosReducer.todos;
let goals   = GoalsReducer.goals;
let loading = LoadingReducer.loading;

export default combineReducers({
    todos,
    loading,
    goals
});