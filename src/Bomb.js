// your Bomb code here!
import React, { Component } from 'react';


export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.intialCount
    }
  }
    render () {
      if (this.state.secondsLeft === 0) {
        return (
          <div>Boom!</div>
        )
      }
      else {
        return (
          <div>`${this.state.secondsLeft} seconds left before I go boom!`</div>
        )
      }
    }
}
