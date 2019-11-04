import React, { Component } from 'react';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes } = theme;

const WorkContentContainer = styled.div`
    position: relative;
    padding: 5px 0px;
    overflow: hidden;
`;

const WorkContentItem = styled.div`
    opacity: ${props => (props.isActive ? 1 : 0)};
    position: ${props => (props.isActive ? 'relative' : 'absolute')};
    visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
    transition: ${theme.transistion};
    transition-duration: ${props => (props.isActive ? '1s' : '0s')};
    ul {
        li {
            padding: 2px 0px;
            &:before { 
                content: '▹';
                color: ${colors.primary}
            }
        }
    }
`;

const WorkTitle = styled.h4`
    font-size: ${fontSizes.large};
    ${media.bigDesktop`font-size: ${fontSizes.medium}`}
    span {
        display: inline-block;
    }
`;

const WorkDate = styled.h5`
    font-size: ${fontSizes.xsmall};
    color: ${colors.offWhite};
    padding-bottom: 10px;
`;

const Company = styled.span`
    color: ${colors.primary};
    a {
        ${mixins.inlineLink};
        color: ${colors.primary};
    }
`;


class WorkContent extends Component {
    render() {
        let activeClass = this.props.activeId;

        return (
            <WorkContentContainer>
                {this.props.data.map(({ node }, i) => {
                    const { frontmatter, html } = node;
                    const { title, url, company, range } = frontmatter;

                    return (<WorkContentItem
                        key={i}
                        isActive={activeClass === i}>

                        <WorkTitle>
                            <span>
                                {title}&nbsp;
                            </span>
                            <Company>
                                @&nbsp;
                            <a
                                href={url}
                                target="_blank"
                                rel="nofollow noopener noreferrer">
                                    {company}
                            </a>
                            </Company>
                        </WorkTitle>
                        <WorkDate>
                            {range}
                        </WorkDate>

                        <div dangerouslySetInnerHTML={{ __html: html }} />

                    </WorkContentItem>
                    );
                })}

            </WorkContentContainer>
        );
    }
}

export default WorkContent;