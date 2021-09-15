import React from 'react'
import { connect } from 'react-redux';
import SharedAction from './Actions/SharedAction';
import ConnectedTodos from './Components/Todos';
import ConnectedGoals from './Components/Goals';

class App extends React.Component {

  componentDidMount () {
    this.props.dispatch( SharedAction.handleInitialData() );
  }

  render () {
    if ( this.props.loading === true ) {
      return <h3>Loading ... </h3>
    }
    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

let ConnectedApp = connect( ( state ) => ({
  loading: state.loading
}))( App );

export default ConnectedApp;
