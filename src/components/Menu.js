import React from "react";
import { css } from "@emotion/css";

const easeSlow = css`
  transition: all 450ms ease-in-out;
`;

const menuBtn = css`
  position: absolute;
  z-index: 3;
  right: 35px;
  top: 35px;
  cursor: pointer;
  ${easeSlow};
  &.closer {
    transform: rotate(180deg);
  }
`;

const btnLine = css`
  width: 28px;
  height: 4px;
  margin: 0 0 5px 0;
  background-color: white;
  ${easeSlow};
  &.closer {
    background-color: black;  
    &:nth-child(1) {
      transform: rotate(45deg) translate(4px, 0px);
      width: 20px;
    }
    &:nth-child(2) {
      transform: translateX(-8px);
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(4px, 0px);
      width: 20px;
    }
  }
`;

const menuOverlay = css`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  height: 100vh;
  width: 40vw;
  transform: translateX(100%);
  transition: all 500ms ease-in-out;
  &.show {
    background-color: #FFFFFF;
    transform: translateX(0%); 
  }
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

class Menu extends React.Component {
    state = {
        isMenuOpen: false
    };

    toggleMenu = () => 
        this.setState(({ isMenuOpen }) => (
            { isMenuOpen: !isMenuOpen }
        ));
    
    render() {
        const { isMenuOpen } = this.state;

        return (
            <React.Fragment>
                <div className={`${menuBtn} ${isMenuOpen ? "closer" : null}`} onClick={this.toggleMenu}>
                    <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
                    <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
                    <div className={`${btnLine} ${isMenuOpen ? "closer" : null}`} />
                </div>
                
                <div className={`${menuOverlay} ${isMenuOpen ? "show" : null}`}>
                    <nav>
                        <ul>
                            <li className="menu-item">
                                <a onClick={this.toggleMenu} href="#who-we-are">who we are</a>
                            </li>

                            <li className="menu-item">
                                <a onClick={this.toggleMenu} href="#our-services">our services</a>
                            </li>

                            <li className="menu-item">
                                <a onClick={this.toggleMenu} href="#founders">founders</a>
                            </li>

                            <li className="menu-item">
                                <a onClick={this.toggleMenu} href="#what-we-live-by">what we live by</a>
                            </li>

                            <li className="menu-item">
                                <a onClick={this.toggleMenu} href="#why-choose-us">why choose us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default Menu;