
import React from 'react'


class ColoredContainerButton extends React.Component {
    render () {
      let containerStyle = {
        backgroundColor: this.props.color
      }
      return <div className="container" style={containerStyle}></div>
    }
  }

  export default ColoredContainerButton