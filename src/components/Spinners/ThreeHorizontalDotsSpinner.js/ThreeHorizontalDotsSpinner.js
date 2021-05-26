import React, { Component } from 'react';
import './ThreeHorizontalDotsSpinner.css';

class ThreeHorizontalDotsSpinner extends Component {
    render() {
        return (
            <div className="threeHorizontalDotsSpinner">
                <div className="dotsWrapper">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    {/* <div className="dot"></div>
                    <div className="dot"></div> */}
                </div>
                <p>Loading</p>
            </div>
        );
    }
}

export default ThreeHorizontalDotsSpinner;