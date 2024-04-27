import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    let filtered 
    if (this.props.showAll) filtered = this.props.todos
    else filtered = this.props.todos.filter(todo => todo.completed === false)
    return (
      <div>
        {filtered.map(todo => <Todo key={todo.id} todo={todo} toggleCompleted={this.props.toggleCompleted} />)}
      </div>
    )
  }
}
