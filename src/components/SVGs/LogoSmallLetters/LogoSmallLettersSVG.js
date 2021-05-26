import React, { Component } from 'react'
import classnames from 'classnames';
import './LogoSmallLettersSVG.css';

export class LogoSmallLettersSVG extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }
    
    componentDidUpdate() {
        const {loadAnim} = this.props;
		const {drawLetters, fillLetters} = this.state;
		if (loadAnim && (!drawLetters || !fillLetters)) {
            // console.log(`sLetters loadAnim ${loadAnim}`)
			// console.log(`sLetters drawLetters ${drawLetters}`)
			// console.log(`sLetters fillLetters ${fillLetters}`)
			setTimeout(() => {
                this.setState({drawLetters: true});
            }, 2000);
            setTimeout(() => {
                this.setState({fillLetters: true});            
            }, 3000);
            // console.log("small letters update");
        }
    }
    
    render() {

        const { drawLetters, fillLetters } = this.state;
        
        return (
            <svg className={classnames("logoSmallLettersSVG", {
                "drawLogoSmallLetters" : drawLetters
                , "fillLogoSmallLetters" : fillLetters
            })} version="1.1" id="Layer_2_xA0_Image_1_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" viewBox="0 0 68.76 21.24" style={{"enableBackground":"new 0 0 68.76 21.24"}} xmlSpace="preserve">
            <g>
            <path className="logoSmallLettersPath" d="M57.06,21.6c-0.05-0.41-0.35-0.72-0.33-1.18c0.02-0.66,0.09-1.21,0.89-1.28c0.69-0.06,0.89-0.58,0.92-1.13
            c0.06-1.41-0.16-2.87,0.12-4.23c0.47-2.3-0.08-4.65,0.53-6.92c0.29-1.1,0.01-1.63-1.14-2.04c-0.72-0.26-1.06-0.58-0.99-1.37
            c0.08-0.84,0.09-0.99,0.92-0.9c1.1,0.12,2.09-0.48,3.18-0.35c0.32,0.04,0.44-0.29,0.61-0.55c0.76-1.17,1.97-1.23,2.84-0.12
            c0.37,0.48,0.76,0.78,1.34,0.68c0.66-0.11,1.24,0.34,1.92,0.17c0.47-0.12,0.95,0.09,1.02,0.69c0.08,0.73-0.33,1.44-0.89,1.55
            c-0.29,0.06-0.6,0.1-0.89,0.06c-1.41-0.2-2.81,0.33-4.24,0.02c-0.73-0.16-1.48,0.4-1.56,0.89c-0.12,0.76,0.38,1.46,1.22,1.66
            c1.34,0.32,2.69,0.46,4.05,0.09c0.23-0.06,0.47-0.07,0.71-0.07c1.11-0.01,1.77,0.63,1.51,1.68c-0.41,1.66-0.37,3.29,0,4.94
            c0.08,0.37-0.03,0.7-0.18,1.04c-0.14,0.33-0.19,0.72-0.04,1.05c0.48,1,0.13,1.95-0.03,2.95c-0.24,1.53-0.85,2.42-2.52,2.32
            c-0.11-0.01-0.24,0.22-0.36,0.34c-0.96,0-1.92,0-2.88,0c-0.05-0.42-0.84-0.43-0.5-1.16c0.41-0.9,0.3-0.94,1.33-0.98
            c0.53-0.02,1.06,0.05,1.59-0.14c1.1-0.41,1.22-0.47,1.23-1.65c0.02-2.22-0.01-4.43,0.02-6.65c0.01-0.7-0.27-1.09-0.88-1.39
            c-1.15-0.57-3.59-0.33-4.42,0.5c-0.12,0.12-0.24,0.32-0.22,0.46c0.12,1.03-0.33,1.99-0.37,2.98c-0.06,1.72-0.1,3.44-0.26,5.17
            c-0.12,1.24-0.61,1.99-1.69,2.45c-0.22,0.1-0.45,0.14-0.53,0.41C57.78,21.6,57.42,21.6,57.06,21.6z"/>
            <path className="logoSmallLettersPath" d="M5.19,7.98c1.02,0,2.04,0.01,3.06-0.01c0.35-0.01,0.72-0.02,1.06-0.12c0.28-0.09,0.54-0.3,0.52-0.66
            C9.81,6.88,9.61,6.51,9.34,6.52C8.33,6.57,7.4,5.89,6.37,6.24c-1.21,0.42-2.4-0.16-3.61-0.09c-0.5,0.03-0.73-0.25-0.73-0.79
            c0-0.62,0.37-0.64,0.82-0.64c1.62,0.01,3.24,0.01,4.86,0.01c0.48,0,0.96-0.01,1.44-0.06c0.27-0.03,0.66,0,0.66-0.42
            c0-0.32-0.21-0.56-0.49-0.69C8.45,3.2,7.62,2.75,6.6,2.82C5.41,2.91,4.2,2.84,3,2.84c-0.36,0-0.73,0.03-1.08-0.04
            C1.63,2.73,1.38,2.52,1.37,2.18C1.35,1.83,1.58,1.6,1.89,1.54C2.23,1.47,2.6,1.5,2.96,1.5c1.8-0.01,3.6,0,5.4-0.02
            c0.47,0,0.9,0,1.35-0.32c0.82-0.58,1.92-0.59,2.82-0.05c0.56,0.33,1.1,0.4,1.71,0.4c1.68-0.01,3.36-0.01,5.04,0
            c0.46,0,1.02-0.12,1.05,0.61c0.03,0.72-0.28,1.05-1.1,1.07c-1.26,0.03-2.52-0.02-3.78,0.01c-0.83,0.02-1.69-0.21-2.46,0.27
            c-0.2,0.12-0.45,0.18-0.46,0.48c-0.01,0.31,0.27,0.35,0.45,0.49c0.3,0.24,0.65,0.35,1.01,0.29c1.36-0.22,2.69,0.45,4.05,0.12
            c0.1-0.02,0.23,0.06,0.34,0.11c0.38,0.2,1.03-0.13,1.17,0.55c0.1,0.46-0.48,0.97-1.3,0.89c-1.56-0.16-3.1-0.02-4.66,0.03
            c-0.43,0.01-0.88,0.01-1.01,0.53c-0.11,0.44,0.42,1,0.99,1.01c1.68,0.03,3.36,0.01,5.04,0.01c0.42,0,0.84-0.01,1.26,0.02
            c0.59,0.05,0.79,0.45,0.83,0.98c0.05,0.58-0.32,0.64-0.78,0.73c-2.31,0.45-4.6,0.43-6.93,0.08c-1.39-0.21-2.81,0.2-4.23-0.05
            C8.28,9.64,7.72,9.92,7.22,10.1c-0.27,0.09-0.55,0.34-0.35,0.68c0.12,0.21,0.07,0.52,0.53,0.57c2.13,0.26,4.27,0.2,6.41,0.23
            c0.69,0.01,1.37-0.11,1.84-0.55c0.42-0.4,0.82-0.24,1.23-0.35c0.65-0.17,0.91,0.14,1.14,0.56c0.27,0.5-0.19,0.77-0.49,1.02
            c-0.56,0.47-1.21,0.68-1.98,0.66c-1.68-0.04-3.36,0.05-5.04-0.03c-1.02-0.05-1.85,0.34-2.72,0.73c-0.23,0.11-0.43,0.2-0.41,0.49
            c0.02,0.26,0.21,0.5,0.42,0.53c0.88,0.13,1.69,0.55,2.6,0.54c1.74-0.01,3.48,0,5.22-0.02c0.78-0.01,1.48-0.14,2.01-0.87
            c0.52-0.73,1.61-0.71,2.15-0.1c0.33,0.37,0.07,1.5-0.48,1.92c-0.39,0.29-0.83,0.41-1.34,0.39c-1.14-0.04-2.28-0.02-3.42-0.01
            c-1.57,0.01-2.27,0.61-2.49,2.17C11.97,19.08,12,19.51,12,19.93c0,0.59-0.28,0.84-0.87,0.9c-0.62,0.07-0.93-0.24-1.03-0.75
            c-0.11-0.52-0.1-1.07-0.11-1.6c-0.03-1.91-0.1-1.99-2.08-1.99c-1.62,0-3.24,0.02-4.86,0c-0.37,0-0.92,0.2-0.99-0.44
            c-0.06-0.58-0.22-1.22,0.52-1.56c0.33-0.15,0.64-0.31,0.96-0.48c0.27-0.14,0.56-0.29,0.55-0.63c-0.01-0.4-0.36-0.38-0.64-0.47
            c-1.27-0.37-1.45-0.93-0.63-2.01c0.52-0.68,0.52-0.69-0.18-1.05C2.26,9.67,1.89,9.41,1.5,9.36C0.84,9.26,0.95,8.84,0.98,8.43
            c0.03-0.54,0.46-0.45,0.8-0.46C2.92,7.96,4.06,7.97,5.19,7.98C5.19,7.97,5.19,7.98,5.19,7.98z"/>
            <path className="logoSmallLettersPath" d="M25.8,12.96c0-1.98-0.01-3.96,0-5.94c0.01-1.34,0.03-1.28,1.47-1.5c0.66-0.1,1.15,0.29,1.74,0.29
            c0.96-0.01,1.92-0.03,2.88,0.01c0.73,0.03,1.29-0.16,1.62-0.85c0.15-0.32,0.28-0.68,0.76-0.61c0.57,0.09,1.29-0.25,1.68,0.34
            c0.8,1.21,1.97,1.16,3.19,1.11c1.42-0.05,2.83,0.05,4.25-0.21c0.81-0.15,0.8-0.03,0.77,0.77c-0.06,1.37-0.04,2.75-0.06,4.13
            c-0.01,0.96-0.02,1.92-0.06,2.88c-0.02,0.52,0.21,1.2-0.35,1.48c-0.62,0.3-1.31,0.75-2.02,0.51c-1.35-0.46-2.73-0.25-4.09-0.3
            c-0.65-0.02-1.3-0.03-1.94,0.24c-0.55,0.23-1.18,0.16-1.77,0.04c-0.17-0.03-0.34-0.22-0.49-0.19c-1.35,0.22-2.68-0.13-4.02-0.11
            c-0.55,0.01-0.88,0.24-1.1,0.74c-0.97,2.19-0.07,3.61,2.37,3.7c0.6,0.02,1.2,0,1.8,0.02c0.33,0.01,0.76-0.1,0.81,0.43
            c0.05,0.49,0.06,1.13-0.54,1.16c-2.02,0.1-4.06,0.35-6.05-0.28c-0.79-0.25-0.85-0.88-0.84-1.56c0.01-1.08,0-2.16,0-3.24
            C25.8,15,25.8,13.98,25.8,12.96C25.8,12.96,25.8,12.96,25.8,12.96z M36.35,9.74c1.82,0,3.26,0.01,4.7,0c0.43,0,0.9-0.04,0.93-0.6
            c0.03-0.5,0.2-1.07-0.53-1.35c-0.55-0.21-1.03-0.65-1.65-0.62c-1.9,0.1-3.82-0.3-5.71,0.26c-0.6,0.18-1.3,0.13-1.95-0.11
            C31.33,7.03,30.49,7,29.7,7.4c-0.57,0.29-1.61,0.18-1.46,1.23c0.14,0.99,1.1,0.86,1.74,0.87C32.23,9.54,34.47,9.96,36.35,9.74z
            M35.21,11.46C35.21,11.46,35.21,11.46,35.21,11.46c-1.67,0-3.35,0-5.02,0.01c-0.42,0-0.84-0.02-1.25,0.04
            c-0.37,0.06-0.64,0.31-0.68,0.72c-0.04,0.35,0.21,0.57,0.47,0.69c0.59,0.27,1.2,0.48,1.89,0.46c1.31-0.04,2.63-0.01,3.94,0
            c0.66,0,1.39-0.17,1.96,0.07c1.63,0.68,3.16,0.03,4.73-0.12c0.44-0.04,0.76-0.37,0.74-0.87c-0.02-0.55-0.32-0.89-0.86-0.96
            c-0.35-0.05-0.72-0.03-1.07-0.03C38.44,11.45,36.83,11.46,35.21,11.46z"/>
            <path className="logoSmallLettersPath" d="M51.36,20.81c-0.6,0-1.2-0.01-1.8,0c-0.64,0.02-1.03-0.21-1.08-0.9c-0.04-0.62,0.18-0.98,0.84-1.15
            c1.3-0.32,1.31-0.35,1.32-1.61c0.01-3.29-0.02-6.59,0.02-9.88c0.01-0.89-0.18-1.48-1.14-1.72c-0.89-0.22-0.64-1.01-0.67-1.63
            c-0.02-0.67,0.35-1.01,0.99-0.99c0.96,0.03,0.93-0.74,1.12-1.33c0.1-0.31-0.09-0.76,0.45-0.82C52,0.73,52.5,0.85,52.66,1.51
            c0.18,0.72,0.42,1.26,1.26,1.52c0.72,0.22,0.8,1.56,0.23,2.16c-0.2,0.21-0.46,0.43-0.73,0.48c-0.61,0.12-0.73,0.49-0.75,1.03
            c-0.08,2.23-0.14,4.47-0.3,6.7c-0.08,1.12,0.29,2.18,0.18,3.33c-0.08,0.82,0.3,1.93,1.57,2.06c0.22,0.02,0.43,0.19,0.62,0.32
            c0.53,0.39,0.53,0.67,0.03,1.09c-0.47,0.39-0.94,0.69-1.61,0.62C52.56,20.77,51.96,20.81,51.36,20.81
            C51.36,20.81,51.36,20.81,51.36,20.81z"/>
            <path className="logoSmallLettersPath" d="M35.16,0.78c1.74,0,3.47,0.02,5.21-0.01c0.89-0.01,1.62,0.22,2.2,0.93c0.49,0.59,1.05,1.1,1.86,1.27
            c0.55,0.12,0.78,0.57,0.63,1.1c-0.13,0.44-0.27,0.93-0.9,0.96c-0.9,0.04-1.71,0.11-2.42-0.76c-1.12-1.36-2.59-2.02-4.43-1.51
            c-0.32,0.09-0.72,0.02-1.06-0.06c-1.6-0.35-3.21-0.19-4.82-0.18c-1.04,0.01-1.98,0.52-2.72,1.17c-1.02,0.9-2.12,0.58-3.23,0.56
            c-0.39-0.01-0.48-0.33-0.46-0.63c0.02-0.39-0.12-0.99,0.46-1c1.26-0.01,2.12-0.73,2.96-1.48c0.41-0.36,0.84-0.38,1.33-0.38
            c1.8,0.01,3.59,0,5.39,0C35.16,0.77,35.16,0.78,35.16,0.78z"/>
            <path className="logoSmallLettersPath" d="M41.15,21.18c-0.3,0-0.6-0.03-0.9,0.01c-2.17,0.29-3.77-0.8-5.28-2.14c-0.36-0.32-0.66-0.72-1.06-0.97
            c-0.76-0.46-1.43-0.99-1.89-1.77c0.84-0.03,1.67-0.08,2.51-0.09c0.29,0,0.63,0.01,0.87,0.15c1.21,0.67,2.52,0.61,3.83,0.61
            c0.71,0,1.42,0.04,2.02-0.52c0.49-0.45,1.15-0.15,1.73-0.2c0.22-0.02,0.51-0.06,0.61,0.22c0.1,0.27-0.14,0.44-0.3,0.6
            c-0.89,0.92-1.82,1.74-3.24,1.58c-0.18-0.02-0.53-0.04-0.47,0.33c0.04,0.26,0.28,0.43,0.51,0.44c0.72,0.05,1.44,0.03,2.16,0.06
            c0.53,0.02,1.07-0.06,1.59,0.17c0.45,0.2,0.61,0.48,0.57,0.97c-0.05,0.5-0.37,0.57-0.74,0.57c-0.84,0.01-1.68,0-2.52,0
            C41.15,21.21,41.15,21.2,41.15,21.18z"/>
            <path className="logoSmallLettersPath" d="M18.24,20.79c-1.48,0.02-2.17-0.44-2.72-1.77c-0.24-0.58-0.04-0.87,0.59-0.95c0.51-0.06,0.92,0.14,1.36,0.33
            c0.81,0.35,1.44,1.04,2.35,1.22c0.21,0.04,0.39,0.28,0.39,0.55c0,0.35-0.27,0.57-0.55,0.61C19.21,20.84,18.72,20.79,18.24,20.79z"
            />
            <path className="logoSmallLettersPath" d="M2.64,20.81c-0.24,0-0.48,0-0.72,0c-0.35,0.01-0.58-0.11-0.59-0.49c-0.01-0.34-0.14-0.75,0.39-0.83
            c0.84-0.14,1.54-0.51,2.16-1.1c0.36-0.34,0.86-0.38,1.35-0.35c0.61,0.04,0.75,0.24,0.48,0.77C4.96,20.26,4.11,20.81,2.64,20.81z"/>
            </g>
            </svg>
            
            )
        }
    }
    
    export default LogoSmallLettersSVG;