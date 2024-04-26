import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <>
        <form onSubmit={() => this.props.onSubmit}>
          <input type='text'value={this.props.inputVal} onChange={this.props.onChange} />
          <input type='submit'/> 
          <br/>
          <br/>
          <button>Clear completed</button>
        </form>
      </>
    )
  }
}
