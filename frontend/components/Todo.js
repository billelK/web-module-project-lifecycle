import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
         <h4 onClick={() => this.props.toggleCompleted(this.props.todo)}>{this.props.todo.completed ? "☑" : "☐"} {this.props.todo.name} </h4>
      </div>
      
    )
  }
}
