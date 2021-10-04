// TODO
// import React from 'react'
// import ReactDOM from 'react-dom'

function TodoList(props) {
  return (
      <ul>
        {props.todos.map(todo =>
          <TodoListItem item={todo} />
          )}
      </ul>
  );
}

function App() {
  return (
    <div>
      <h2>My Todo List</h2>
      <TodoList todos={['Eat', 'Sleep', 'Code', 'Game', 'Cook', 'Practice Piano']}/>
    </div>
  );
}



class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick(event) {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    let style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}





ReactDOM.render(<App />, document.getElementById('app'));