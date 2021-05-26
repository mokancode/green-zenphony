import React, { Component } from 'react'
import classnames from 'classnames';
import './LogoCircleSVG.css';

export class LogoCircleSVG extends Component {
    constructor(props) {
         super(props);
         this.state= {}
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        const {loadAnim} = this.props;
		const {drawCircle, circleGlow} = this.state;
		if (loadAnim && (!drawCircle || !circleGlow)) {
            // console.log(`circle loadAnim ${loadAnim}`);
			// console.log(`circle drawCircle ${drawCircle}`);
			// console.log(`circle circleGlow ${circleGlow}`);
			setTimeout(() => {
                this.setState({drawCircle: true});
            }, 3500);
            setTimeout(() => {
                this.setState({circleGlow:true});
            }, 5500);
            // console.log("logo circle update");        
        }
    }
    
    render() {

        const { drawCircle, circleGlow } = this.state;
        
        return (
            <svg className={classnames("logoCircleSVG", {
                "drawLogoCircle" : drawCircle
                ,"logoCircleGlow" : circleGlow
            })} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 423 426.19" style={{"enableBackground":"new 0 0 423 426.19"}} xmlSpace="preserve">
            <g id="Background_xA0_Image_1_">
            
            <image style={{"overflow":"visible"}} width="423" height="425" id="Background_xA0_Image" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA
            EAMCAwYAAAONAAADmQAAA73/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX
            Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa
            JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAakBqAMBIgACEQEDEQH/
            xABeAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAABABAQAAAAAAAAAAAAAAAAAA
            kLARAQAAAAAAAAAAAAAAAAAAALASAQAAAAAAAAAAAAAAAAAAAJD/2gAMAwEAAhEDEQAAAKAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9oACAECAAEFADZ//9oACAEDAAEFADZ//9oA
            CAEBAAEFAJl3/9oACAECAgY/ADZ//9oACAEDAgY/ADZ//9oACAEBAQY/ADLv/9k=">
            </image>
            </g>
            <g id="Layer_1_xA0_Image_1_">
            <g>
            <path className="logoCirclePath" d="M422,207c0,5.33,0,10.67,0,16c-1.12,9.9-1.52,19.9-3.65,29.68c-17.76,81.49-66.19,135.46-145.35,161.75
            c-14.91,4.95-30.43,7.01-46.01,8.58c-9.33,0-18.67,0-28,0c-6.58-0.88-13.23-1.4-19.73-2.68C95.8,403.83,40.61,355.1,13.58,274.49
            C8.64,259.75,6.66,244.39,5,229c0-9.67,0-19.33,0-29c0.86-6.42,1.63-12.86,2.6-19.26C20.26,97.57,87.08,27.64,169.93,10.68
            C182.19,8.17,194.59,7.09,207,6c4,0,8,0,12,0c10.41,1.1,20.9,1.31,31.2,3.52c85.83,18.43,140.84,69.91,165.27,154.12
            C419.56,177.77,420.78,192.4,422,207z"/>
            </g>
            </g>
            </svg>
            
            
            )
        }
    }
    
    export default LogoCircleSVG;