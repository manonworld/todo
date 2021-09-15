import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import GoalsAction from '../Actions/GoalsAction';

class Goals extends React.Component {

    addItem = ( e ) => {
        e.preventDefault();
        this.props.dispatch( GoalsAction.handleAddGoal( this.input.value, () => this.input.value = '' ) );
    }

    removeItem = ( goal ) => {
        this.props.dispatch( GoalsAction.handleDeleteGoal( goal ) );
    }

    render () {
        return (
            <div>
                <h1>Goals</h1>
                <input 
                    type="text"
                    placeholder="Add Goal"
                    ref={ ( input ) => this.input = input }
                />
                <button onClick={ this.addItem }>Add Goal</button>
                <List
                    items={ this.props.goals }
                    remove={ this.removeItem }
                />
            </div>
        );
    }

}

let ConnectedGoals = connect( ( state ) => ({
    goals: state.goals
}))(Goals);

export default ConnectedGoals;
