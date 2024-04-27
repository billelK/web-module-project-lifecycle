import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <input type='text'value={this.props.inputVal} onChange={this.props.onChange} />
          <input type='submit'/> 
          <br/>
          <br/>
        </form>
        <button onClick={() => this.props.toggleShowAll()}>{this.props.showAll ? "Hide Completed" : "Show ALL"}</button>
      </>
    )
  }
}
