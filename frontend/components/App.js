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
      inputVal: "",
      message: ""
    }
  }

  componentDidMount() {
    axios.get(URL)
      .then( res => {
        this.setState({todos: res.data.data})
        this.setState({message: res.data.message})
        // this.setState({message: })
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
      .then(res => this.setState({message: res.data.message}))
    this.setState({inputVal: ""})

  }

  toggleCompleted = (todo) => {
    axios.patch(`${URL}/${todo.id}`)
      .then(res => {
        console.log(res.data.data)
        let objectIndex = this.state.todos.findIndex(todo => todo.id === res.data.data.id)
        console.log(objectIndex);
        let firstHalf = this.state.todos.slice(0,objectIndex)
        console.log(firstHalf);
        let secondHalf = this.state.todos.slice(objectIndex + 1)
        console.log(secondHalf);

        this.setState({todos: [...firstHalf,res.data.data,...secondHalf]})
      })
      
  }

  render() {
    return (
      <>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <Form inputVal={this.state.inputVal} onChange={this.onChange} onSubmit={this.onSubmit}/>
      </>
    )
  }
}
