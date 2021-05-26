import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
    render() {

        const { item } = this.props;

        return (
            <div className="menuItem">
                <div className="titleAndPrice">
                    <p className="menuItemTitle">{item.foodName}</p>
                    {item.isSpicy ? <div className="isSpicyIconWrapper"><img className="isSpicyIcon" src="misc/chili.svg" alt="Spicy food" /></div> : null}
                    <div className="dottedLine"></div>
                    <div className="menuItemPriceWrapper">
                        <p className="menuItemPrice">{item.foodPrice}</p>
                    </div>
                </div>
                {item.foodDescription ? <p className="description">{item.foodDescription}</p> : null}

            </div>
        );
    }
}

export default MenuItem;