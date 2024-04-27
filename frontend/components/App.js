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
      message: "",
      showAll: true
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
      .then(res => this.setState({todos: [...this.state.todos, res.data.data]}))
    this.setState({inputVal: ""})

  }

  toggleCompleted = (todo) => {
    axios.patch(`${URL}/${todo.id}`)
      .then(res => {
        this.setState({
          todos: this.state.todos.map(todo => 
            todo.id === res.data.data.id ? res.data.data : todo
          )
        })
      })
      
  }

  toggleShowAll = () => {
    this.setState({showAll: !this.state.showAll})
  }

  render() {
    return (
      <>
        <TodoList showAll={this.state.showAll} todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <Form showAll={this.state.showAll} toggleShowAll={this.toggleShowAll} inputVal={this.state.inputVal} onChange={this.onChange} onSubmit={this.onSubmit}/>
      </>
    )
  }
}
