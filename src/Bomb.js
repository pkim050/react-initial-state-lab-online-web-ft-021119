// your Bomb code here!
import React, { Component } from 'react';


export default class Bomb extends Component {
  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
    render () {
      return (
        <div>I am on slide ${this.state.currentSlideIndex}</div>
      )
    }
  }
}
