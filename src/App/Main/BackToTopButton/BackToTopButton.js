import React, { Component } from "react";

import ScrollBackToTop from './ScrollBackToTop'
import ColoredContainerButton from './ColoredContainerButton'
import './buttonscroll.css'


class BackToTopButton extends Component {
    constructor() {
      super();
      
      this.state = {
        colors: ["#044747", "#079191", "#38adad", "#90e3e3", "#d5f7f7"]
      }
    }
    
    render () {
      return (
      <div className="long" >
                {
                  this.state.colors.map(function(color) {
                      return <ColoredContainerButton color={color}/>
                  })
                }
                <ScrollBackToTop scrollStepInPx="50" delayInMs="16.66"/>
             </div>
      )
    }
  }
  export default BackToTopButton