import React, { Component } from 'react';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes } = theme;

const SocialContainer = styled.div`
    ${mixins.flexBetween};
    flex-direction: row;    
    margin: 0 auto;
`;

const SocialItem = styled.div`
`;

const SocialLink = styled.a`
    padding: 5px;
    color: ${colors.offWhite};
    display: inline-block;
    transition: ${theme.transition};
    font-size: ${fontSizes.xxlarge};
    ${media.thone`font-size: ${fontSizes.xlarge};`};
    &:hover,
    &:focus {
        transform: translateY(-5px);
        color: ${colors.primary};
    }
`;

class Social extends Component {

    render() {
        return (
            <SocialContainer>
                {socialMedia &&
                    socialMedia.map(({ name, url, icon }, i) => (
                        <SocialItem
                            key={i}
                            style={{ transitionDelay: `${i * 50 + theme.fadeinOffset}ms` }}
                            className="fadein">

                            <SocialLink
                                title={name}
                                href={url}
                                target="_blank"
                                aria-label={name}
                                rel="nofollow noopener noreferrer">
                                <i className={icon} />
                            </SocialLink>
                        </SocialItem>
                    ))}
            </SocialContainer>
        )
    }
}

export default Social;