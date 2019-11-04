import React, { Component } from "react";
import Caption from './caption';
import Social from './social';
import styled from 'styled-components';
import { email } from '@config';
import { theme, mixins } from '@styles';
const { colors, fontSizes } = theme;


const ContactContainer = styled.section`
    ${mixins.flexCenter};
    width: 100%;
    text-align: center;
`;

const Title = styled.h4`
    font-size: ${fontSizes.title};
`;

const EmailContainer = styled.div`
    padding: 1em 1em 2em;
    ${mixins.flexCenter};
`;

const EmailLink = styled.a`
    position: relative;
    color: ${colors.offWhite};
    background-color: transparent;
    border: 3px solid ${colors.offWhite};
    border-radius: 5px;
    padding: 0.75em 1.25em;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
        color: ${colors.primary};
        border: 3px solid ${colors.primary};
    }
`;

class Contact extends Component {

    render() {
        const { data } = this.props;
        const { frontmatter, html } = data[0].node;
        const { title } = frontmatter;

        return (
            <ContactContainer id="contact">
                <Caption>
                    <Title
                        className="fadein"
                        style={{ transitionDelay: `${theme.fadeinOffset}ms` }}>
                        {title}
                    </Title>
                    <div
                        className="fadein"
                        style={{ transitionDelay: `${100 + theme.fadeinOffset}ms` }}
                        dangerouslySetInnerHTML={{ __html: html }} />

                    <EmailContainer
                        className="fadein"
                        style={{ transitionDelay: `${200 + theme.fadeinOffset}ms` }}>
                        <EmailLink
                            href={`mailto: ${email} `}
                            target="_blank"
                            rel="nofollow noopener noreferrer">
                            Contact Me!
                        </EmailLink>
                    </EmailContainer>

                    <Social />

                </Caption>
            </ContactContainer>

        )
    }
}

export default Contact;