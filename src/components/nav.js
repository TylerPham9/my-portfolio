import React, { Component } from 'react';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { navLinks, socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

const NavContainer = styled.header`
    ${mixins.flexBetween};
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0px 50px;
    background-color: ${colors.primaryBackground};
    z-index: 1;
    height: ${theme.navHeight};
`;

const Navbar = styled.nav`
    ${mixins.flexBetween};
    position: relative;
    width: 100%;
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    ${media.tablet`display: none;`};
`;

const NavList = styled.ul`
    div {
        ${mixins.flexBetween};
    }
    margin: 0;
    list-style-type: none;
`;

const NavListItem = styled.li`
    font-size: ${fontSizes.medium};
    font-weight: 600;
    margin: 0 10px;
`;

const NavLink = styled(Link)`
    padding: 12px 8px;
    color: ${colors.white};
    text-transform: uppercase;
    ${mixins.inlineLink}
`;

const SocialContainer = styled.div`
    color: ${colors.white};

`;


const SocialLink = styled.a`
    padding: 5px;
    color: ${colors.white};
    display: inline-block;
    transition: ${theme.transition};
    font-size: ${theme.iconSize};
    /* transition: all 1s ease-out; */
    &:hover,
    &:focus {
        transform: translateY(-5px);
        color: ${colors.primary};
    }
`;

const Hamburger = styled.div`
    ${mixins.flexCenter};
    overflow: visible;
    padding: 5px;
    cursor: pointer;
    text-transform: none;
    color: inherit;
    border: 0;
    background-color: transparent;
    display: none;
    ${media.tablet`display: flex;`};
`;

const HamburgerBox = styled.div`
    position: relative;
    display: inline-block;
    font-size: ${theme.iconSize};
`;


class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMounted: false,
            menuOpen: false
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
        console.log(this.state.menuOpen)
    }

    render() {
        return (
            <NavContainer>
                <Navbar>
                    <SocialContainer>
                        <TransitionGroup>
                            {this.state.isMounted &&
                                socialMedia &&
                                socialMedia.map(({ name, url, icon }, i) => (
                                    <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                                        <SocialLink
                                            style={{ transitionDelay: `${i * 100}ms` }}
                                            key={i}
                                            href={url}
                                            target="_blank"
                                            aria-label={name}
                                            rel="nofollow noopener noreferrer">
                                            <i className={icon} />
                                        </SocialLink>
                                    </CSSTransition>
                                ))}

                        </TransitionGroup>
                    </SocialContainer>

                    <TransitionGroup>
                        {this.state.isMounted && (
                            <CSSTransition classNames="fade" timeout={3000}>
                                <Hamburger onClick={this.toggleMenu}>
                                    <HamburgerBox>
                                        <i className="fa fa-bars" />
                                        {/* <HamburgerInner menuOpen={this.state.menuOpen} /> */}
                                    </HamburgerBox>
                                </Hamburger>
                            </CSSTransition>
                        )}
                    </TransitionGroup>


                    <NavLinks>
                        <NavList>
                            <TransitionGroup>
                                {this.state.isMounted &&
                                    navLinks &&
                                    navLinks.map(({ url, name }, i) => (
                                        <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                                            <NavListItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                                                <NavLink to={url}>{name}</NavLink>
                                            </NavListItem>
                                        </CSSTransition>
                                    ))}
                            </TransitionGroup>
                        </NavList>
                    </NavLinks>
                </Navbar>
            </NavContainer>

        )
    }
}

export default Nav;