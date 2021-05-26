import React, { Component } from 'react';
import classnames from 'classnames';
import './ServicesBox.css';

class ServicesBox extends Component {
    render() {

        const { showBox } = this.props;

        return (
            <div className={classnames("lowerRightBox servicesDivWrapper", {
                "show": showBox
            })}>
                <div className="servicesDiv">
                    <p>Services</p>
                    <p className="cateringServicesText">Catering Services</p>
                    <p className="cateringDescriptionText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis accusantium nostrum commodi.</p>
                    <ul>
                        <li>Business Events</li>
                        <li>Birthdays</li>
                        <li>Weddings</li>
                        <li>{"Party & Others"}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ServicesBox;