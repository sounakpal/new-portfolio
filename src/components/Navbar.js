import React from "react";
import { Link } from "gatsby";
import linkedin from "../img/logo-linkedin.png"; 
import posed from 'react-pose';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });

      }
    );
  };


  render() {
    return (
      <nav
        className="navbar is-fixed-bottom"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
            <MenuAnimation
             className={`navbar-menu ${this.state.navBarActiveClass}`}
            pose={this.state.navBarActiveClass ===  "is-active" ? "on" : "off"}
            >
            <div id="navMenu">
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                Skills
              </Link>
              <Link className="navbar-item" to="/products">
                Work
              </Link>
              <Link className="navbar-item" to="/blog">
                Resume
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://linkedin.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                target="_blank"
                rel="noopener noreferrer">
                <span className="icon">
                  <img src={linkedin} alt="LinkedIn" />
                </span>
              </a>
            </div>
          </div>
            </MenuAnimation>
          </div>
         
        </div>
      </nav>
    );
  }
};
const MenuAnimation = posed.div({
  off: {
    opacity: 0,
    background: '#ff2'
  },
  on: {
    opacity: 1,
    background: '#fff',
    transition: { 
      opacity:{duration: 1300},
      background: {duration:1000} 
    }
  }
});
            
export default Navbar;

