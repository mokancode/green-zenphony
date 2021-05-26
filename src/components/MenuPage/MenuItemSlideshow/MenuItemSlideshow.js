import React, { Component } from 'react';
import './MenuItemSlideshow.css';
import classnames from 'classnames';

class MenuItemSlideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate() {
        const { showComponents } = this.props;
        if (showComponents && !this.state.showComponents) this.setState({ showComponents: true });
    }

    render() {

        const { images, index } = this.props;
        const { showComponents } = this.state;

        return (
            <div className={classnames("menuItemSlideshow", {
                "show": showComponents
            })}>
                <div className="foodItemTitleWrapper">
                    <p className="foodItemTitle">Gallery</p>
                </div>

                <div className="slideshowWrapper"></div>
            </div>
        );
    }
}

export default MenuItemSlideshow;