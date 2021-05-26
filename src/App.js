import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import About from "./components/AboutPage/About";
import Home from "./components/Home/Home";
import FindUsPage from "./components/FindUsPage/FindUsPage";
import MenuPage from "./components/MenuPage/MenuPage";
import Navbar from "./components/Navbar/Navbar";
import TopSlogan from "./components/Navbar/TopSlogan/TopSlogan";
import MainCurtain from "./components/MainCurtain/MainCurtain";
import { connect } from "react-redux";
import { setScrollableAncestor } from "./actions/navbarActions";
import classnames from "classnames";
import isEmpty from "./is-empty";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appVer: "1.0.6",
      scrollY: 0,
      lastYPos: window.scrollY,
    };

    this.prev = window.scrollY;

    // refs
    this.scrollableAncestor = React.createRef();
  }

  componentDidMount() {
    document.title = "Green Zenphony MVP";

    window.addEventListener("scroll", () => {
      // console.log("scroll");
    });

    // Determine if device has a touch screen.
    try {
      document.createEvent("TouchEvent");
      this.setState({ touchScreen: true });
      // this.props.setIsTouchScreen(true);
      //   console.log("touch true");
    } catch (e) {
      // console.log("touch false");
    }

    this.scrollableAncestor.current.addEventListener("scroll", () => {
      window.scrollY = this.scrollableAncestor.current.scrollTop;
    });
    //   // console.log("test");
    //   // const currentScrollY = this.scrollableAncestor.current.scrollTop;
    //   // const { scrollY, scrollDirection } = this.state;

    //   // if (currentScrollY > scrollY && scrollDirection !== "down") {
    //   //   // console.log('down');
    //   //   this.setState({ scrollDirection: "down" });
    //   // }
    //   // else if (currentScrollY < scrollY && scrollDirection !== "up") {
    //   //   // console.log('up');
    //   //   this.setState({ scrollDirection: "up" });
    //   // }
    //   // this.setState({ scrollY: currentScrollY });

    //   // // console.log("scrollY: ", this.prev);
    //   // console.log("scrollY 2: ", window.pageYOffset);

    //   // if (this.scrollableAncestor.current.scrollTop >= 0 && this.scrollableAncestor.current.scrollTop < 223
    //   //   && !(scrollY >= 0 && scrollY < 223)) {
    //   //   // console.log("setting scrollY");
    //   //   this.setState({ scrollY: this.scrollableAncestor.current.scrollTop });
    //   // }
    //   // else if (this.scrollableAncestor.current.scrollTop >= 223 && this.scrollableAncestor.current.scrollTop < 300
    //   //   && !(scrollY >= 223 && scrollY < 300)) {
    //   //   // console.log("setting scrollY");
    //   //   this.setState({ scrollY: this.scrollableAncestor.current.scrollTop });
    //   // }
    //   // else if (this.scrollableAncestor.current.scrollTop > 300 && this.scrollableAncestor.current.scrollTop < 400
    //   //   && !(scrollY > 300 && scrollY < 400)) {
    //   //   // console.log("setting scrollY");
    //   //   this.setState({ scrollY: this.scrollableAncestor.current.scrollTop });
    //   // }

    //   // // Determine scroll direction
    //   // if (currentScrollY >= 300 && window.innerWidth >= 900) {
    //   //   const { lastYPos } = this.state;
    //   //   console.log("scroll", currentScrollY, lastYPos, scrollDirection);
    //   //   if (currentScrollY > lastYPos && scrollDirection !== "down") {
    //   //     console.log("scroll direction down");
    //   //     this.setState({ lastYPos: currentScrollY, scrollDirection: "down" });
    //   //   }
    //   //   else if (currentScrollY < lastYPos && scrollDirection !== "up") {
    //   //     console.log("scroll direction up");
    //   //     this.setState({ lastYPos: currentScrollY, scrollDirection: "up" });
    //   //   }
    //   // }

    //   // this.prev = this.scrollableAncestor.current.scrollTop;

    // }.bind(this));

    // if (!isEmpty(this.scrollableAncestor) && !isEmpty(this.scrollableAncestor.current) && isEmpty(this.props.navbar.scrollableAncestor)) {
    //   // console.log("setting ancestor");
    //   this.props.setScrollableAncestor(this.scrollableAncestor.current);
    // }
  }

  componentDidUpdate() {
    if (this.state.bgLoaded && !this.state.showNav)
      setTimeout(() => {
        this.setState({ showNav: true });
      }, 500);

    // if (!isEmpty(this.scrollableAncestor) && !isEmpty(this.scrollableAncestor.current) && isEmpty(this.props.navbar.scrollableAncestor)) {
    //   // console.log("setting ancestor");
    //   this.props.setScrollableAncestor(this.scrollableAncestor.current);
    // }
  }

  render() {
    const { bgLoaded, showNav, touchScreen, scrollDirection, scrollY, appVer } = this.state;
    const { mainCurtainOpened } = this.props.styles;

    return (
      <div
        className={classnames("app", {
          touchScreen: touchScreen,
        })}
        ref={this.scrollableAncestor}
      >
        <div id="appVerWrapper">
          <p>v{appVer}</p>
        </div>

        <img
          className="backgroundImg"
          src={"misc/background.jpg"}
          onLoad={() => {
            this.setState({ bgLoaded: true });
          }}
        ></img>

        {!mainCurtainOpened ? <MainCurtain bgLoaded={bgLoaded} /> : null}

        {showNav ? (
          <div className="navbarWrapper">
            <div className="greenZenphonyHeaderWrapperDiv">
              <h1 className="greenZenphonyHeader">Green Zenphony</h1>
              <TopSlogan />
            </div>
            <Navbar pRef={this.scrollableAncestor} />
          </div>
        ) : null}

        {bgLoaded && mainCurtainOpened ? (
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={this.props.location.key}
              timeout={{ enter: 300, exit: 1000 }}
              // timeout={{ enter: 100, exit: 100 }}
              classNames="pageSwitching"
            >
              <div className="routesContainer">
                <Switch location={this.props.location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/menu" component={MenuPage} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/findus" component={FindUsPage} />
                  {/* <Route exact path='/findus' component={Location} /> */}

                  {/* <Route exact path='/portfolio' render={
                  function (props) {
                    return <Portfolio {...props} />
                  }
                } /> */}

                  {/* <Route path='*' component={PageNotFound} /> */}
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    styles: state.styles,
    navbar: state.navbar,
  };
};

export default withRouter(connect(mapStateToProps, { setScrollableAncestor })(App));
// export default withRouter(App);
