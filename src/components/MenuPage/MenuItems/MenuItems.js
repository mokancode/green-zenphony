import React, { Component } from "react";
import "./MenuItems.css";
import classnames from "classnames";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import { setMenuVeilInPosition, setMenuInTransition } from "../../../actions/menuActions";
import { Element, animateScroll as scroll, scroller, Events } from "react-scroll";
import isEmpty from "../../../is-empty";

class MenuItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // refs
    this.veilRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ currentCategory: this.props.menu.menuCategory });
  }

  componentDidUpdate() {
    const { currentCategory, showVeil, hideVeil, showMenuItems } = this.state;
    const { menuCategory, veilInPosition } = this.props.menu;
    const { menuItems, showComponents } = this.props;

    if (!showMenuItems && showComponents) {
      this.setState({ showMenuItems: true });
    }

    // console.log("showVeil: ", this.state.hideVeil);

    if (menuCategory !== currentCategory && !showVeil) {
      this.setState({ showVeil: true });
    }

    if (JSON.stringify(menuItems) !== JSON.stringify(this.state.menuItems) && veilInPosition && !hideVeil) {
      this.setState({ hideVeil: true, showVeil: false, menuItems });

      // scroller.scrollTo("menuItemsDiv", {
      //     duration: 1500,
      //     smooth: 'easeInOutQuad',
      //     containerId: "menuItemsDiv",
      //     offset: 200, // Scrolls to element + 50 pixels down the page
      // }
      // );

      scroll.scrollToTop({
        duration: 0,
        delay: 0,
        smooth: "easeInOutQuad",
        containerId: "menuItemsDiv",
        offset: 0, // Scrolls to element + x pixels down the page
      });
    }
  }

  render() {
    const { menuCategory, veilInPosition, menuInTransition } = this.props.menu;
    const { menuItems } = this.props;
    const { currentCategory, showVeil, hideVeil, showMenuItems } = this.state;

    return (
      <div
        id="menuItemsDiv"
        className={classnames("menuItemsDiv", {
          show: showMenuItems,
        })}
      >
        <p
          className={classnames("menuItemsCategoryName", {
            showVeil: showVeil,
            hideVeil: hideVeil,
          })}
        >
          {currentCategory} <span>Menu</span>
        </p>

        <ul className="menuItemsList">
          <div className="menuVeilWrapper">
            <div
              className={classnames("menuVeil", {
                show: showVeil,
                hide: hideVeil,
              })}
              ref={this.veilRef}
              onAnimationEnd={(e) => {
                if (e.target === this.veilRef.current && showVeil && !hideVeil && !veilInPosition) {
                  this.props.setMenuVeilInPosition(true);
                  this.setState({ currentCategory: menuCategory });
                } else if (hideVeil && e.target === this.veilRef.current && veilInPosition) {
                  this.props.setMenuVeilInPosition(false);
                  this.props.setMenuInTransition(false);
                  this.setState({ hideVeil: false });
                }
              }}
            ></div>
          </div>

          {menuItems.map((item, index) => {
            return <MenuItem key={item.id} item={item} index={index} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
  };
};

export default connect(mapStateToProps, { setMenuVeilInPosition, setMenuInTransition })(MenuItems);
// export default MenuItems;
