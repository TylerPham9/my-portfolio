import React, { Component } from 'react';
import Social from './social';
import MobileMenu from './mobileNav';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes } = theme;

const NavContainer = styled.header`
    ${mixins.flexBetween};
    position: fixed;
    top: 0;
    width: 100%;
    overflow-x: hidden;
    padding: 0px 50px;
    background-color: ${colors.primaryBackground};
    z-index: 11;
    height: ${theme.navHeight};
    ${media.bigDesktop`padding: 0 40px;`};
    ${media.desktop`padding: 0 25px;`};
    box-sizing: border-box;
    transition: ${theme.transition};
    box-shadow: 0 10px 30px -15px ${colors.black};

    .fadein {
        ${mixins.fadeinEnter}
    };

    .fadeGroup {
        .fadein {
            ${mixins.fadeinActive}
        }
    }
`;

const Navbar = styled.nav`
    ${mixins.flexBetween};
    position: relative;
    width: 100%;
    z-index: 12;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    ${media.desktop`display: none;`};
`;

const NavList = styled.ul`
    ${mixins.flexBetween};
    margin: 0;
    list-style-type: none;
`;

const NavListItem = styled.li`
    font-size: ${fontSizes.large};
    font-weight: 600;
    margin: 0 10px;
    transition: ${theme.transition};
`;

const NavLink = styled(Link)`
    padding: 12px 8px;
    text-transform: uppercase;
    ${mixins.inlineLink}
`;

const ResumeLink = styled(NavLink)`

`;

const Hamburger = styled.div`
    ${mixins.flexCenter};
    overflow: visible;
    padding: 5px;
    cursor: pointer;
    text-transform: none;
    border: 0;
    background-color: transparent;
    display: none;
    ${media.desktop`display: flex;`};

    transition: ${theme.transition};
    z-index: 11;
    &:hover,
    &:focus {
        color: ${colors.primary};
    }

`;

const HamburgerBox = styled.div`
    position: relative;
    display: inline-block;
    font-size: ${fontSizes.xxlarge};
`;

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMounted: false,
            menuOpen: false,
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({ isMounted: true }), 100);
    }
    componentWillUnmount() {
        this.setState({ isMounted: false });
    }

    toggleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
        console.log(this.state.menuOpen);
    }


    render() {
        return (
            <NavContainer>
                <Navbar className={`${this.state.isMounted ? "fadeGroup" : ""}`}>
                    <div>
                        <Social />
                    </div>
                    <Hamburger onClick={this.toggleMenu}>
                        <HamburgerBox
                            style={{ transitionDelay: `${300 + theme.fadeinOffset}ms` }}
                            className="fadein">
                            <i className="fa fa-bars" />
                        </HamburgerBox>
                    </Hamburger>

                    <NavLinks>
                        <NavList>
                            {navLinks &&
                                navLinks.map(({ url, name }, i) => (
                                    <NavListItem
                                        key={i}
                                        style={{ transitionDelay: `${i * 50 + 300 + theme.fadeinOffset}ms` }}
                                        className="fadein">
                                        <NavLink to={url}>{name}</NavLink>
                                    </NavListItem>
                                ))}
                            <NavListItem
                                style={{ transitionDelay: `${200 + 300 + theme.fadeinOffset}ms` }}
                                className="fadein">
                                <ResumeLink
                                    as='a'
                                    href="./Resume.pdf"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer">
                                    Resume
                                </ResumeLink>
                            </NavListItem>
                        </NavList>
                    </NavLinks>
                    <MobileMenu
                        menuOpen={this.state.menuOpen}
                        toggleMenu={this.toggleMenu} />
                </Navbar>
            </NavContainer>

        )
    }
}

export default Nav;
