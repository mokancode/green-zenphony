import React, { Component } from "react";
import "./MenuCategoriesMobile.css";
import classnames from "classnames";
import { connect } from "react-redux";
import { setMenuCategory, setMenuInTransition } from "../../../actions/menuActions";
import isEmpty from "../../../is-empty";

class MenuCategoriesMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setMenuCategory(this.props.categories[0].name);
    setTimeout(() => {
      this.setState({ currentCategory: this.props.categories[0].name });
    }, 10);
  }

  componentDidUpdate() {
    const { menuInTransition } = this.props.menu;
    const { disabled } = this.state;
    if (menuInTransition && !disabled) {
      // console.log("1")
      this.setState({ disabled: true });
    } else if (!menuInTransition && disabled) {
      // console.log("2")
      this.setState({ disabled: false });
    }

    // if (!isEmpty(this.state.currentCategory) && this.props.showComponents && !this.state.showCategories) {
    //     this.setState({ showCategories: true });
    // }
  }

  render() {
    const { categories } = this.props;
    const { showCategories, currentCategory, disabled } = this.state;

    return (
      <div
        className={classnames("menuCategoriesMobile", {
          show: showCategories,
        })}
      >
        <button
          onClick={() => {
            this.setState((prevState) => {
              // console.log("click");
              return {
                showCategories: !prevState.showCategories,
              };
            });
          }}
        >
          {">"}
        </button>

        <h1>{currentCategory}</h1>
        <ul className="menuCategoriesListMobile">
          {categories
            .filter((fCategory, fIndex) => {
              return fCategory.name !== currentCategory;
            })
            .map((category, index) => {
              return (
                <li key={category.id} style={{ pointerEvents: disabled ? "none" : "all" }}>
                  <p
                    className={classnames("categoryName", {
                      current: currentCategory === category.name,
                    })}
                    onClick={() => {
                      if (currentCategory === category.name) return;
                      this.props.setMenuInTransition(true);
                      this.props.setMenuCategory(category.name);
                      this.setState({ currentCategory: category.name, showCategories: false });
                    }}
                  >
                    {category.name}
                  </p>
                </li>
              );
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

export default connect(mapStateToProps, { setMenuCategory, setMenuInTransition })(MenuCategoriesMobile);
// export default MenuCategoriesMobile;
