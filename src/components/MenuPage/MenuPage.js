/*
Use refurbished ipads with my website to present the menu items with photos
*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
// import { scrollToCategory } from '../../actions/menuActions';
// import { setImgsLoaded } from '../../actions/navbarActions';
import "./MenuPage.css";
import OrderOnline from "./OrderOnline/OrderOnline";
import isEmpty from "../../is-empty";
import MenuItems from "./MenuItems/MenuItems";

// menu items
import appetizers from "./MenuItemsLists/appetizers";
import beverages from "./MenuItemsLists/beverages";
import gourmet from "./MenuItemsLists/gourmet";
import soups from "./MenuItemsLists/soups";
import menuCategoriesList from "./MenuItemsLists/menuCategoriesList";
import MenuCategories from "./MenuCategories/MenuCategories";
import MenuTopGallery from "./MenuTopGallery/MenuTopGallery";
import MenuItemSlideshow from "./MenuItemSlideshow/MenuItemSlideshow";
import ReactVisibilitySensor from "react-visibility-sensor";
import MenuCategoriesMobile from "./MenuCategories/MenuCategoriesMobile";

export class MenuPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfLoadedImages: 0,
      isVisible: true,
      selectedNavItemLeft: "Beverages",
      selectedNavItemRight: "Soups",
      currentlySelectedMobileNavItem: "Beverages",
      currentFoodItemsLeft: {},
      currentFoodItemsRight: {},
    };

    // this.incrementImageLoaded = this.incrementImageLoaded;

    // refs
    this.mobileMenuNavDivRef = React.createRef();
    this.mobileMenuCategoriesDivRef = React.createRef();
  }

  incrementImageLoaded() {
    var { numberOfLoadedImages } = this.state;
    numberOfLoadedImages++;
    this.setState({ numberOfLoadedImages }, () => {
      // console.log(this.state.numberOfLoadedImages);
    });
  }

  componentDidMount() {
    this.setState({ menuItems: beverages, currentCategory: this.props.menu.menuCategory });
  }

  componentDidUpdate() {
    const { menuCategory, veilInPosition } = this.props.menu;
    const { currentCategory } = this.state;

    if (currentCategory !== menuCategory && veilInPosition) {
      // console.log("updatingMenu");
      this.setState({ currentCategory: menuCategory });
      switch (menuCategory) {
        case "Appetizers":
          this.setState({ menuItems: appetizers });
          break;
        case "Beverages":
          this.setState({ menuItems: beverages });
          break;
        case "Soups":
          this.setState({ menuItems: soups });
          break;
        case "Gourmet Specials":
          this.setState({ menuItems: gourmet });
          break;
        default:
          break;
      }
    }
  }

  render() {
    const { menuItems, showLowerPart } = this.state;

    return (
      <div className="menuPageDiv">
        <OrderOnline />

        <MenuTopGallery />

        <ReactVisibilitySensor
          offset={{ bottom: 100 }}
          partialVisibility={true}
          onChange={(isVisible) => {
            if (isVisible) this.setState({ showLowerPart: true });
          }}
        >
          <div className="menuNavAndItemPics">
            <div className="menuAndNav">
              {window.innerWidth >= 720 ? (
                <MenuCategories categories={menuCategoriesList} showComponents={showLowerPart} />
              ) : (
                <MenuCategoriesMobile categories={menuCategoriesList} showComponents={showLowerPart} />
              )}

              {menuItems ? <MenuItems menuItems={menuItems} showComponents={showLowerPart} /> : null}
            </div>

            {window.innerWidth >= 720 ? <MenuItemSlideshow showComponents={showLowerPart} /> : null}
          </div>
        </ReactVisibilitySensor>
      </div>
    );
  }
}

// MenuPage.propTypes = {
//     navbar: PropTypes.object.isRequired,
//     menu: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
    menu: state.menu,
  };
};

export default connect(mapStateToProps, {})(MenuPage);
