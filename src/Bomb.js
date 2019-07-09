// your Bomb code here!
import React, { Component } from 'react';


export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sewcondsLeft: this.props.value
    }
    render () {
      return (
        <div>I am on slide ${this.state.currentSlideIndex}</div>
      )
    }
  }
}
