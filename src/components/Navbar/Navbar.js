import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import { } from '../../actions/navbarActions';
import classnames from "classnames";
import "./Navbar.css";
import "./NavbarMobile.css";
import LotusLogoSVG from "../SVGs/LotusLogoSVG/LotusLogoSVG";
import LogoLettersSVG from "../SVGs/LettersSVG/LogoLettersSVG";
import LogoCircleSVG from "../SVGs/LogoCircle/LogoCircleSVG";
import LogoSmallLettersSVG from "../SVGs/LogoSmallLetters/LogoSmallLettersSVG";
import { v4 as generateUniqueID } from "uuid";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarItems: [
        { id: generateUniqueID(), name: "Home", url: "/" },
        { id: generateUniqueID(), name: "Menu", url: "/menu" },
        { id: generateUniqueID(), name: "About", url: "/about" },
        { id: generateUniqueID(), name: "Gallery", url: "/gallery" },
        { id: generateUniqueID(), name: "Find Us", url: "/findus" },
      ],
      lastTimeoutId: 0,
      showNavItemAnim: false,
      scrollY: 0,
    };

    // refs
    this.navbarDifRef = React.createRef();
  }

  componentDidMount() {
    if (window.innerWidth >= 900) {
      setTimeout(() => {
        this.setState({ showNavItem: true });
      }, 1000);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 900 && !this.state.showNavItem) {
        this.setState({ showNavItem: true });
      }
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.pathname !== prevState.currentPage) {
      return {
        currentPage: nextProps.location.pathname,
      };
    }

    return null;
  }

  componentDidUpdate() {
    const { scrollY, stickyNavbar } = this.state;

    if (scrollY >= 223 && window.innerWidth >= 900 && !stickyNavbar) {
      // console.log("sticky");
      this.setState({ stickyNavbar: true });
    } else if (scrollY < 223 && stickyNavbar) {
      // console.log("not sticky");
      this.setState({ stickyNavbar: false });
    }

    const { scrollEventListenerSet } = this.state;
    if (!scrollEventListenerSet && this.props.pRef && this.props.pRef.current) {
      this.setState({ scrollEventListenerSet: true });
      this.props.pRef.current.addEventListener("scroll", (e) => {
        const { scrollY } = this.state;
        const currentScrollY = e.target.scrollTop;
        const { scrollDirection } = this.state;

        if (currentScrollY > scrollY && scrollDirection !== "down") {
          // console.log('down');
          this.setState({ scrollDirection: "down" });
        } else if (currentScrollY < scrollY && scrollDirection !== "up") {
          // console.log('up');
          this.setState({ scrollDirection: "up" });
        }
        this.setState({ scrollY: currentScrollY });
      });
    }
  }

  render() {
    const {
      currentPage,
      navbarItems,
      expandMenu,
      hamburgerIconWrapperActive,
      showNavItem,
      disableHamburger,
      stickyNavbar,
      scrollDirection,
      scrollY,
    } = this.state;

    return (
      <div
        className={classnames("navbarDiv", {
          navbarDivMinimized: !expandMenu,
          stickyNavbar: stickyNavbar,
          hideStickyNavbar: scrollDirection === "down" && scrollY > 300,
        })}
        ref={this.navbarDifRef}
        onTransitionEnd={(e) => {
          if (e.target === this.navbarDifRef.current && disableHamburger) this.setState({ disableHamburger: false });
        }}
      >
        <span></span>
        <span></span>

        <div
          className={classnames("hamburgerDiv", {
            disabled: disableHamburger,
          })}
        >
          <div
            onClick={(e) => {
              this.setState((prevState) => {
                return {
                  disableHamburger: true,
                  hamburgerIconWrapperActive: !prevState.hamburgerIconWrapperActive,
                  expandMenu: !prevState.expandMenu,
                };
              });
            }}
            className={classnames("hamburgerIconWrapper", {
              hamburgerIconWrapperActive: hamburgerIconWrapperActive,
            })}
          >
            <div className="hamburgerIconInner"></div>
          </div>
        </div>

        <div className="greenZenphonySymbolWrapperDiv">
          <span></span>
          <span></span>
          {/* <GreenZenphonySymbol /> */}

          <div
            className={classnames("logoDiv", {
              logoDivMinimized: !expandMenu,
            })}
          >
            <LotusLogoSVG loadAnim={true} />
            <LogoLettersSVG loadAnim={true} />
            <LogoCircleSVG loadAnim={true} />
            <LogoSmallLettersSVG loadAnim={true} />
          </div>
        </div>

        <ul
          className="navbarList"
          onTransitionEnd={() => {
            // if (expandMenu && !showNavItem) this.setState({ showNavItem: true });
            // else if (!expandMenu && showNavItem) this.setState({ showNavItem: false });
          }}
        >
          {navbarItems.map((item, index) => {
            return (
              <li
                key={item.id}
                className={classnames("navbarItem", {
                  buttonActive: item.url === currentPage,
                  showNavItem: expandMenu || showNavItem,
                  hideNavItem: !expandMenu,
                })}
              >
                <Link
                  to={item.url}
                  name={item.name}
                  // onClick={ (e) =>{
                  //     this.onClick(e);
                  //     this.setState({ expandMenu: false, hamburgerIconWrapperActive: false });
                  // }}
                  className={classnames("", {
                    showNavItemAnim: this.state.showNavItemAnim,
                    // "buttonActive": item === currentPage
                  })}
                  onClick={(e) => {
                    if (item.name === "Gallery") {
                      e.preventDefault();
                      return;
                    }
                    this.setState({ expandMenu: false, hamburgerIconWrapperActive: false });
                  }}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// Navbar.propTypes = {
//     navbar: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => {
  return {
    navbar: state.navbar,
    styles: state.styles,
  };
};

export default withRouter(connect(mapStateToProps, {})(Navbar));
