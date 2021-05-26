import React, { Component } from 'react'
import "./ElegantSlideshowCustomCursor.css";

export class ElegantSlideshowCustomCursor extends Component {
  render() {
    return (
      <div className="customCursor">
        {/* Top */}
        <div className="customCursorTop"></div>
        <div className="customCursorBottom"></div>
      </div>
    )
  }
}

export default ElegantSlideshowCustomCursor;