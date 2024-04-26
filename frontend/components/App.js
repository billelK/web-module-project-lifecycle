import React from 'react'
import axios from "axios"
import TodoList from './TodoList';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state= {
      todos: [],
      inputVal: ""
    }
  }

  componentDidMount() {
    axios.get(URL)
      .then( res => {
        this.setState({todos: res.data.data})
      })
      .catch( error => console.log("NOOOOO",error))
  }

  onChange = (e) => {
    let {value} = e.target
    this.setState({inputVal: value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    axios.post(URL,{name: this.state.inputVal})
  }
  render() {
    return (
      <>
        <TodoList todos={this.state.todos}/>
        <Form inputVal={this.state.inputVal} onChange={this.onChange} onSubmit={this.onSubmit}/>
      </>
    )
  }
}
