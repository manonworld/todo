import React from 'react';

class List extends React.Component {

    render () {
        return (
            <ul>
                {this.props.items.map(( item ) => {
                    return (<li key={item.id}>
                        <span 
                            onClick={() => this.props.toggle && this.props.toggle( item.id )}
                            style={{ textDecoration: item.complete ? 'line-through' : 'none' }}
                        >
                            { item.name }
                        </span>
                        &nbsp;&nbsp;
                        <button onClick = { () => this.props.remove( item ) }>
                            x
                        </button>
                    </li>
                )})}
            </ul>
        );
    }
}

export default List;
