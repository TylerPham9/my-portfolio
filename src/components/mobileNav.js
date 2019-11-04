import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes } = theme;

const MobileMenuContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    outline: 0;
    transition: ${theme.transition};
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    display: none;
    ${media.desktop`display: block;`};
`;

const Sidebar = styled.div`
    ${mixins.flexCenter};
    flex-direction: column;
    background-color: ${colors.primaryBackgroundLight};
    padding: 50px;
    width: 50vw;
    height: 100%;
    position: relative;
    right: 0;
    margin-left: auto;
    box-shadow: -10px 0px 30px -15px ${colors.black};
    ${media.thone`padding: 25px;`};
    ${media.phablet`width: 75vw;`};
    ${media.tiny`padding: 10px;`};
`;

const NavLinks = styled.nav`
    ${mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    text-align: center;
`;

const NavList = styled.ul`
    list-style-type: none;
`;

const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${fontSizes.xlarge};
  font-weight: 600;
  ${media.thone`
    margin: 0 auto 10px;
    font-size: ${fontSizes.large};
  `};
  ${media.tiny`font-size: ${fontSizes.medium};`};
`;

const NavLink = styled(Link)`
    color: ${colors.offWhite};
    text-transform: uppercase;
    ${mixins.inlineLink};
    padding: 5px 20px;
`;

const ResumeLink = styled(NavLink)`
`;

const MobileMenu = ({ menuOpen, toggleMenu }) => {

    const HandleMenuClick = e => {
        const target = e.target;
        const isLink = target.hasAttribute('href');
        const isNotMenu = target.classList && target.classList[0].includes('MobileMenuContainer');
    
        if (isLink || isNotMenu) {
          toggleMenu();
        }
      };

    return (
        <MobileMenuContainer
            menuOpen={menuOpen}
            onClick={HandleMenuClick}
            aria-hidden={!menuOpen}
            tabIndex={menuOpen ? 1 : -1}>

            <Sidebar>
                <NavLinks>
                    <NavList>
                        <NavList>
                            {navLinks &&
                                navLinks.map(({ url, name }, i) => (
                                    <NavListItem key={i}>
                                        <NavLink to={url}>
                                            {name}
                                        </NavLink>
                                    </NavListItem>
                                ))}
                            <NavListItem>
                                <ResumeLink
                                    as="a"
                                    href="./Resume.pdf"
                                    target="_blank"
                                    rel="nofollow noopener noreferrer">
                                    Resume
                                </ResumeLink>
                            </NavListItem>
                        </NavList>
                    </NavList>
                </NavLinks>
            </Sidebar>
        </MobileMenuContainer>

    )
}

export default MobileMenu;